import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Navigate from "@/components/navigate/Navigate";
import Base from "@/components/footer/Base";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "knowmyhealth",
  description:
    "A healthcare patient management System designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="noscrollbar scroll-smooth">
      <body
        className={cn(
          "h-lvh font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navigate />
        {children}
        <Base />
      </body>
    </html>
  );
}
