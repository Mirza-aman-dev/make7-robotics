"use client";

import { useState } from 'react';
import M7Scroll from "@/components/M7Scroll";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-3 bg-surface/10 backdrop-blur-[32px] rounded-full mt-4 md:mt-6 mx-auto w-[calc(100%-24px)] md:w-[calc(100%-48px)] max-w-container-max border border-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
        <a href="#home" className="flex items-center" onClick={closeMenu}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="Make7 Robotics Logo" className="h-8 md:h-10 object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-gutter">
          <a className="font-label-caps text-[10px] lg:text-label-caps text-primary font-bold border-b border-primary pb-1" href="#home">Home</a>
          <a className="font-label-caps text-[10px] lg:text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" href="#about">About</a>
          <a className="font-label-caps text-[10px] lg:text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" href="#products">Products</a>
          <a className="font-label-caps text-[10px] lg:text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300" href="#contact">Contact</a>
        </nav>
        <a className="hidden md:inline-flex items-center justify-center font-label-caps text-[10px] lg:text-label-caps text-primary glass-floating px-4 lg:px-6 py-2 lg:py-3 rounded-full hover:bg-white/5 transition-colors duration-300 scale-95 active:scale-90 transition-transform" href="#partner">
          Partner With Us
        </a>
        <button className="md:hidden text-on-surface p-1" onClick={toggleMenu}>
          <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
      </header>

      {/* Mobile Menu Slider */}
      <div className={`fixed inset-0 z-[100] bg-surface-dim/95 backdrop-blur-md transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.png" alt="Make7 Robotics Logo" className="h-8 object-contain" />
          <button onClick={closeMenu} className="text-on-surface p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>
        <nav className="flex flex-col p-6 gap-6 flex-1 justify-center items-center">
          <a className="font-headline-md text-2xl text-primary font-bold" href="#home" onClick={closeMenu}>Home</a>
          <a className="font-headline-md text-2xl text-on-surface-variant hover:text-primary transition-colors" href="#about" onClick={closeMenu}>About</a>
          <a className="font-headline-md text-2xl text-on-surface-variant hover:text-primary transition-colors" href="#products" onClick={closeMenu}>Products</a>
          <a className="font-headline-md text-2xl text-on-surface-variant hover:text-primary transition-colors" href="#contact" onClick={closeMenu}>Contact</a>
          <a className="font-label-caps text-sm text-primary glass-floating px-8 py-4 rounded-full mt-4" href="#partner" onClick={closeMenu}>
            Partner With Us
          </a>
        </nav>
      </div>

      <main className="bg-[#030305] text-on-background font-body-md antialiased relative" id="home">
        {/* Scrollytelling Hero replaces the old Hero section */}
        <M7Scroll />

        {/* 2. About Section */}
        <section className="py-12 md:py-margin-desktop px-4 sm:px-8 md:px-margin-desktop bg-surface-container-lowest" id="about">
          <div className="max-w-container-max mx-auto flex flex-col gap-8 md:gap-stack-lg">
            <div className="max-w-3xl">
              <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-on-surface mb-4 md:mb-stack-md">Bridging the Innovation Gap in Doha.</h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
                We are fundamentally transforming the educational landscape in Qatar. By providing state-of-the-art, accessible robotics infrastructure directly to schools, we empower educators to deliver world-class STEM education, seamlessly integrating practical, hands-on engineering principles into everyday learning.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-gutter">
              {/* Stat Card 1 */}
              <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col items-start gap-3 md:gap-4 hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                <h3 className="font-headline-md text-xl md:text-headline-md text-on-surface">Grades 3–9</h3>
                <p className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant">Supported Curriculum</p>
              </div>
              {/* Stat Card 2 */}
              <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col items-start gap-3 md:gap-4 hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>precision_manufacturing</span>
                <h3 className="font-headline-md text-xl md:text-headline-md text-on-surface">100% Turnkey</h3>
                <p className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant">Lab Setups</p>
              </div>
              {/* Stat Card 3 */}
              <div className="glass-panel rounded-xl p-6 md:p-8 flex flex-col items-start gap-3 md:gap-4 hover:-translate-y-1 transition-transform duration-300">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                <h3 className="font-headline-md text-xl md:text-headline-md text-on-surface">Accredited</h3>
                <p className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant">Diploma Pathways</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Products Section */}
        <section className="py-12 md:py-margin-desktop px-4 sm:px-8 md:px-margin-desktop bg-surface" id="products">
          <div className="max-w-container-max mx-auto flex flex-col gap-8 md:gap-stack-lg">
            <div className="text-center px-2">
              <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-on-surface mb-3 md:mb-stack-sm">Turnkey Robotics &amp; AI Ecosystems.</h2>
              <p className="font-body-md text-sm sm:text-base text-on-surface-variant">Modular, scalable solutions designed for immediate classroom deployment.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
              {/* Bento Card 1 */}
              <div className="glass-panel rounded-xl overflow-hidden flex flex-col relative group lg:col-span-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" alt="A highly detailed, hyper-realistic render of a modern, modular robotics training station designed for a classroom setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkYOKn3RRLoD-6WsWwiji6zSDn8HKCwxNOL5U9DmR9WpVMyIfU8AtlUkCOOzPeuYBBFJfY3Lz22tCBypr3sljnl626qomuFja8-SrGfh75ufJBEyJjovNm6R4XqC4WuGWy6hhOA5Q2Iski6Ekqu5FbqOUrMBwgycohwqPUd4FI4G9zzNajzn-TRdzkKOvFQshWk2sxljFYo2cU-rWyno22nfSopDb3vCrDM9OcsCxZdtcrsncMJgPHwojrIK7HGyDpkku0uQFwrYQi" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent z-10"></div>
                <div className="relative z-20 mt-auto p-6 md:p-8 flex flex-col gap-3 md:gap-4">
                  <span className="inline-block px-3 py-1 glass-floating rounded-full font-label-caps text-[10px] md:text-label-caps text-primary w-max">For Classrooms</span>
                  <h3 className="font-headline-md text-xl md:text-headline-md text-on-surface">Mobile-Trainer STEM Labs</h3>
                  <p className="font-body-md text-sm md:text-body-md text-on-surface-variant line-clamp-2 md:line-clamp-3">Complete, transportable robotic workstations that transform any standard classroom into a fully functional engineering lab in minutes.</p>
                </div>
              </div>
              {/* Bento Card 2 */}
              <div className="glass-panel rounded-xl overflow-hidden flex flex-col relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500" alt="A macro shot of an advanced AI processing unit and robotic arm end-effector, featuring intricate circuitry and precise mechanical joints." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0QqEdWnP26Fct41mP-zJHNRMNptG7THp8mngBBiMZn5chz1paxILXlg7E_IIXIY8tAmiv2kxLKgZtYdXVmE4HGIUP6hD0Y9Q6GnZXdsDIo_Juuwu6j9LXFifQXylro8wWI0-MUiBA3sdsl4z6G3emJs_eD0G8nZpQbBpAn3nnPmwTLDRM8Ix6LyayfUKLlYkQ9I8TBFuvanN-PYhGFDQe6sh6I1aK0ZQQvXYbytaHvjDoaJHjFBjKqbm0CeYBPvUJIUW_k-EY38b2" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim to-transparent z-10"></div>
                <div className="relative z-20 mt-auto p-6 md:p-8 flex flex-col gap-3 md:gap-4">
                  <span className="inline-block px-3 py-1 glass-floating rounded-full font-label-caps text-[10px] md:text-label-caps text-tertiary w-max">High School &amp; Up</span>
                  <h3 className="font-headline-md text-xl md:text-headline-md text-on-surface">Advanced AI &amp; Automation Kits</h3>
                </div>
              </div>
              {/* Bento Card 3 */}
              <div className="glass-panel rounded-xl overflow-hidden flex flex-col relative group lg:col-span-3 h-[250px] md:h-[300px]">
                <div className="absolute inset-0 bg-surface-container-high/50 z-10 backdrop-blur-sm"></div>
                <div className="relative z-20 flex flex-col md:flex-row items-start md:items-center justify-between h-full p-6 md:p-12 gap-4 md:gap-8">
                  <div className="flex flex-col gap-3 md:gap-4 max-w-2xl">
                    <span className="inline-block px-3 py-1 glass-floating rounded-full font-label-caps text-[10px] md:text-label-caps text-secondary w-max">B2B Partnership</span>
                    <h3 className="font-headline-md text-xl md:text-headline-md text-on-surface">Educator Training &amp; Support</h3>
                    <p className="font-body-md text-sm md:text-body-md text-on-surface-variant hidden sm:block">We provide comprehensive professional development, ensuring your staff is confident and capable of delivering high-impact robotics curriculum.</p>
                  </div>
                  <a className="btn-primary-glass font-label-caps text-xs md:text-label-caps text-primary px-6 md:px-8 py-3 md:py-4 rounded-full whitespace-nowrap shrink-0 mt-2 md:mt-0" href="#partner">
                    View Support Plans
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Contact Us Section */}
        <section className="py-12 md:py-margin-desktop px-4 sm:px-8 md:px-margin-desktop bg-surface-container-low border-t border-white/5" id="contact">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-stack-lg items-center">
            <div className="flex flex-col gap-6 md:gap-stack-md">
              <div>
                <h2 className="font-headline-lg text-3xl sm:text-4xl md:text-headline-lg text-on-surface mb-3 md:mb-stack-sm">Let&apos;s Innovate Together.</h2>
                <p className="font-body-md text-sm sm:text-base text-on-surface-variant">
                  Headquartered in Doha, we are perfectly positioned to manage bulk deployments and enterprise-level educational partnerships across the region.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 mt-2 md:mt-stack-sm">
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 glass-panel rounded-lg">
                  <span className="material-symbols-outlined text-primary text-xl md:text-2xl">location_on</span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant">Address</span>
                    <span className="font-body-md text-sm md:text-body-md text-on-surface">Tornado Tower, Doha, Qatar</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 glass-panel rounded-lg">
                  <span className="material-symbols-outlined text-primary text-xl md:text-2xl">mail</span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant">Email</span>
                    <span className="font-body-md text-sm md:text-body-md text-on-surface">partnerships@make7robotics.qa</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 glass-panel rounded-lg">
                  <span className="material-symbols-outlined text-primary text-xl md:text-2xl">call</span>
                  <div className="flex flex-col">
                    <span className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant">Phone</span>
                    <span className="font-body-md text-sm md:text-body-md text-on-surface">+974 4412 8899</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-panel rounded-xl p-6 md:p-10">
              <form className="flex flex-col gap-4 md:gap-stack-sm">
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant" htmlFor="name">Full Name</label>
                  <input className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-on-surface font-body-md text-sm md:text-base focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-colors" id="name" placeholder="John Doe" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant" htmlFor="institution">Institution / Company</label>
                  <input className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-on-surface font-body-md text-sm md:text-base focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-colors" id="institution" placeholder="Qatar Academy" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant" htmlFor="email">Email Address</label>
                  <input className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-on-surface font-body-md text-sm md:text-base focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-colors" id="email" placeholder="john@example.com" type="email" />
                </div>
                <div className="flex flex-col gap-2 mb-2 md:mb-4">
                  <label className="font-label-caps text-[10px] md:text-label-caps text-on-surface-variant" htmlFor="message">Inquiry Details</label>
                  <textarea className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-3 md:px-4 py-2.5 md:py-3 text-on-surface font-body-md text-sm md:text-base focus:outline-none focus:border-white/50 focus:bg-white/[0.05] transition-colors resize-none" id="message" placeholder="How can we help you innovate?" rows={4}></textarea>
                </div>
                <button className="w-full bg-primary-container text-on-primary-container font-label-caps text-xs md:text-label-caps px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-primary-container/80 transition-colors duration-300" type="button">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full pt-10 md:pt-stack-lg pb-6 md:pb-stack-md bg-surface-container-lowest border-t border-outline-variant/10 flex flex-col items-center gap-6 md:gap-stack-md px-4 md:px-margin-desktop">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo.png" alt="Make7 Robotics Logo" className="h-6 md:h-8 opacity-80" />
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <a className="font-body-md text-sm md:text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
          <a className="font-body-md text-sm md:text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
          <a className="font-body-md text-sm md:text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#">LinkedIn</a>
          <a className="font-body-md text-sm md:text-body-md text-on-surface-variant hover:text-primary transition-colors opacity-80 hover:opacity-100" href="#contact">Contact</a>
        </nav>
        <p className="font-body-md text-xs md:text-body-md text-on-surface-variant text-center opacity-60 mt-2 md:mt-stack-sm">
          © 2024 Make7 Robotics. Building the creators of tomorrow.
        </p>
      </footer>
    </>
  );
}
