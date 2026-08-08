import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "SwiftHaul Logistics | Premium Transportation Solutions",
  description: "SwiftHaul Logistics delivers reliable freight, cargo, and supply chain solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
