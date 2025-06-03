import Link from "next/link";

export function EventSchedule() {
    return <>
        <div className="border border-neutral-400 p-2">
            <div className="font-bold text-xl">技術書典18 オフライン会場</div>
            <div className="">2025-06-01 (日) / 池袋・サンシャインシティ 文化会館ビル2F 展示ホールD / う17</div>

            <div className="flex flex-wrap my-1 gap-2">
                <Link href={"https://techbookfest.org/event/tbf18"} target="_blank">イベントの公式ページ</Link>
                <Link href={"https://techbookfest.org/organization/KdLZ1mQYzBTzyyz68x2UX"} target="_blank">サークルページ</Link>
            </div>

            <table className="border-collapse mt-2 table-auto">
                <thead>
                    <tr>
                        <th className="border border-neutral-400 p-1 px-2">種別</th>
                        <th className="border border-neutral-400 p-1 px-2">商品名</th>
                        <th className="border border-neutral-400 p-1 px-2">値段</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="border border-neutral-400 p-1 px-2">新刊</td>
                        <td className="border border-neutral-400 p-1 px-2"><Link href={"/item/avrasm"}>Arduinoで始めるアセンブリ</Link></td>
                        <td className="border border-neutral-400 p-1 px-2">JPY 500</td>
                    </tr>
                    <tr>
                        <td className="border border-neutral-400 p-1 px-2">新刊</td>
                        <td className="border border-neutral-400 p-1 px-2"><Link href={"/item/smartremote_guide"}>スマートリモコン自作ガイド</Link></td>
                        <td className="border border-neutral-400 p-1 px-2">JPY 500</td>
                    </tr>
                    <tr>
                        <td className="border border-neutral-400 p-1 px-2">新刊</td>
                        <td className="border border-neutral-400 p-1 px-2"><Link href={"/item/unicode_animal_paper"}>Unicode 動物絵文字 コードポイント表</Link></td>
                        <td className="border border-neutral-400 p-1 px-2">JPY 100</td>
                    </tr>
                </tbody>
            </table>
            {/* <div className="mt-2">
                <RealtimeEvent />
            </div> */}
        </div>
    </>
}
