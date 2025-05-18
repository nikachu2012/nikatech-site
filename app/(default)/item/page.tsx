import Link from "next/link";
import Section from "@/components/Section";
import HeaderFooter from "@/components/HeaderFooter";
import { Metadata } from "next";
import { NewReleaseList } from "./newRelease";

export const metadata: Metadata = {
    title: "頒布品",
}

export default function Home() {
    return (
        <HeaderFooter>
            <main className="flex flex-col flex-wrap gap-6 py-4">
                <Section title={"頒布品"} id="item">
                    <p>
                        リンクをクリックすると紹介ページに飛ぶことができます。
                    </p>

                    <h3 className="font-bold">新刊（技術書典18）</h3>
                    <NewReleaseList />


                    <h3 className="font-bold">制作検討中</h3>
                    <ul className="list-disc list-outside ml-6">
                        <li>
                            <Link href={"#"}>PSPで学ぶMIPSアーキテクチャ（幻）</Link><br />
                            めっちゃデータつきのELF使われててよくわからん
                        </li>
                    </ul>

                    <h3 className="font-bold">既刊</h3>
                    <ul className="list-disc list-outside ml-6">
                        既刊なんかねーよ　うるせえよ　黙れよ
                        {/* <li><Link href={"item/smartremote_guide"}>スマートリモコン自作ガイド（未完成）</Link></li> */}
                        {/* <li><Link href={"item/avrasm"}>高級言語は甘え Part1 AVRアセンブラ （未完成）</Link></li> */}
                    </ul>
                </Section>
            </main>
        </HeaderFooter>
    );
}
