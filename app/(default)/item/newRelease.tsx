import Image, { StaticImageData } from "next/image";
import newRelease from "./new_release.png";
import Link from "next/link";

import gba_lowlevel_thumb from "./gba_lowlevel/thumb.png"
import doujin_pos_cashless_thumb from "./doujin_pos_cashless/thumb.png"

function NewReleaseItem(props: { name: string, price: number, thumb: string | StaticImageData, detailPageRef: string, detail: string }) {
    const { name, price, thumb, detailPageRef, detail } = props;

    return <div className="w-full h-[20vh] lg:h-auto flex flex-row lg:flex-col gap-3">
        <Link href={detailPageRef}>
            <Image src={thumb} alt={""} className="w-auto h-full border border-neutral-300" />
        </Link>
        <div className="flex flex-col justify-between py-2 lg:p-0">
            <div className="flex flex-col gap-1">
                <span className="font-bold text-lg leading-none">{name}</span>
                <span className="text-sm leading-none">JPY {price.toLocaleString()}</span>
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
        {/* grid-rows-1の部分は新刊の個数に合わせて変更する */}
        <div className="w-full grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 gap-x-6 gap-y-2">
            <NewReleaseItem
                name={"GBAで学ぶ低レイヤー"}
                price={1000}
                thumb={gba_lowlevel_thumb}
                detailPageRef={"item/gba_lowlevel"}
                detail={"JIS B5 / 82p / フルカラー"}
            />
            <NewReleaseItem
                name={"スマート頒布 〜同人誌即売会に自作POSとキャッシュレス決済を入れてみた〜"}
                price={500}
                thumb={doujin_pos_cashless_thumb}
                detailPageRef={"item/doujin_pos_cashless"}
                detail={"JIS B5 / 42p / 本文モノクロ"}
            />
            {/* <NewReleaseItem name={"Arduinoで始めるアセンブリ"} price={500} thumb={avrasm_thumb} detailPageRef={"item/avrasm"} detail={"JIS B5 / 50p / 本文モノクロ"} /> */}
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
            <Link href={newRelease.src}>
                <Image src={newRelease} alt={"技術書典19の新刊"} width={800} className="border border-neutral-300" />
            </Link>
        </div>
    </>
}
