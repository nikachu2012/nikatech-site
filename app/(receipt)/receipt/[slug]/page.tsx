import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Metadata } from "next";

import Section from "@/components/Section";

import { version as uuidVersion } from 'uuid';
import { validate as uuidValidate } from 'uuid';

import Link from "next/link";
import GetDateISO8601String from "@/utils/GetDateISO8601String";
import { paymentToReadableString, Receipt } from "@/utils/EReceiptUtils";
import { uuidValidateV7 } from "@/utils/uuidUtils";

export const metadata: Metadata = {
    title: '電子レシート',
}

export default async function Home({ params }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;

    if (!uuidValidateV7(slug)) {
        return <main className="flex flex-col flex-wrap gap-6 py-4">
            <Section title={"電子レシート"} id="payment">
                <div className="bg-red-200 border border-red-400 p-2 rounded">
                    レシートIDが間違っています。
                </div>
            </Section>

            <pre className="font-mono text-sm text-neutral-400 ">
                <code>
                    Tech info<br />
                    Process date: {new Date().toString()}<br />
                    Requested DB key: {slug.toUpperCase()}<br />
                    UUID validation: {uuidValidate(slug) ? "true" : " false"}<br />
                    UUID version: {uuidVersion(slug)}
                </code>
            </pre>
        </main>
    }
    const context = await getCloudflareContext({ async: true });
    const receiptStr = await context.env.nikatech_receipt.get(slug.toUpperCase());

    if (receiptStr == null) {
        // nullの時

        return <main className="flex flex-col flex-wrap gap-6 py-4">
            <Section title={"電子レシート"} id="payment">
                <div className="bg-red-200 border border-red-400 p-2 rounded">
                    レシートがデータベースに存在しません。購入後すぐの場合は数時間待ってから開き直すと表示されると思います。
                </div>
            </Section>

            <pre className="font-mono text-sm text-neutral-400 whitespace-pre-wrap">
                <code>
                    Tech info<br />
                    Process date: {new Date().toString()}<br />
                    Requested DB key: {slug.toUpperCase()}<br />
                    UUID validation: {uuidValidate(slug) ? "true" : " false"}<br />
                    UUID version: {uuidVersion(slug)}
                </code>
            </pre>
        </main>
    }
    else {
        const receipt = JSON.parse(receiptStr) as Receipt

        return (
            <main className="flex flex-col flex-wrap gap-6 py-4">

                <Section title={"電子レシート"} id="payment">
                    <div className="mt-1">
                        <span className="font-bold text-2xl">{receipt.store}</span><br />
                        <span>{receipt.event}</span>
                    </div>

                    <div>
                        <span>お買い上げありがとうございます。</span>
                    </div>

                    <div>
                        <span>{GetDateISO8601String(new Date(receipt.date * 1000))}</span><br />
                        <span>担当: {receipt.cashier}</span>
                    </div>

                    <table className="border-collapse">
                        <tbody>
                            {receipt.item.map((item, index) => (
                                <div key={index} className="border-b border-gray-200 p-2">
                                    <div>
                                        <Link
                                            href={`https://nikatech.nikachu.net/item/${item.id}`}
                                            target="_blank"
                                        >
                                            {item.name}
                                        </Link>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>
                                            @{item.price.toLocaleString()} x {item.count}
                                        </span>
                                        <span>
                                            <span>JPY {(item.count * item.price).toLocaleString()}</span>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </tbody>
                    </table>
                    <br />

                    <table className="border-collapse">
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="p-2">合計</td>
                                <td className="p-2 text-right">JPY {receipt.sum.toLocaleString()}</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="p-2">内消費税</td>
                                <td className="p-2 text-right">JPY {Math.floor(receipt.sum - receipt.sum / 1.10).toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="border-collapse">
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="p-2">支払い {paymentToReadableString(receipt.payment)}</td>
                                <td className="p-2 text-right">JPY {receipt.paid.toLocaleString()}</td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="p-2">お釣り</td>
                                <td className="p-2 text-right">JPY {(receipt.paid - receipt.sum).toLocaleString()}</td>
                            </tr>
                        </tbody>
                    </table>

                </Section>

                <span className="font-mono text-sm text-neutral-400">
                    Tech info<br />
                    Process date: {new Date().toString()}<br />
                    Requested DB key: {slug.toUpperCase()}<br />
                    UUID validation: {uuidValidate(slug) ? "true" : " false"}<br />
                    UUID version: {uuidVersion(slug)}
                </span>
            </main>

        );
    }
}
