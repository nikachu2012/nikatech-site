import { Metadata } from "next";

import Section from "@/components/Section";
import Image from "next/image";

import thumbnail from "./thumb.png";
import Link from "next/link";
import HeaderFooter from "@/components/HeaderFooter";

export const metadata: Metadata = {
  title: 'LLVMで作るプログラミング言語',
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
            LLVMを用いてプログラミング言語を作る本です。<br />
            字句解析器、構文解析器、LLVM IR（中間表現）の生成器をC++で書いていきます。
          </p>
          <p>
            この本では、if-else 文や while 文といったよくある構造化文を実行できるコンパイル型のプログラミング言語を作っていきます。<br />
            最終的な出力はオブジェクトファイルとなります。
          </p>
          <p>
            はじめに全体を提示し解説するのではなく、ゼロの状態から少しずつ書いて動かすの繰り返しで解説していきます。<br />
            プログラミング言語はよく使っているけど、仕組みは理解していなく作って理解したいという人におすすめです。
          </p>

          <div>
            <table className="border-collapse border border-neutral-300">
              <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">
                <tr>
                  <td>名称</td>
                  <td>LLVMで作るプログラミング言語</td>
                </tr>
                <tr>
                  <td>著者</td>
                  <td>nikachu（<Link className="link" href={"https://twitter.com/nikachu2012"} target="_blank">@nikachu2012</Link>）</td>
                </tr>
                <tr>
                  <td>ISDN（Cコード）</td>
                  <td className="font-mono">ISDN278-4-874195-03-8 (C3055)</td>
                </tr>
                <tr>
                  <td>サイズ</td>
                  <td>JIS B5</td>
                </tr>
                <tr>
                  <td>ページ数</td>
                  <td>150ページ（表1-表4含む）</td>
                </tr>
                <tr>
                  <td>頒布価格</td>
                  <td>JPY 1,500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <Link className="link" href={"https://techbookfest.org/product/nX2j9FTjpMDNus2wVTYQwf"} target="_blank">
              技術書典の頒布ページはこちら
            </Link><br />
            <Link className="link" href={"https://nikatech.booth.pm/items/7564232"} target="_blank">
              BOOTHの頒布ページはこちら
            </Link><br />
          </div>
        </Section>

        <Section title={"サポート"}>
          <h3 className="font-bold">hinalangのソースコード</h3>

          <Link className="link" href={"https://github.com/nikachu2012/hinalang"} target="_blank">
            ソースコードはこちら
          </Link>

          <h3 className="font-bold">正誤情報</h3>

          <div>
            <h4 className="font-bold">第1版</h4>
            <span>ページ117 表5.5 非等価の行</span>

            <table className="border-collapse border border-neutral-300">
              <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">
                <tr>
                  <td>誤</td>
                  <td>
                    <pre>{"<op1> == <op2>"}</pre>
                  </td>
                </tr>
                <tr>
                  <td>正</td>
                  <td>
                    <pre>{"<op1> != <op2>"}</pre>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </Section>


        <Section title={"頒布履歴"}>

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
                  <td>沼津高専 第60回高専祭</td>
                  <td>2025-11-08 - 2025-11-09</td>
                  <td className="text-right">1</td>
                  <td>JPY 1,500</td>
                </tr>
                <tr>
                  <td><Link className="link" href={"https://techbookfest.org/event/tbf19"} target="_blank">技術書典19</Link></td>
                  <td>2025-11-16</td>
                  <td className="text-right">1</td>
                  <td>JPY 1,500</td>
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
                  <td>2025-11-01</td>
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
