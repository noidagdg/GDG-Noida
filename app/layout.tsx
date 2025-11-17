import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDG Noida",
  description: "GDG Noida is a community of developers who are passionate about technology and innovation.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{ fontFamily: "'Product Sans', ui-sans-serif, system-ui, sans-serif" }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
