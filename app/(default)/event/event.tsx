import Link from "next/link";

export function EventSchedule() {
    return <>
        {/* <div>
            参加予定イベントはありません。イベント参加履歴については<Link href={"/event"} className="link">こちら</Link>をご覧ください。
        </div> */}
        <div className="border border-neutral-400 p-2">
            <div className="font-bold text-xl">技術書典20 オンライン＋オフライン</div>
            <div className="">2026-04-12 (日) / 池袋・サンシャインシティ 文化会館ビル2F 展示ホールD / 配置未定</div>
            <div className="text-red-600">サークル代表の体調不良のため欠席するかもしれません。許してね</div>

            <div className="flex flex-wrap my-1 gap-2">
                <Link className="link" href={"https://techbookfest.org/event/tbf20"} target="_blank">イベントの公式ページ</Link>
                <Link className="link" href={"https://techbookfest.org/organization/KdLZ1mQYzBTzyyz68x2UX"} target="_blank">サークルページ</Link>
            </div>


            <div>
                頒布品未定（新刊は２冊を予定しています。またスマートリモコン自作ガイドについては電子版のみの販売となる予定です。）
                {/* <table className="border-collapse mt-1 table-auto">
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
                </table> */}
            </div>
        </div>
    </>
}
