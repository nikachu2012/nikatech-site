import { Metadata } from "next";

import Section from "@/components/Section";

import { version as uuidVersion } from 'uuid';
import { validate as uuidValidate } from 'uuid';

import Link from "next/link";
import GetDateISO8601String from "@/utils/GetDateISO8601String";

import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export const metadata: Metadata = {
    title: '電子レシート',
}

type Receipt = {
    type: "PURCHASE" | "CANCEL"
    sum: number
    id: string

    item: {
        id: string
        count: number
        barcode?: string[]
        name: string,
        price: number
    }[]

    date: number
    payment: string,
    paid: number
}

function paymentToReadableString(t: string): string {
    switch (t) {
        case "CASH":
            return "現金"
        case "CREDIT":
            return "クレジット"
        case "CREDIT_AIRPAY":
            return "クレジット(Airペイ)"
        case "CREDIT_AIRPAY_TOUCH":
            return "クレ(Airペイタッチ)"
        case "CREDIT_UNIONPAY_AIRPAY":
            return "銀聯(Airペイ)"
        case "BARCODE":
            return "QRコード"
        case "BARCODE_AIRPAY":
            return "QRコード(Airペイ)"
        case "TECHBOOKFEST":
            return "技術書典公式後払い"
        default:
            return t
    }
}

function uuidValidateV7(uuid: string) {
    console.log(uuidVersion(uuid))

    return uuidValidate(uuid) && uuidVersion(uuid) === 7;
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
    const receiptKv = getRequestContext().env.nikatech_receipt;
    const receiptStr = await receiptKv.get(slug.toUpperCase());

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
                        <span className="font-bold text-2xl">nikatech</span><br />
                        <span>技術書典18-う17</span>
                    </div>

                    <div>
                        <span>お買い上げありがとうございます。</span>
                    </div>

                    <div>
                        <span>{GetDateISO8601String(new Date(receipt.date * 1000))}</span><br />
                        <span>担当: nikachu</span>
                    </div>

                    <table className="w-full border-collapse">
                        <tbody>
                            {receipt.item.map((item, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="p-2">
                                        <Link
                                            href={`https://nikatech.nikachu.net/item/${item.id}`}
                                            target="_blank"
                                        >
                                            {item.name}
                                        </Link>
                                    </td>
                                    <td className="p-2 text-right">@{item.price.toLocaleString()} x {item.count}</td>
                                    <td className="p-2 text-right">
                                        JPY {(item.count * item.price).toLocaleString()}
                                    </td>
                                    <td className="p-2 text-right w-0">
                                        <Link
                                            href={`https://nikatech.nikachu.net/download/${item.id}?key=${slug.toLowerCase()}`}
                                            target="_blank"
                                        >
                                            PDF
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />

                    <table className="w-full border-collapse">
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

                    <table className="w-full border-collapse">
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

        );
    }
}
