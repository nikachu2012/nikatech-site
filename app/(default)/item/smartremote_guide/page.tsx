import { Metadata } from "next";

import Section from "@/components/Section";
import Image from "next/image";

import thumbnail from "./thumb.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'スマートリモコン自作ガイド',
}

export default function Home() {
  return (
    <main className="flex flex-col flex-wrap gap-6 py-4">

      <div className="flex justify-center">
        <Image src={thumbnail} alt={""} width={300} className="border solid border-neutral-300" />
      </div>

      <Section title={"概要"} id="detail">
        <div>
          スマートリモコンをESP32と赤外線LEDを用いて自作します。MOSFETを用い大電流でLEDを動作させることで、赤外線LEDが1つでも遠くまで信号が届くようにします。
        </div>

        <div>
          <table className="border-collapse border border-neutral-300">
            <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">
              <tr>
                <td>名称</td>
                <td>スマートリモコン自作ガイド</td>
              </tr>
              <tr>
                <td>著者</td>
                <td>nikachu（<Link href={"https://twitter.com/nikachu2012"} target="_blank">@nikachu2012</Link>）</td>
              </tr>
              <tr>
                <td>ISDN（Cコード）</td>
                <td className="font-mono">ISDN278-4-874195-02-1 (C3055)</td>
              </tr>
              <tr>
                <td>サイズ</td>
                <td>JIS B5</td>
              </tr>
              <tr>
                <td>ページ数</td>
                <td>38ページ（表1-表4含む）</td>
              </tr>
              <tr>
                <td>頒布価格</td>
                <td>JPY 500</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <Link href={"https://techbookfest.org/product/sHqRMvxL9p3ECYEksZK1Gw"} target="_blank">
            技術書典の販売ページはこちら
          </Link><br />
        </div>
      </Section>

      <Section title={"サポート"}>
        <h3 className="font-bold">ソースコード</h3>

        <Link href={"https://github.com/nikachu2012/smartremote_guide_source"} target="_blank">
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
                <td>2025-04-01</td>
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
                <td>2025-04-01</td>
                <td className="text-right">1</td>
                <td className="text-right">1</td>
              </tr>


            </tbody>
          </table>
        </div>
      </Section>
    </main>

  );
}
