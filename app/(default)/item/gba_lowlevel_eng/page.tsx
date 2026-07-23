import { Metadata } from "next";

import Section from "@/components/Section";
import Image from "next/image";

import thumbnail from "./thumb.png";
import Link from "next/link";
import HeaderFooter from "@/components/HeaderFooter";

export const metadata: Metadata = {
  title: 'Learning Low-Level Programming with the GBA',
}

export default function Home() {
  return (
    <HeaderFooter>
      <main className="flex flex-col flex-wrap gap-6 py-4">

        <div className="flex justify-center">
          <Image src={thumbnail} alt={""} width={300} className="border solid border-neutral-300" />
        </div>

        <Section title={"Overview"} id="detail">
          <p>
            This is a book for learning low-level programming using the GBA.<br />
            It covers the compilation, assembly, linking, and executable-file generation steps required to reach &quot;Hello, world!&quot;.
          </p>
          <p>
            It performs bare-metal programming, directly controlling hardware such as the display without relying on an OS.<br />
            Since high-level languages are a crutch, we start from programming in assembly and work up to writing programs that mix assembly and the C language.
          </p>
          <p>
            It is recommended for people who can write programs to some degree but do not know about low-level areas such as hardware and operating systems, and want to learn about them.
          </p>
          <p>
            An actual GBA unit is not required to work through the content of this book. All you need is an environment where Docker runs and an emulator.
          </p>

          <div>
            <table className="border-collapse border border-neutral-300">
              <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">
                <tr>
                  <td>Title</td>
                  <td>Learning Low-Level Programming with the GBA</td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td>nikachu（<Link className="link" href={"https://twitter.com/nikachu2012"} target="_blank">@nikachu2012</Link>）</td>
                </tr>
                <tr>
                  <td>ISDN (C Code)</td>
                  <td className="font-mono">ISDN278-4-874195-04-5 (C3055)</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>JIS B5</td>
                </tr>
                <tr>
                  <td>Pages</td>
                  <td>82 pages (including covers 1–4)</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>15.00 USD</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <Link className="link" href={"https://nikatech.itch.io/gba-lowlevel-eng"} target="_blank">
              Distribution page on Itch.io (English Version)
            </Link><br />
            <Link className="link" href={"https://techbookfest.org/product/6MUQ8T4skEBefBVXwuYBxD"} target="_blank">
              Distribution page on Techbookfest (Japanese Version)
            </Link><br />
            <Link className="link" href={"https://nikatech.booth.pm/items/8088728"} target="_blank">
              Distribution page on BOOTH (Japanese Version, available physical book)
            </Link><br />
          </div>
        </Section>

        <Section title={"Support"}>
          <h3 className="font-bold">Source Code</h3>

          <Link className="link" href={"https://github.com/nikachu2012/gba_lowlevel_source"} target="_blank">
            Source code is available here
          </Link>

          <h3 className="font-bold">Errata</h3>
          There is currently no known errata.

        </Section>

      </main>
    </HeaderFooter>
  );
}
