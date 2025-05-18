import Image from "next/image";
import newRelease from "./new_release.png";
import Link from "next/link";


export function NewReleaseList() {
    return <>
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
    </>
}
