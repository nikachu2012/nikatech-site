import Section from "@/components/Section";
import HeaderFooter from "@/components/HeaderFooter";
import { Metadata } from "next";
import { EventSchedule } from "./event";

export const metadata: Metadata = {
    title: "イベント",
}

export default function Home() {
    return (
        <HeaderFooter>
            <main className="flex flex-col flex-wrap gap-6 py-4">
                <Section title={"参加予定イベント"} id="event">
                    <EventSchedule />

                    {/* <div className="border border-neutral-400 p-2">
                        <div className="font-bold text-xl">技術書典18 オフライン会場</div>
                        <div className="">2025-06-01 (日) / 審査中です</div>
                        <div>

                            <table className="border-collapse mt-1 table-auto">
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
                            </table>

                        </div>
                    </div> */}
                </Section>

            </main>
        </HeaderFooter>
    );
}
