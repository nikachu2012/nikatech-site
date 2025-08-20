import Link from "next/link";

export function EventSchedule() {
    return <>
        {/* コミックマーケット107（委託じゃないですよ！！）に出るかも */}

        <div className="border border-neutral-400 p-2">
            <div className="font-bold text-xl">【委託】沼津高専 第60回高専祭</div>
            <div className="">2025-11-08 (土), 2025-11-09 (日) / 沼津高専 / 講義等1階 専攻科101, 102 / <Link className="link" href={"https://csc.nikachu.net"} target="_blank">情報工学同好会 (非公認)</Link>への委託</div>
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
