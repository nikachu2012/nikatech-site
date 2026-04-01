import { Metadata } from "next";

import Section from "@/components/Section";
import Image from "next/image";

import thumbnail from "./thumb.jpg";
import Link from "next/link";
import HeaderFooter from "@/components/HeaderFooter";

import usage from "./usage.jpg";


export const metadata: Metadata = {
  title: 'GBAブートケーブル',
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
            GBAのブートケーブルです。
          </p>
          <p>
            このケーブルはGBAの通信ケーブルを途中で切って、ブレッドボードなどで使えるように端子をつけたものです。<br />
            GBA / GBA SPに対応しています。GBmicro / DS / DS liteでは使用できません。
          </p>
          <p>
            お好きなマイコンと付属ソフトを使うことで、GBAへ自作ゲームの送信、ゲームROM・BIOSのダンプをすることができます。<br />
            ゲームROM・BIOSのダンプ機能はおまけですが一応使えます。
          </p>
          <p>
            手作りなので品質にばらつきがあります。長さは大体50cmです。また、簡易的な説明書がついてきます。
          </p>
          <div className="flex justify-center">
            <a href={usage.src}>
              <Image src={usage} alt="" width={500} className="border solid border-neutral-300" />
            </a>
          </div>
          <p>
            実際に使っている様子はこんな感じです。クリックで拡大できます。
          </p>


          <div>
            <table className="border-collapse border border-neutral-300">
              <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">
                <tr>
                  <td>名称</td>
                  <td>GBAブートケーブル</td>
                </tr>
                <tr>
                  <td>制作者</td>
                  <td>nikachu（<Link className="link" href={"https://twitter.com/nikachu2012"} target="_blank">@nikachu2012</Link>）</td>
                </tr>
                <tr>
                  <td>頒布価格</td>
                  <td>JPY 1,000</td>
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
          <h3 className="font-bold">プログラム</h3>

          <Link className="link" href={"https://github.com/nikachu2012/gba_sender"} target="_blank">
            詳細な使い方・付属プログラムはこちら
          </Link>

          <h3 className="font-bold">簡易説明書</h3>

          <Link className="link" href={"/assets/gba_bootcable_v1.pdf"} target="_blank">
            簡易説明書（第1版）PDFはこちら
          </Link>

          {/* <h3 className="font-bold">正誤情報</h3>
          現在、判明している正誤情報はありません。 */}

        </Section>

      </main>
    </HeaderFooter>
  );
}
