import { Metadata } from "next";

import Section from "@/components/Section";
import Image from "next/image";

import thumbnail from "./thumb.png";
import Link from "next/link";
import HeaderFooter from "@/components/HeaderFooter";

export const metadata: Metadata = {
  title: 'スマートリモコン自作ガイド',
}

export default function Home() {
  return (
    <HeaderFooter>
      <main className="flex flex-col flex-wrap gap-6 py-4">

        <div className="flex justify-center">
          <Image src={thumbnail} alt={""} width={300} className="border solid border-neutral-300" />
        </div>

        <Section title={"概要"} id="detail">
          <div>
            <p>
              現在、出版されている商業誌（以下、ガチの本）には国際標準図書番号（ISBN）という番号が付けられています。
            </p>
            <p>
              この本？では、ISBNのパロディである国際標準同人誌番号（ISDN）というものを、ISBNの表記方法に従って表記する方法を解説します。
            </p>
            <p>
              レーザプリンタで印刷してくれた某氏ありがとう
            </p>
          </div>

          <div>
            <table className="border-collapse border border-neutral-300">
              <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">
                <tr>
                  <td>名称</td>
                  <td>ISDNを正しく表記してガチの本みたいな同人誌を作ろう</td>
                </tr>
                <tr>
                  <td>著者</td>
                  <td>nikachu（<Link className="link" href={"https://twitter.com/nikachu2012"} target="_blank">@nikachu2012</Link>）</td>
                </tr>
                <tr>
                  <td>サイズ</td>
                  <td>A5</td>
                </tr>
                <tr>
                  <td>ページ数</td>
                  <td>4ページ</td>
                </tr>
                <tr>
                  <td>頒布価格</td>
                  <td>JPY 100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <Link className="link" href={"https://techbookfest.org/product/3r9gDwPqpXb8TrWwQeN1Tc"} target="_blank">
              技術書典の頒布ページはこちら
            </Link><br />
          </div>
        </Section>

        <Section title={"サポート"}>
          {/* <h3 className="font-bold">ソースコード</h3>

          <Link href={"https://github.com/nikachu2012/smartremote_guide_source"} target="_blank">
            ソースコードはこちら
          </Link> */}

          <h3 className="font-bold">正誤情報</h3>
          現在、判明している正誤情報はありません。

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
                  <td>JPY 100</td>
                </tr>

                <tr>  
                  <td><Link className="link" href={"https://techbookfest.org/event/tbf19"} target="_blank">技術書典19</Link></td>
                  <td>2025-11-16</td>
                  <td className="text-right">1</td>
                  <td>JPY 100</td>
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
