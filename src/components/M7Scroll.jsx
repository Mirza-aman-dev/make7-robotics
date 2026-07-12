"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const FRAME_COUNT = 191;

export default function M7Scroll() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply spring physics to the scroll progress to eliminate jagged scroll-wheel bumps and make the scrub buttery smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT]);

  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    
    // Detect if device is in portrait orientation (mobile 9:16 aspect ratio)
    const isMobileAspect = window.innerWidth < window.innerHeight;
    const folderPath = isMobileAspect ? '/sequence_mobile' : '/Robot sequence';
    
    for (let i = 0; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      const fileNum = i + 1; // Map index 0->191 to file 1->192
      const indexString = String(fileNum).padStart(3, '0');
      img.src = `${folderPath}/frame_${indexString}.png`;
      img.onload = () => {
        loadedCount++;
        setLoaded(loadedCount);
      };
      img.onerror = () => {
        loadedCount++;
        setLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (loaded < FRAME_COUNT + 1) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const render = (index) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const img = images[index];
      // Use the first image as the source of truth for dimensions to prevent jitter if frames vary slightly in size
      const baseImg = images[0] || img; 
      if (img && img.complete && img.naturalWidth > 0 && baseImg && baseImg.naturalWidth > 0) {
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";

        const scale = Math.max(canvas.width / baseImg.width, canvas.height / baseImg.height);
        
        // Strict integer rounding prevents hardware anti-aliasing interpolation, completely eliminating edge shimmering/shaking
        const drawWidth = Math.round(baseImg.width * scale);
        const drawHeight = Math.round(baseImg.height * scale);
        const x = Math.round((canvas.width - drawWidth) / 2);
        const y = Math.round((canvas.height - drawHeight) / 2);

        ctx.drawImage(img, x, y, drawWidth, drawHeight);
      } else {
        // Procedural fallback animation if images are missing
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const progress = index / FRAME_COUNT;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        
        // Futuristic spinning rings
        for (let i = 0; i < 8; i++) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 180, 168, ${0.1 + (0.4 * (1 - progress))})`;
            ctx.lineWidth = 1 + i;
            const radius = 50 + (progress * 600) + (i * 40 * Math.sin(progress * Math.PI * 4 + i));
            ctx.arc(0, 0, Math.max(5, radius), 0, Math.PI * 2);
            ctx.stroke();
        }
        
        // Glowing core
        ctx.beginPath();
        const coreGlow = 0.5 + Math.sin(progress * Math.PI * 10) * 0.5;
        ctx.fillStyle = `rgba(255, 180, 168, ${coreGlow * 0.8})`;
        ctx.arc(0, 0, 40 + progress * 80, 0, Math.PI * 2);
        ctx.fill();
        
        // Core center
        ctx.beginPath();
        ctx.fillStyle = "#fff";
        ctx.arc(0, 0, 20 + progress * 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    };

    // Persistent requestAnimationFrame loop guarantees exactly 1 render per display refresh
    // This completely eliminates the event-flooding frame drops that happen during fast scrolling
    let animationFrameId;
    let lastRenderedFrame = -1;

    const tick = () => {
      const currentFrame = Math.min(FRAME_COUNT, Math.max(0, Math.floor(frameIndex.get())));
      if (currentFrame !== lastRenderedFrame) {
        render(currentFrame);
        lastRenderedFrame = currentFrame;
      }
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const currentFrame = Math.min(FRAME_COUNT, Math.max(0, Math.floor(frameIndex.get())));
      render(currentFrame);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [loaded, frameIndex, images]);

  const isLoading = loaded < (FRAME_COUNT + 1) * 0.5; // Start showing once 50% loaded to prevent long blocks

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#e6e6e6]">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#e6e6e6] text-primary-container">
          <div className="w-12 h-12 border-4 border-primary-container/20 border-t-primary-container/80 rounded-full animate-spin mb-6" />
          <p className="text-primary-container/80 tracking-widest text-sm font-label-caps animate-pulse">
            Initializing M7 Engine... {Math.floor((loaded / (FRAME_COUNT + 1)) * 100)}%
          </p>
        </div>
      )}

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(smoothProgress, [0.8, 1], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="font-label-caps text-[10px] tracking-widest text-primary-container/60 uppercase">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-primary-container/20 overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-full h-1/2 bg-primary-container/60"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
