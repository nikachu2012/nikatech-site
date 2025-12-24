import Link from "next/link";

export function EventSchedule() {
    return <>
        <div className="border border-neutral-400 p-2">
            <div className="font-bold text-xl">コミックマーケット107</div>
            <div className="">2025-12-31 (水) / 東京ビッグサイト / 南2 i-19b</div>
            <div className="text-red-600">サークル代表は、体調不良のため出展場所にはいません。大変申し訳ありません。</div>

            <div className="flex flex-wrap my-1 gap-2">
                <Link className="link" href={"https://www.comiket.co.jp/info-a/C107/C107Info.html"} target="_blank">イベントの公式ページ</Link>
                <Link className="link" href={"https://webcatalog.circle.ms/Perma/Circle/10507495/"} target="_blank">サークルページ</Link>
            </div>

            <div>
                <table className="border-collapse mt-1 table-auto">
                    <thead>
                        <tr>
                            <th className="border border-neutral-400 p-1 px-2">種別</th>
                            <th className="border border-neutral-400 p-1 px-2">商品名</th>
                            <th className="border border-neutral-400 p-1 px-2">値段</th>
                        </tr>
                    </thead>
                    <tr>
                        <td className="border border-neutral-400 p-1 px-2">新刊</td>
                        <td className="border border-neutral-400 p-1 px-2"><Link className="link" href={"/item/llvm_homebrew_lang"}>LLVMで作るプログラミング言語</Link></td>
                        <td className="border border-neutral-400 p-1 px-2 text-right">JPY 1,500</td>
                    </tr>
                    <tr>
                        <td className="border border-neutral-400 p-1 px-2">新刊</td>
                        <td className="border border-neutral-400 p-1 px-2"><Link className="link" href={"/item/howto_isdn"}>ISDNを正しく表記してガチの本みたいな同人誌を作ろう</Link></td>
                        <td className="border border-neutral-400 p-1 px-2 text-right">JPY 100</td>
                    </tr>
                    <tr>
                        <td className="border border-neutral-400 p-1 px-2">既刊</td>
                        <td className="border border-neutral-400 p-1 px-2"><Link className="link" href={"/item/avrasm"}>Arduinoで始めるアセンブリ</Link></td>
                        <td className="border border-neutral-400 p-1 px-2 text-right">JPY 500</td>
                    </tr>
                    <tr>
                        <td className="border border-neutral-400 p-1 px-2">既刊</td>
                        <td className="border border-neutral-400 p-1 px-2"><Link className="link" href={"/item/smartremote_guide"}>スマートリモコン自作ガイド</Link></td>
                        <td className="border border-neutral-400 p-1 px-2 text-right">JPY 500</td>
                    </tr>
                </table>
            </div>
        </div>
    </>
}
