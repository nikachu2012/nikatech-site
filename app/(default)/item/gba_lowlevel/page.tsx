import { Metadata } from "next";

import Section from "@/components/Section";
import Image from "next/image";

import thumbnail from "./thumb.png";
import Link from "next/link";
import HeaderFooter from "@/components/HeaderFooter";

export const metadata: Metadata = {
  title: 'GBAで学ぶ低レイヤー',
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
            GBAを使って低レイヤーについて学ぶ本です。<br />
            Hello, world!に到達するまでに必要な、コンパイル・アセンブル・リンク・実行ファイルの生成部分について扱います。
          </p>
          <p>
            OSに頼らず直接画面などのハードウェアを操作する、ベアメタルプログラミングを行います。
          </p>
          <p>
            ある程度プログラムは書けるけど、ハードウェアやOSなどの低レイヤーな部分は知らなく学んでみたいという人におすすめです。
          </p>
          <p>
            この本の内容をやるにあたってGBA実機は必要ありません。Dockerが動く環境とエミュレータがあればOKです。
          </p>

          <div>
            <table className="border-collapse border border-neutral-300">
              <tbody className="[&_td]:border [&_td]:border-neutral-300 [&_td]:p-1 [&_td]:px-2">
                <tr>
                  <td>名称</td>
                  <td>GBAで学ぶ低レイヤー</td>
                </tr>
                <tr>
                  <td>著者</td>
                  <td>nikachu（<Link className="link" href={"https://twitter.com/nikachu2012"} target="_blank">@nikachu2012</Link>）</td>
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
                  <td>82ページ（表1-表4含む）</td>
                </tr>
                <tr>
                  <td>頒布価格</td>
                  <td>JPY 1,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            {/* <Link className="link" href={"https://techbookfest.org/product/5Mnfueeg0GCT4mYxc6ifk9"} target="_blank">
              技術書典の頒布ページはこちら
            </Link><br /> */}
            <Link className="link" href={"https://nikatech.booth.pm/items/8088728"} target="_blank">
              BOOTHの頒布ページはこちら
            </Link><br />
          </div>
        </Section>

        <Section title={"サポート"}>
          <h3 className="font-bold">ソースコード</h3>

          <Link className="link" href={"https://github.com/nikachu2012/gba_lowlevel_source"} target="_blank">
            ソースコードはこちら
          </Link>

          <h3 className="font-bold">正誤情報</h3>
          現在、判明している正誤情報はありません。

        </Section>

      </main>
    </HeaderFooter>
  );
}
