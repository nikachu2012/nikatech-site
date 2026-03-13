import { Metadata } from "next";

import Section from "@/components/Section";
import Image from "next/image";

import thumbnail from "./thumb.png";
import Link from "next/link";
import HeaderFooter from "@/components/HeaderFooter";

export const metadata: Metadata = {
  title: 'スマート頒布 〜同人誌即売会に自作POSとキャッシュレス決済を入れてみた〜',
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
            同人誌即売会に自作POSとキャッシュレス決済を入れて、スマートに本を頒布できるようにする本です。<br />
            この本では、実際にnikatechで使用しているPOSレジを解説します。
          </p>
          <p>
            また、同人サークルでも入れられるキャッシュレス決済をいくつか解説します。
          </p>

          <div>
            <table className="border-collapse border border-neutral-300">
              <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">
                <tr>
                  <td>名称</td>
                  <td>スマート頒布 〜同人誌即売会に自作POSとキャッシュレス決済を入れてみた〜</td>
                </tr>
                <tr>
                  <td>著者</td>
                  <td>nikachu（<Link className="link" href={"https://twitter.com/nikachu2012"} target="_blank">@nikachu2012</Link>）</td>
                </tr>
                <tr>
                  <td>ISDN（Cコード）</td>
                  <td className="font-mono">ISDN278-4-874195-05-2 (C3055)</td>
                </tr>
                <tr>
                  <td>サイズ</td>
                  <td>JIS B5</td>
                </tr>
                <tr>
                  <td>ページ数</td>
                  <td>42ページ（表1-表4含む）</td>
                </tr>
                <tr>
                  <td>頒布価格</td>
                  <td>JPY 500</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            {/* <Link className="link" href={"https://techbookfest.org/product/nX2j9FTjpMDNus2wVTYQwf"} target="_blank">
              技術書典の頒布ページはこちら
            </Link><br /> */}
            {/* <Link className="link" href={"https://nikatech.booth.pm/items/7564232"} target="_blank">
              BOOTHの頒布ページはこちら
            </Link><br /> */}
          </div>
        </Section>

        <Section title={"サポート"}>
          <h3 className="font-bold">正誤情報</h3>
          現在、判明している正誤情報はありません。
        </Section>



      </main>
    </HeaderFooter>
  );
}
