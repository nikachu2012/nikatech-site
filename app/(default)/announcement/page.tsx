import Link from "next/link";
import HeaderFooter from "@/components/HeaderFooter";
import { Metadata } from "next";
import GetDateISO8601String from "@/utils/GetDateISO8601String";
import { Announcement } from "./announcement";

export const metadata: Metadata = {
    title: "お問い合わせ",
}

export default function Home() {
    return (
        <HeaderFooter>
            <main className="flex flex-col flex-wrap gap-6 py-4">
                <section id={new Date().getFullYear().toString()}>
                    <h2 className="font-bold text-2xl border-b border-neutral-300 pb-1 mb-2">お知らせ{new Date().getFullYear().toString()}</h2>
                    <Announcement />
                </section>

                <section id="2025">
                    <h2 className="font-bold text-2xl border-b border-neutral-300 pb-1 mb-2">お知らせ2025</h2>
                    <ul className="list-disc flex flex-col gap-4 mt-4">
                        <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                            <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-12-18T18:52:32.000+09:00"))}</span>
                            <div>
                                コミックマーケット107での販売品、注意事項を更新しました。
                            </div>
                        </li>
                        <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                            <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-11-07T17:00:00.000+09:00"))}</span>
                            <div>
                                コミックマーケット107当選しました。２日目（31日）南２ホール iブロック-19bです。
                            </div>
                        </li>
                        <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                            <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-10-21T00:00:00.000+09:00"))}</span>
                            <div>
                                沼津高専 第60回高専祭、技術書典19での販売品を更新しました。
                            </div>
                        </li>
                        <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                            <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-08-23T22:33:00.000+09:00"))}</span>
                            <div>
                                コミックマーケット107申し込みしました。某氏と合体申し込みしています。
                            </div>
                        </li>
                        <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                            <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-08-15T13:48:00.000+09:00"))}</span>
                            <div>
                                技術書典19応募しました。新刊も鋭意制作中です！
                            </div>
                        </li>
                        <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                            <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-08-15T00:00:00.000+09:00"))}</span>
                            <div>
                                11/8(土), 11/9(日) 沼津高専第60回高専祭に委託参加します！ <Link className="link" href={"https://csc.nikachu.net"} target="_blank">情報工学同好会 (非公認)</Link>への委託です。
                            </div>
                        </li>
                        <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                            <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-06-13T22:42:40.000+09:00"))}</span>
                            <div>
                                BOOTHでの電子版の頒布を開始しました！<Link className="link" href={"https://nikatech.booth.pm/"}>BOOTHでの頒布ページ</Link>
                            </div>
                        </li>
                        <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                            <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-06-02T00:00:00.000+09:00"))}</span>
                            <div>
                                技術書典18撤収しました。本当に楽しかったです。皆様お越しいただきありがとうございました！！
                            </div>
                        </li>
                        <li className="flex flex-col lg:flex-row gap-1 lg:gap-2 items-left lg:items-center">
                            <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-05-16T12:41:42.000+09:00"))}</span>
                            <div>
                                6/1(日) 技術書典18参加します！出展場所は<b>う17</b>です。皆様のお越しをお待ちしております。
                            </div>
                        </li>
                    </ul>
                </section>

            </main>
        </HeaderFooter >
    );
}
