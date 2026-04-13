import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Collins Kimutai Rop | Full-Stack Software Developer",
  description:
    "Portfolio of Collins Kimutai Rop, a full-stack software developer building products across climate tech, health systems, and AI-driven analytics.",
  metadataBase: new URL("https://collins-rop.github.io")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
