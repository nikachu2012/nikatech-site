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

                    <h3 className="font-bold">新刊</h3>
                    <NewReleaseList />


                    <h3 className="font-bold">制作検討中</h3>
                    <ul className="list-disc list-outside ml-6">
                        <li>
                            <Link className="link" href={"#"}>PSPで学ぶMIPSアーキテクチャ（幻）</Link><br />
                            めっちゃデータつきのELF使われててよくわからん
                        </li>
                    </ul>

                    <h3 className="font-bold">既刊</h3>
                    <ul className="list-disc list-outside ml-6">
                        {/* 既刊なんかねーよ　うるせえよ　黙れよ */}
                        <li><Link className="link" href={"item/avrasm"}>Arduinoで始めるアセンブリ</Link></li>
                        <li><Link className="link" href={"item/smartremote_guide"}>スマートリモコン自作ガイド</Link></li>
                    </ul>
                </Section>
            </main>
        </HeaderFooter>
    );
}
