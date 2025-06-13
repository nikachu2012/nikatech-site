import { Metadata } from "next";

import Section from "@/components/Section";
import Image from "next/image";

import thumbnail from "./thumb.png";
import Link from "next/link";
import HeaderFooter from "@/components/HeaderFooter";

export const metadata: Metadata = {
  title: 'Arduinoで始めるアセンブリ',
}

export default function Home() {
  return (
    <HeaderFooter>
      <main className="flex flex-col flex-wrap gap-6 py-4">

        <div className="flex justify-center">
          <Image src={thumbnail} alt={""} width={300} className="border solid border-neutral-300" />
        </div>

        <Section title={"概要"} id="detail">
          <p>
            AVRアセンブリをアセンブラでアセンブルした機械語を、一般のご家庭に必ずあるArduino UNO R3で実行することで
            「アセンブラを書けるようになったぞ」という達成感を得ます。そのついでにCPUの中身への理解を深めようとする本です。
          </p>
          <p>
            命令や用語の意味を理解しやすくするために、最初CPUの内部構造を簡単に解説しています。
          </p>

          <div>
            <table className="border-collapse border border-neutral-300">
              <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">
                <tr>
                  <td>名称</td>
                  <td>Arduinoで始めるアセンブリ</td>
                </tr>
                <tr>
                  <td>著者</td>
                  <td>nikachu（<Link href={"https://twitter.com/nikachu2012"} target="_blank">@nikachu2012</Link>）</td>
                </tr>
                <tr>
                  <td>ISDN（Cコード）</td>
                  <td className="font-mono">ISDN278-4-874195-01-4 (C3055)</td>
                </tr>
                <tr>
                  <td>サイズ</td>
                  <td>JIS B5</td>
                </tr>
                <tr>
                  <td>ページ数</td>
                  <td>50ページ（表1-表4含む）</td>
                </tr>
                <tr>
                  <td>頒布価格</td>
                  <td>JPY 500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <Link href={"https://techbookfest.org/product/5Mnfueeg0GCT4mYxc6ifk9"} target="_blank">
              技術書典の販売ページはこちら
            </Link><br />
            <Link href={"https://nikatech.booth.pm/items/7043778"} target="_blank">
              BOOTHの販売ページはこちら
            </Link><br />
          </div>
        </Section>

        <Section title={"サポート"}>
          <h3 className="font-bold">ソースコード</h3>

          <Link href={"https://github.com/nikachu2012/avrasm_book_support"} target="_blank">
            ソースコードはこちら
          </Link>

          <h3 className="font-bold">正誤情報</h3>
          現在、判明している正誤情報はありません。

        </Section>


        <Section title={"販売履歴"}>

          <div>
            <table className="border-collapse border border-neutral-300">
              <thead className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2 [&_td]:font-bold [&_td]:text-center">
                <tr>
                  <td>イベント名</td>
                  <td>開催期間</td>
                  <td>版</td>
                  <td>価格</td>
                </tr>
              </thead>
              <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">


                <tr>
                  <td><Link href={"https://techbookfest.org/event/tbf18"} target="_blank">技術書典18</Link></td>
                  <td>2025-06-01</td>
                  <td className="text-right">1</td>
                  <td>JPY 500</td>
                </tr>


              </tbody>
            </table>
          </div>

        </Section>

        <Section title={"改版履歴"}>
          <div>
            <table className="border-collapse border border-neutral-300">
              <thead className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2 [&_td]:font-bold [&_td]:text-center">
                <tr>
                  <td>発行日</td>
                  <td>版</td>
                  <td>刷</td>
                </tr>
              </thead>
              <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">


                <tr>
                  <td>2025-05-01</td>
                  <td className="text-right">1</td>
                  <td className="text-right">1</td>
                </tr>


              </tbody>
            </table>
          </div>
        </Section>
      </main>
    </HeaderFooter>
  );
}
