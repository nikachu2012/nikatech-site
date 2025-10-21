import Link from "next/link";

export function EventSchedule() {
    return <>
        <div className="border border-neutral-400 p-2">
            <div className="font-bold text-xl">【委託】沼津高専 第60回高専祭</div>
            <div className="">2025-11-08 (土), 2025-11-09 (日) / 沼津高専 講義等1階 専攻科101, 102 / <Link className="link" href={"https://csc.nikachu.net"} target="_blank">情報工学同好会 (非公認)</Link>への委託</div>
            
            <div className="flex flex-wrap my-1 gap-2">
                <Link className="link" href={"https://www.numazu-ct.ac.jp/news/12921/"} target="_blank">イベントの公式ページ</Link>
                {/* <Link className="link" href={"https://techbookfest.org/organization/KdLZ1mQYzBTzyyz68x2UX"} target="_blank">サークルページ</Link> */}
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
                        <td className="border border-neutral-400 p-1 px-2">既刊</td>
                        <td className="border border-neutral-400 p-1 px-2"><Link className="link" href={"/item/avrasm"}>Arduinoで始めるアセンブリ</Link></td>
                        <td className="border border-neutral-400 p-1 px-2 text-right">JPY 500</td>
                    </tr>
                    <tr>
                        <td className="border border-neutral-400 p-1 px-2">既刊</td>
                        <td className="border border-neutral-400 p-1 px-2"><Link className="link" href={"/item/smartremote_guide"}>スマートリモコン自作ガイド</Link></td>
                        <td className="border border-neutral-400 p-1 px-2 text-right">JPY 500</td>
                    </tr>
                    <tr>
                        <td className="border border-neutral-400 p-1 px-2">既刊</td>
                        <td className="border border-neutral-400 p-1 px-2"><Link className="link" href={"/item/unicode_animal_paper"}>Unicode 動物絵文字 コードポイント表</Link></td>
                        <td className="border border-neutral-400 p-1 px-2 text-right">JPY 100</td>
                    </tr>
                </table>

            </div>
        </div>

        <div className="border border-neutral-400 p-2">
            <div className="font-bold text-xl">技術書典19 オフライン会場</div>
            <div className="">2025-11-16 (日) / 審査中です</div>

            <div className="flex flex-wrap my-1 gap-2">
                <Link className="link" href={"https://techbookfest.org/event/tbf19"} target="_blank">イベントの公式ページ</Link>
                <Link className="link" href={"https://techbookfest.org/organization/KdLZ1mQYzBTzyyz68x2UX"} target="_blank">サークルページ</Link>
            </div>

            <div>
                頒布品未定
                {/* <table className="border-collapse mt-1 table-auto">
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
                            <td className="border border-neutral-400 p-1 px-2">ンゴシリーズ vol.1</td>
                            <td className="border border-neutral-400 p-1 px-2">500 JPY</td>
                        </tr>
                    </tbody>
                </table> */}

            </div>
        </div>

        <div className="border border-neutral-400 p-2">
            <div className="font-bold text-xl">コミックマーケット107</div>
            <div className="">2025-12-31 (水) / 審査中です</div>

            <div className="flex flex-wrap my-1 gap-2">
                <Link className="link" href={"https://www.comiket.co.jp/info-a/C107/C107Info.html"} target="_blank">イベントの公式ページ</Link>
                {/* <Link className="link" href={"https://techbookfest.org/organization/KdLZ1mQYzBTzyyz68x2UX"} target="_blank">サークルページ</Link> */}
            </div>

            <div>
                頒布品未定
                {/* <table className="border-collapse mt-1 table-auto">
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
                            <td className="border border-neutral-400 p-1 px-2">ンゴシリーズ vol.1</td>
                            <td className="border border-neutral-400 p-1 px-2">500 JPY</td>
                        </tr>
                    </tbody>
                </table> */}

            </div>
        </div>
    </>
}
