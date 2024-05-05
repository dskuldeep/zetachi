import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/ui/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zetachi",
  description: "Knowledge Hub for your Workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={cn(
        'min-h-screen font-sans antialiased grainy',
        inter.className
      )}>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-F75ST27R22"/>
    <script dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-F75ST27R22');`,}}
    />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
