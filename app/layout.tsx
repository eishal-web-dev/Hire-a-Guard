import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hire a Guard",
  description: "Book verified security professionals on demand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
