import GetDateISO8601String from "@/utils/GetDateISO8601String";
import Link from "next/link";

export function Announcement() {
    return <>
        <ul className="list-disc flex flex-col gap-4 my-4">

            <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2026-02-10T21:19:00.000+09:00"))}</span>
                <div>
                    技術書典20申し込みました。新刊は2冊を予定しています。<Link className="link" target="_blank" href={"https://x.com/nikachu2012/status/2021197376036405594"}>関連ツイート</Link>
                </div>
            </li>
            
        </ul>
    </>
}
