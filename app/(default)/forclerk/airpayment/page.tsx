import Section from "@/components/Section";
import HeaderFooter from "@/components/HeaderFooter";
import Image from "next/image";
import GetDateISO8601String from "@/utils/GetDateISO8601String";
import Link from "next/link";
import { Metadata } from "next";

import m010 from "./m010.jpg";
import airpay_first from "./airpay_first.png";
import airpay_inputprice from "./airpay_inputprice.png";
import airpay_readcard from "./airpay_readcard.png";
import terminal_readcard from "./terminal_readcard.jpg";
import credit_ms from "./credit_ms.jpg";
import credit_ic from "./credit_ic.jpg";
import credit_cl from "./credit_cl.jpg";
import terminal_pinentry from "./terminal_pinentry.jpg"
import airpay_signinput from "./airpay_signinput.png"
import airpay_signverify from "./airpay_signverify.png"
import credit_signpanel from "./credit_signpanel.jpg"
import airpay_successful from "./airpay_successful.png"
import airpayqr_inputprice from "./airpayqr_inputprice.png"
import airpayqr_readcode from "./airpayqr_readcode.png"
import airpayqr_readcodecam from "./airpayqr_readcodecam.png"
import airpayqr_successful from "./airpayqr_successful.png"

export const metadata: Metadata = {
    title: "Airペイの操作方法 - 売り子の方へ",
}


export default function Home() {
    return (
        <HeaderFooter>
            <div className="mt-8 mb-4">
                <div>
                    <h1 className="text-4xl font-bold">Airペイの操作方法</h1>
                    <div className="flex gap-2 flex-wrap">
                        <span className="font-mono">{GetDateISO8601String(new Date("2025-05-17T12:17:46+09:00"))}</span>
                        <span>by nikachu</span>
                    </div>
                </div>
            </div>
            <main className="flex flex-col flex-wrap gap-6 py-4">
                <Section title={"決済端末"} id="posDetail">
                    <p>
                        nikatechでは、Airペイでキャッシュレス決済を取り扱います。以下にクレジット・電子マネーの決済を行う決済端末を示します。
                    </p>

                    <div className="flex justify-center">
                        <Image src={m010} alt={"決済端末"} width={500} className="shadow" />
                    </div>

                    <p>
                        電子マネー（iD, QUICPay+）は2025/05/17時点で審査落ちしてるので、この端末はクレジットのみに使用します。<br />
                        交通系ICはイベント出店のような実店舗を持たない場合、Airペイだと契約できないので使えません。
                    </p>
                </Section>

                <Section title={"クレジット"} id="posDetail">
                    <p>
                        まずはクレジットの取り扱い方法について解説します。クレジットはAirペイアプリを使用します。以下のサイトも参考にしてください。
                        <ul className="list-disc ml-6">
                            <li>
                                <Link href={"https://faq.airpayment.jp/hc/ja/articles/219815268-Air%E3%83%9A%E3%82%A4-%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88%E3%82%AB%E3%83%BC%E3%83%89%E6%B1%BA%E6%B8%88%E6%99%82%E3%81%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95"}>
                                    Airペイ クレジットカード決済時の操作方法
                                </Link>
                            </li>
                            <li>
                                <Link href={"https://faq.airpayment.jp/hc/ja/articles/360036234354-Air%E3%83%9A%E3%82%A4-UnionPay-%E9%8A%80%E8%81%AF-%E3%82%AB%E3%83%BC%E3%83%89%E6%B1%BA%E6%B8%88%E6%99%82%E3%81%AE%E6%93%8D%E4%BD%9C%E6%96%B9%E6%B3%95"}>
                                    Airペイ UnionPay（銀聯）カード決済時の操作方法
                                </Link>
                            </li>
                        </ul>
                    </p>
                    <div className="bg-yellow-200 border border-yellow-400 p-2 rounded">
                        端末の画面が消えている場合は、どこかのボタンを押してスリープモードを解除してください。<br />
                        解除しないと決済できません。
                    </div>

                    <div className="flex justify-between gap-2 flex-wrap lg:flex-nowrap">
                        <div className="p-2 flex flex-col gap-1">
                            <p>
                                まずはAirペイアプリを起動します。決済ボタンを押します。
                            </p>
                        </div>
                        <Image src={airpay_first} alt={"Airペイアプリの初期画面"} width={400} className="shadow" />
                    </div>

                    <div className="flex justify-between gap-2 flex-wrap lg:flex-nowrap">
                        <div className="p-2 flex flex-col gap-1">
                            <p>
                                左側で決済方法を選んで金額を入力し、「決済へ進む」を押します。
                            </p>

                            <p>
                                お客様から「クレジットで」、「カードで」と指定された場合は、左側でクレジットカードを選択します。<br />
                                「銀聯（ぎんれん）で」と指定された場合は、左側でUnionPay（銀聯）を選択します。
                            </p>
                        </div>
                        <Image src={airpay_inputprice} alt={"決済額入力画面"} width={400} className="shadow" />
                    </div>

                    <div className="flex justify-between gap-2 flex-wrap lg:flex-nowrap">
                        <div className="p-2 flex flex-col gap-1">
                            <p>
                                この画面になったら、カードリーダで決済を行うことができます。お客様に任意の方法でカードを読み取ってもらい、本人確認をしていただきます。<br />
                                POSから実行した場合は、自動でこの画面から始まります。
                            </p>
                            <p>
                                下に端末側の画面を示します。
                            </p>
                            <div className="flex justify-center">
                                <Image src={terminal_readcard} alt={"読み取り時の端末画面"} width={200} className="shadow" />
                            </div>
                        </div>
                        <Image src={airpay_readcard} alt={"読み取り画面"} width={400} className="shadow" />
                    </div>

                    <div className="flex justify-between gap-2 flex-wrap lg:flex-nowrap">
                        <div className="p-2 flex flex-col gap-1">
                            <p>
                                決済が完了するとこのような画面になり、お客様控えがレシートプリンタから出力されるので、切り取ってお客様に渡します。
                            </p>
                            <p>
                                POSから実行した場合は、この画面になると自動でPOSへ戻ります。戻る前にお客様控えを切り取ってください。
                            </p>
                        </div>
                        <Image src={airpay_successful} alt={"読み取り画面"} width={400} className="shadow" />
                    </div>

                    <h3 className="font-bold">読み取り方法</h3>
                    <p>
                        クレジットの読み取り方法は3種類あります。磁気ストライプ（以下MSと略す）, ICチップ（IC）、非接触IC（CL）の3種類です。
                    </p>
                    <p>
                        以下にMS、IC、CLの順で読み取り方法のサンプルを示します。MSはこのまま右へカードをスライドします。
                    </p>
                    <div className="flex justify-center gap-2 flex-wrap">
                        <Image src={credit_ms} alt={"Magnetic Stripe"} width={300} className="shadow" />
                        <Image src={credit_ic} alt={"Integrated Circuit"} width={300} className="shadow" />
                        <Image src={credit_cl} alt={"Contactless"} width={300} className="shadow" />
                    </div>
                    <div className="bg-yellow-200 border border-yellow-400 p-2 rounded">
                        多分使う人いないと思いますが、金属製カードは端末がぶっ壊れそうなのでコンタクトレス決済に誘導してください。<br />
                    </div>

                    <h3 className="font-bold">本人確認</h3>
                    <p>
                        クレジットでの決済時には必ず本人確認があります。本人確認にはいくつかの方法があります。nikatechでは、本人確認方法は以下のようになると思います。
                    </p>
                    <div>
                        <table className="border-collapse mt-2 table-auto">
                            <thead>
                                <tr>
                                    <th className="border border-neutral-400 p-1 px-2 text-left">読み取り方法</th>
                                    <th className="border border-neutral-400 p-1 px-2 text-left">本人確認方法</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border border-neutral-400 p-1 px-2">MS</td>
                                    <td className="border border-neutral-400 p-1 px-2">基本的にサイン照合</td>
                                </tr>
                                <tr>
                                    <td className="border border-neutral-400 p-1 px-2">IC</td>
                                    <td className="border border-neutral-400 p-1 px-2">基本的にPINの入力</td>
                                </tr>
                                <tr>
                                    <td className="border border-neutral-400 p-1 px-2">CL</td>
                                    <td className="border border-neutral-400 p-1 px-2">
                                        本人確認省略<br />
                                        15,001円以上はサイン照合（スマートフォン等でのタッチ決済は15,001円以上はサイン不要）
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <p>※CLでのサインは未検証ですが、Airペイ公式にそう書いてあるので多分そうだと思います。</p>
                    </div>

                    <h3 className="font-bold">PINによる本人確認</h3>
                    <p>
                        本人確認があるとすれば一番多い方法だと思います。端末のキーパッドに暗証番号を入力する本人確認方法です。
                    </p>
                    <p>
                        ICを読むと画像のような表示になるので、お客様に暗証番号を入力していただきます。入力が終わったら右下にある緑色のチェックボタンを押していただきます。
                    </p>

                    <div className="flex justify-center">
                        <Image src={terminal_pinentry} alt={"PIN入力画面"} width={500} className="shadow" />
                    </div>
                    <div className="bg-yellow-200 border border-yellow-400 p-2 rounded">
                        入力したPINを取り消す場合は、赤色のXボタンではなく黄色の←ボタンを使用します。赤色Xボタンを押すと決済自体がキャンセルされるのでちょっとめんどくさいです。
                    </div>

                    <h3 className="font-bold">サインによる本人確認</h3>
                    <p>
                        MSと一部ICはサインによる本人確認になります。iPad上にサインをしていただく本人確認方法です。
                    </p>

                    <div className="flex justify-between gap-2 flex-wrap lg:flex-nowrap">
                        <div className="p-2 flex flex-col gap-1">
                            <p>
                                カードを読み取ると以下のような表示になるので、iPadをお客様に向けてサインをしていただき、「入力完了」を押していただきます。
                            </p>
                        </div>
                        <Image src={airpay_signinput} alt={"サイン画面"} width={400} className="shadow" />
                    </div>

                    <div className="flex justify-between gap-2 flex-wrap lg:flex-nowrap">
                        <div className="p-2 flex flex-col gap-1">
                            <p>
                                サイン確認画面になったら、お客様のカード裏面にあるサインパネルを確認し、サインを照合します。問題がなければ「完了する」を押します。
                            </p>
                            <p>
                                サインパネルの一例を下に示します。
                            </p>
                            <div className="flex justify-center">
                                <Image src={credit_signpanel} alt={"サインパネルの一例"} width={350} className="shadow" />
                            </div>
                        </div>
                        <Image src={airpay_signverify} alt={"サイン照合画面"} width={400} className="shadow" />
                    </div>
                    <div className="bg-yellow-200 border border-yellow-400 p-2 rounded">
                        最近、サインパネルのないカードが増えています。サインパネルのないカードの場合、サインを照合する必要はありません。<br />
                        また、サインは名前である必要はありません。一本の線だったとしてもiPad上に書かれたものと照合して問題がなければ続けます。
                    </div>
                </Section>

                <Section title={"QRコード決済"} id="qrcode">
                    <p>
                        QRコード決済の取り扱い方法について説明します。QRコードはAirペイQRアプリを使用します。以下のサイトも参考にしてください。
                        <ul className="list-disc ml-6">
                            <li>
                                <Link href={"https://faq.mp.airregi.jp/hc/ja/articles/360016878174-QR%E3%82%B3%E3%83%BC%E3%83%89-%E3%83%90%E3%83%BC%E3%82%B3%E3%83%BC%E3%83%89%E3%81%AB%E3%82%88%E3%82%8B%E6%B1%BA%E6%B8%88%E6%96%B9%E6%B3%95"}>
                                    AirペイQR QRコード・バーコードによる決済方法
                                </Link>
                            </li>
                        </ul>
                    </p>

                    <div className="flex justify-between gap-2 flex-wrap lg:flex-nowrap">
                        <div className="p-2 flex flex-col gap-1">
                            <p>
                                まずはAirペイQRアプリを起動します。決済額を入力し「次へ」を押します。
                            </p>
                        </div>
                        <Image src={airpayqr_inputprice} alt={"AirペイQRアプリの初期画面"} width={400} className="shadow" />
                    </div>

                    <div className="flex justify-between gap-2 flex-wrap lg:flex-nowrap">
                        <div className="p-2 flex flex-col gap-1">
                            <p>
                                この画面になったら、外付けのバーコードリーダでお客様の画面上にあるQRコードを読み取ります。
                            </p>
                            <p>
                                POSからAirペイQRを呼び出した場合は、この画面から始まります。
                            </p>
                        </div>
                        <Image src={airpayqr_readcode} alt={"QRコード読み取り画面"} width={400} className="shadow" />
                    </div>


                    <div className="flex justify-between gap-2 flex-wrap lg:flex-nowrap">
                        <div className="p-2 flex flex-col gap-1">
                            <p>
                                うまく読み取れない場合は、前画面下の「カメラに切り替える」ボタンを押すと、内蔵カメラで読み取ることができます。
                            </p>
                        </div>
                        <Image src={airpayqr_readcodecam} alt={"QRコード読み取りカメラで"} width={400} className="shadow" />
                    </div>


                    <div className="flex justify-between gap-2 flex-wrap lg:flex-nowrap">
                        <div className="p-2 flex flex-col gap-1">
                            <p>
                                読み取りが完了すると、自動で決済が行われます。この画面になると、レシートプリンタからお客様控えが出力されるので、切り取ってください。
                            </p>
                            <p>
                                POSからAirペイQRを呼び出した場合は、ここで自動でPOSへ戻ります。
                            </p>
                        </div>
                        <Image src={airpayqr_successful} alt={"QRコード決済成功"} width={400} className="shadow" />
                    </div>

                </Section>

            </main >
        </HeaderFooter >
    );
}
