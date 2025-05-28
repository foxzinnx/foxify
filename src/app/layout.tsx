import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foxify",
  description: "Foxify Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
