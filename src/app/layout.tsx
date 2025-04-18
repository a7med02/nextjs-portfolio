import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "medex portfolio",
  description: "medex portfolio is a website in which you can find all the information about medex and his projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}
