import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "@/styles/reset.css";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="ru" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
