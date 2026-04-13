import GetDateISO8601String from "@/utils/GetDateISO8601String";
import Link from "next/link";

export function Announcement() {
    return <>
        <ul className="list-disc flex flex-col gap-4 my-4">

            <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2026-04-12T18:00:00.000+09:00"))}</span>
                <div>
                    技術書典20オフライン会場撤収しました！購入していただいた皆様ありがとうございました！
                </div>
            </li>

            <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2026-04-01T18:11:41.000+09:00"))}</span>
                <div>
                    技術書典20の頒布品についての情報を追加しました。
                </div>
            </li>

            <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2026-03-20T17:43:20.000+09:00"))}</span>
                <div>
                    技術書典20の配置が出ました。nikatechは<b>あ01</b>です。原点ですね。皆様のお越しをお待ちしております。<Link className="link" target="_blank" href={"https://x.com/nikachu2012/status/2032454036969209893"}>関連ツイート</Link>
                </div>
            </li>

            <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2026-02-10T21:19:00.000+09:00"))}</span>
                <div>
                    技術書典20申し込みました。新刊は2冊を予定しています。<Link className="link" target="_blank" href={"https://x.com/nikachu2012/status/2021197376036405594"}>関連ツイート</Link>
                </div>
            </li>

        </ul>
    </>
}
