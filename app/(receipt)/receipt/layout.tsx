import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Year from "@/components/Year";

const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: {
    template: "%s - nikatech",
    default: "nikatech"
  },
  description: "同人サークル「nikatech」の公式サイトです。技術系でいろいろやっています。",
};

export default function ReceiptLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} antialiased `}
      >
        <div className="w-full md:w-[800px] bg-white m-auto p-2 px-4 md:px-6 min-h-[100svh] border-t-4 border-t-[#008db7] shadow">
          {children}
          <hr className="my-1 border border-neutral-300" />

          <footer className="flex flex-col flex-wrap gap-2 py-2">
            <span className="font-mono text-sm text-neutral-400 leading-none">(C) <Year /> nikatech</span>
            <span className="font-mono text-sm text-neutral-400 leading-none">Thanks to open source software contributors!</span>
          </footer>

        </div>
      </body>
    </html>
  );
}
