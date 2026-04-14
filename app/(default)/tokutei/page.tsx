import Section from "@/components/Section";
import HeaderFooter from "@/components/HeaderFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "特定商取引法に基づく表記",
}

export default function Home() {
    return (
        <HeaderFooter>
            <main className="flex flex-col flex-wrap gap-6 py-4">

                <Section title={"特定商取引法に基づく表記"} id="tokutei">
                    <div>
                        <table className="border-collapse mt-1 table-auto">
                            <tr>
                                <td className="border border-neutral-400 p-1 px-2">販売事業者名</td>
                                <td className="border border-neutral-400 p-1 px-2">nikatech</td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-400 p-1 px-2">運営責任者</td>
                                <td className="border border-neutral-400 p-1 px-2">荻野 壮</td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-400 p-1 px-2">住所</td>
                                <td className="border border-neutral-400 p-1 px-2">請求があった場合には速やかに開示いたします</td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-400 p-1 px-2">電話番号</td>
                                <td className="border border-neutral-400 p-1 px-2">請求があった場合には速やかに開示いたします</td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-400 p-1 px-2">メールアドレス</td>
                                <td className="border border-neutral-400 p-1 px-2">work at nikachu dot net（スパム防止のためatを@に、dotを.に置き換えてください）</td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-400 p-1 px-2">追加手数料</td>
                                <td className="border border-neutral-400 p-1 px-2">配送料、決済手数料が発生する場合があります。必ず注文ページよりご確認ください。</td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-400 p-1 px-2">代金の支払い時期</td>
                                <td className="border border-neutral-400 p-1 px-2">
                                    ＜サブスクリプション＞<br />
                                    初回： 申込み（購入）時に決済。<br />
                                    2回目以降（月払い）： 毎月、初回申込み日と同日に自動決済（例：1月15日に申し込んだ場合、毎月15日）。申込日と同日が存在しない月の場合はその月の最終日に決済されます。<br />
                                    2回目以降（年払い）： 毎年、初回申込み日と同日に自動決済。<br />

                                    ＜１回限りの支払い＞<br />
                                    銀行振込：振込時点で寄付が成立<br />
                                    クレジットカード決済：寄付申し込み時点で決済<br />
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-400 p-1 px-2">商品の引き渡し時期</td>
                                <td className="border border-neutral-400 p-1 px-2">
                                    ＜寄付の場合＞<br />
                                    商品の引き渡しはありません。<br />
                                    ＜その他商品の場合＞<br />
                                    １４営業日以内に発送します。ダウンロード版は購入後すぐにご利用可能です。<br />
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-400 p-1 px-2">交換および返品に関するポリシー</td>
                                <td className="border border-neutral-400 p-1 px-2">
                                    ＜寄付の場合＞<br />
                                    商品特性上、返金を受け付けておりません。<br />
                                    登録解除をご希望の場合はメールにてお問い合わせください。<br />
                                    次回決済日までに解約をしていただければ、次回以降の請求は発生致しません（ただし、途中解約による日割り等の返金はありません）。<br />
                                    ＜その他商品の場合＞<br />
                                    発送後のキャンセルは受け付けておりません。<br />
                                    初期不良の場合のみ返品・交換を受け付けます。送料nikatech負担にて交換いたします。メールにてお問い合わせください。<br />
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-neutral-400 p-1 px-2">お支払い方法</td>
                                <td className="border border-neutral-400 p-1 px-2">クレジットカード決済</td>
                            </tr>
                        </table>
                    </div>
                </Section>

            </main>
        </HeaderFooter>
    );
}
