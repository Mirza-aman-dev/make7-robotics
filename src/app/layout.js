import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["400", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600"],
});

export const metadata = {
  metadataBase: new URL("https://make7robotics.com"),
  title: "Make7 Robotics | Architecting the Future of STEM",
  description: "Make7 Robotics equips classrooms with cutting-edge, mobile-trainer STEM and robotics labs, engineered to inspire the next generation of innovators in Doha and beyond.",
  keywords: ["Make7 Robotics", "STEM Education", "Robotics Labs", "EdTech", "Doha STEM", "B2B Robotics", "Educational Technology"],
  openGraph: {
    title: "Make7 Robotics | Architecting the Future of STEM",
    description: "Make7 Robotics equips classrooms with cutting-edge, mobile-trainer STEM and robotics labs.",
    url: "https://make7robotics.com",
    siteName: "Make7 Robotics",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "Make7 Robotics Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased bg-background text-on-background font-body-md overflow-x-clip`}
      >
        {children}
      </body>
    </html>
  );
}
