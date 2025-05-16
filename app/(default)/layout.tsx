import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - nikatech",
    default: "nikatech"
  },
  description: "同人サークル「nikatech」の公式サイトです。技術系でいろいろやっています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`antialiased has-[#check:checked]:overflow-hidden text-pretty`}
      >
        {children}
      </body>
    </html>
  );
}
