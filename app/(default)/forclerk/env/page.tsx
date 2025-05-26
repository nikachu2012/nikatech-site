import Section from "@/components/Section";
import HeaderFooter from "@/components/HeaderFooter";

import GetDateISO8601String from "@/utils/GetDateISO8601String";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "レジ周りの環境 - 売り子の方へ",
}

export default function Home() {
    return (
        <HeaderFooter>
            <div className="mt-8 mb-4">
                <div>
                    <h1 className="text-4xl font-bold">レジ周辺の環境</h1>
                    <div className="flex gap-2 flex-wrap">
                        <span className="font-mono">{GetDateISO8601String(new Date())}</span>
                        <span>by nikachu</span>
                    </div>
                </div>
            </div>
            <main className="flex flex-col flex-wrap gap-6 py-4">

                <Section title={"レジ周りの環境"} id="posDetail">
                    <p>
                        レジ周辺の環境は以下の画像のようになります。
                    </p>
                    <p className="text-red-600 font-bold">
                        レジの画像挿入
                    </p>
                    <p>
                        以下の物品が置いてあります
                        <ul className="list-disc ml-6">
                            <li>iPad（POSレジ）</li>
                            <li>バーコードリーダ（商品読み取り、QRコード決済時のコード読み取り）</li>
                            <li>レシートプリンタ（レシート、売上票印刷）</li>
                            <li>決済端末（クレジット取扱用）</li>
                        </ul>
                    </p>
                </Section>


                <Section title={"POS"} id="posDetail">
                    <p>
                        レジは、独自のPOSアプリをインストールしたiPad（iPad Pro 11-inch M2）を使用します。POSの操作方法は別ページで解説しています。
                    </p>
                    <p></p>
                </Section>

            </main>
        </HeaderFooter>
    );
}
