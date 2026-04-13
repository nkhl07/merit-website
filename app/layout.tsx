import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "MERIT — Virginia Tech",
    template: "%s | MERIT at Virginia Tech",
  },
  description:
    "MERIT (Management, Entrepreneurship, Research, Innovation, and Technology) is a student organization at Virginia Tech that bridges the gap between classroom learning and real-world professional experience.",
  keywords: ["MERIT", "Virginia Tech", "student organization", "career development", "entrepreneurship"],
  openGraph: {
    title: "MERIT at Virginia Tech",
    description:
      "Bridging the gap between the classroom and the workforce through real-world projects, career development, and professional networking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
