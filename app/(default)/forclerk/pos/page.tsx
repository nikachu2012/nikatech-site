import Section from "@/components/Section";
import HeaderFooter from "@/components/HeaderFooter";
import Image from "next/image";

import posBasicView from "./pos_basic_view.png";
import nameTag from "./nametag.jpg";
import readBarcode from "./read_barcode.jpg";
import posAddItemView from "./pos_additem_view.png";
import posAddedItem from "./pos_added_view.png";
import paymentEx from "./paymentex.jpg";
import azukari from "./azukari.jpg"
import checkout1 from "./checkout1.jpeg"
import airpay_credit from "./airpay_credit.png"
import airpay_qr from "./airpay_qr.png"
import GetDateISO8601String from "@/utils/GetDateISO8601String";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "POSの操作方法 - 売り子の方へ",
}

export default function Home() {
    return (
        <HeaderFooter>
            <div className="mt-8 mb-4">
                <div>
                    <h1 className="text-4xl font-bold">POSの操作方法</h1>
                    <div className="flex gap-2 flex-wrap">
                        <span className="font-mono">{GetDateISO8601String(new Date())}</span>
                        <span>by nikachu</span>
                    </div>
                </div>
            </div>
            <main className="flex flex-col flex-wrap gap-6 py-4">
                <Section title={"POSの概要"} id="posDetail">
                    <p>
                        nikatechでは、独自開発のPOSを使用します。バイトした経験がないので、普通のPOSレジとは操作感が異なるかもしれません。以下に基本画面を示します。
                    </p>

                    <div className="flex justify-center">
                        <Image src={posBasicView} alt={"POSの基本画面"} width={500} className="shadow" />
                    </div>

                    <p>
                        基本的な操作は全て右側キーパッドで行えます。一部キーパッドを使用しなくても行える操作があります。
                    </p>
                    <p>
                        背景<span className="text-red-600">赤色</span>のボタンは、入力していた情報が失われるボタンです。
                        <span className="text-blue-600">青色</span>のボタンは、確定ボタンです。
                    </p>
                    <p>
                        <span className="text-red-600">←</span>ボタンは、確定前のキーパッド入力から一番右の１文字を削除します。<br />
                        <span className="text-red-600">CLR</span>ボタンは、確定前のキーパッド入力をすべて削除します。<br />
                        <span className="text-red-600">開放</span>ボタンは、1回押すと担当者を除くすべての入力内容がリセットされます。
                    </p>
                </Section>


                <Section title={"取引登録"} id="posDetail">
                    <p>
                        とりあえずお客様に商品を提供できるところまでの操作を解説します。
                    </p>

                    <h3 className="font-bold">担当者の登録</h3>

                    <p>
                        名札にあるQRコードをリーダで読み取るか、担当者ボタンを押した後、担当者名を選択します。名札の2025/05/17時点でのサンプルを以下に示します。
                    </p>

                    <div className="flex justify-center">
                        <Image src={nameTag} alt={"nikatechの名札"} width={500} className="shadow" />
                    </div>

                    <h3 className="font-bold">商品の登録</h3>
                    <p>
                        商品についているバーコードを読み取るか、登録ボタンを押した後商品のボタンを押します。
                    </p>
                    <div className="flex justify-center">
                        <Image src={readBarcode} alt={"バーコードを読み取る"} width={400} className="shadow" />
                    </div>
                    <div className="flex justify-center">
                        <Image src={posAddItemView} alt={"POSのアイテム登録画面"} width={700} className="shadow" />
                    </div>
                    <div className="bg-yellow-200 border border-yellow-400 p-2 rounded">
                        バーコードは登録ボタンを押した後でなくても読み取り可能です。<br />
                        書籍のような２段バーコードの場合は上を読み取ることをお勧めします。<br />
                    </div>
                    <p>
                        複数個の登録は、直前に追加された商品の場合は、個数ボタン→キーパッドで数値を入力→<span className="text-blue-600">OK</span>で個数を増やせます。
                        それ以外の場合は一旦登録ボタンを押して登録状態を解除した後、商品名の右にあるボタンで増減できます。
                    </p>
                    <p>
                        商品を登録し、登録状態を解除すると以下のような画面になります。
                    </p>
                    <div className="flex justify-center">
                        <Image src={posAddedItem} alt={"登録済み画面"} width={700} className="shadow" />
                    </div>

                    <h3 className="font-bold">決済方法の指定</h3>
                    <p>
                        お客様から伺った決済方法をPOSに入力します。<br />
                        現金、クレジット（銀聯除く）、QRコード決済は基本画面から直接入力可能です。それ以外の決済方法の場合は決済ex→決済方法の順に選択してください。
                    </p>

                    <p>
                        お客様に「銀聯（ぎんれん）で」と言われた場合は、「ｸﾚ」ではなく決済ex→銀聯(Airペイ)を選択してください。
                    </p>
                    <div className="flex justify-center">
                        <Image src={paymentEx} alt={"決済方法"} width={300} className="shadow" />
                    </div>
                    <div className="bg-red-200 border border-red-400 p-2 rounded">
                        決済exから選択する場合、クレジット、銀聯、QRコードは&quot;（Airペイ）&quot;がついているものにしてください。
                    </div>

                    <h3 className="font-bold">預かり金の入力</h3>
                    <p>
                        預りボタンを押し、キーパッドで預かり金を入力→<span className="text-blue-600">OK</span>を押すと預かり金を入力できます。<br />
                        合計より多い預かり金を入力すると、お釣りが計算されます。
                    </p>
                    <div className="flex justify-center">
                        <Image src={azukari} alt={"預かり金の入力"} width={300} className="shadow" />
                    </div>
                    <p>
                        また、預りボタンを押した後、キーパッドに何も打たずOKを押すと預かり金は合計金額と同じになります（お釣りが0になる）。
                    </p>
                    <p>
                        現金以外の決済方法では、預り金が未入力（上部預り金表示が0）でもチェックアウト（後述）することができます。
                    </p>

                    <h3 className="font-bold">チェックアウト</h3>
                    <p>
                        チェックアウトは入力した情報を確定し、データベースへ書き込む操作のことです。<br />
                        登録、個数、預りのいずれの状態でもない時に<span className="text-blue-600">OK</span>を押すとチェックアウトへ進むことができます。
                    </p>
                    <div className="flex justify-center">
                        <Image src={checkout1} alt={"チェックアウト"} width={300} className="shadow" />
                    </div>
                    <p>
                        現金の場合はお釣りが表示されるので、お釣りを用意します。<br />
                        （Airペイ）のついたクレジット、QRコード決済の場合は自動で決済アプリへ遷移します。<br />
                        それ以外のキャッシュレス決済の場合は、別途決済端末を操作して決済を行います。
                    </p>

                    <p>
                        Airペイは自動で以下のような画面になるので、お客様に決済をお願いしてください。<br />
                        QRの場合はこの画面でバーコードリーダを使って、お客様の端末上のQRコードを読み取ります。
                    </p>
                    <div className="flex justify-center gap-2 flex-wrap">
                        <Image src={airpay_credit} alt={"Airペイクレジットの表示"} width={400} className="shadow" />
                        <Image src={airpay_qr} alt={"AirペイQRの表示"} width={400} className="shadow" />
                    </div>
                    <p>キャッシュレスの取り扱い方法は別ページでまとめているのでそちらをご覧ください。</p>

                    <p>
                        決済が完了し、決済ステータスが成功となったことを確認します。<br />
                        特にお客様から領収書の要望がなければ、レシート印刷ボタンを押してレシートを印刷します。印刷が止まったら切り取って商品と共に渡してください。<br />
                    </p>
                    <div className="bg-red-200 border border-red-400 p-2 rounded">
                        クレジット、QRコードでの決済時にはお客様控えが印刷されます。必ず切り取ってからレシートを印刷してください。
                    </div>
                    <div className="bg-yellow-200 border border-yellow-400 p-2 rounded">
                        領収書ボタンで領収書を印刷できます。レシートと領収書はどちらか一方しか発行できません（片方を発行するとボタンが押せなくなります）。
                    </div>
                    <div className="bg-yellow-200 border border-yellow-400 p-2 rounded">
                        クレジット・銀聯決済の場合、POSに戻った後のレシート印刷に時間がかかり、その間固まったように見えることがあります。<br />
                        これはレシートプリンタへの再接続を待っているので、印刷されるまでそのまま待つようにしてください。
                    </div>
                    <p>
                        取引が成立したら必ず、<span className="text-blue-600">次の取引へ</span>ボタンを押して次の取引を入力してください。（これがデータベース書き込みのトリガーです）
                    </p>

                </Section>
                <Section title={"返品操作"} id="posDetail">
                    返品にはレシート（キャッシュレス決済の場合はお客様控えも）が必要です。<br />
                    多分というか絶対ないと思いますが返品操作が必要になった場合は代表を呼んでください。
                </Section>


            </main>
        </HeaderFooter>
    );
}
