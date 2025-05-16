import Link from "next/link";
import Section from "@/components/Section";
import HeaderFooter from "@/components/HeaderFooter";
import Image from "next/image";
import newRelease from "./new_release.png";

export default function Home() {
    return (
        <HeaderFooter>
            <main className="flex flex-col flex-wrap gap-6 py-4">
                <Section title={"頒布品"} id="item">
                    <p>
                        リンクをクリックすると紹介ページに飛ぶことができます。
                    </p>

                    <h3 className="font-bold">新刊（技術書典18）</h3>
                    <ul className="list-disc list-outside ml-6">
                        <li><Link href={"item/smartremote_guide"}>スマートリモコン自作ガイド（入稿済み）</Link></li>
                        <li>
                            <Link href={"item/avrasm"}>Arduinoで学ぶアセンブリ（入稿済み）</Link><br />
                            サークル代表へ　アセンブラじゃなくてアセンブ<b>リ</b>ですご注意を
                        </li>
                    </ul>

                    <div className="flex justify-center">
                        <Image src={newRelease} alt={"技術書典18の新刊"} width={500} className="shadow" />
                    </div>

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
