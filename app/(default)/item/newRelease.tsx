import Image, { StaticImageData } from "next/image";
import newRelease from "./new_release.png";
import Link from "next/link";

import avrasm_thumb from "./avrasm/thumb.png"
import smartremote_guide_thumb from "./smartremote_guide/thumb.png"

function NewReleaseItem(props: { name: string, price: number, thumb: string | StaticImageData, detailPageRef: string, detail: string }) {
    const { name, price, thumb, detailPageRef, detail } = props;

    return <div className="w-full h-[20vh] lg:h-auto flex flex-row lg:flex-col gap-3">
        <Link href={detailPageRef}>
            <Image src={thumb} alt={""} className="w-auto h-full border border-neutral-300" />
        </Link>
        <div className="flex flex-col justify-between py-2 lg:p-0">
            <div className="flex flex-col gap-1">
                <span className="font-bold text-lg leading-none">{name}</span>
                <span className="text-sm leading-none">JPY {price}</span>
                <span className="text-sm leading-none">{detail}</span>
            </div>
            <div className="mt-3">
                <Link href={detailPageRef}>
                    <button className="btn btn-blue">
                        詳細ページはこちら
                    </button>
                </Link>
            </div>
        </div>
    </div>
}
export function NewReleaseList() {
    return <>
        <div className="w-full grid grid-rows-4 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 gap-x-6 gap-y-2">
            <NewReleaseItem name={"Arduinoで始めるアセンブリ"} price={500} thumb={avrasm_thumb} detailPageRef={"item/avrasm"} detail={"JIS B5 / 50p / 本文モノクロ"} />
            <NewReleaseItem name={"スマートリモコン自作ガイド"} price={500} thumb={smartremote_guide_thumb} detailPageRef={"item/smartremote_guide"}  detail={"JIS B5 / 38p / 本文モノクロ"}/>
        </div>
        {/* <ul className="list-disc list-outside ml-6">
            <li><Link href={"item/smartremote_guide"}>スマートリモコン自作ガイド</Link></li>
            <li>
                <Link href={"item/avrasm"}>Arduinoで始めるアセンブリ</Link><br />
                サークル代表へ　アセンブラじゃなくてアセンブ<b>リ</b>ですご注意を
            </li>
            <li><Link href={"item/unicode_animal_paper"}>Unicode 動物絵文字 コードポイント表</Link><br /></li>
        </ul> */}

        <div className="flex justify-center">
            <Image src={newRelease} alt={"技術書典18の新刊"} width={500} className="shadow" />
        </div>
    </>
}
