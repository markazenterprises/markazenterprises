import type { Metadata } from "next";
import { Footer, Header } from "@/components/SiteChrome";
import { MotionEffects } from "@/components/MotionEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Markaz Enterprises | Construction, Energy & Technology Pakistan",
    template: "%s | Markaz Enterprises",
  },
  description:
    "Integrated construction, solar energy, lithium battery, technology, security and infrastructure solutions across Pakistan.",
  other: {
    "theme-color": "#171614",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MotionEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
