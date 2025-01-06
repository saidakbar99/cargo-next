import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cargo",
  description: "cargo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-gilroy text-black">
        {children}
      </body>
    </html>
  );
}
