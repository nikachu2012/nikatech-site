import { Metadata } from "next";

import Section from "@/components/Section";
import Image from "next/image";

import creditAcceptance from "./credit_acceptance.svg";
import qrAcceptance from "./qr_acceptance.svg";
import HeaderFooter from "@/components/HeaderFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: '標準決済方法一覧',
}

export default function Home() {
  return (
    <HeaderFooter>
      <main className="flex flex-col flex-wrap gap-6 py-4">
        <Section title={"標準決済方法一覧"} id="payment">
          イベントによって利用できる決済方法が異なることがあります。詳細についてはイベントの宣伝ツイート等をご覧ください。<br />
          携帯回線を使用しますので、決済に時間がかかったりお取り扱いできない場合があります。あらかじめご了承ください。

          <h3 className="font-bold">現金</h3>
          <div>
            <ul className="list-disc ml-6">
              <li className="text-red-600">できるだけおつりの出ないようにお願いいたします。</li>
            </ul>
          </div>

          <h3 className="font-bold mt-2">クレジット・デビット・プリペイド</h3>
          <div className="flex justify-center my-2">
            <Image src={creditAcceptance} alt={"Visa, Mastercard, UnionPay"} width={500} />
          </div>

          <div>
            <ul className="list-disc ml-6">
              <li>端末はMiura Systems M010（Airペイ）です。</li>
              <li>iPhoneでのTap to Pay（VISA, Mastercardのタッチ決済のみ）も使用できます。サークル代表が出展場所にいる際にお声がけください。</li>
            </ul>
          </div>
          {/* <div className="flex items-center gap-2 justify-center">
            <div>コンタクトレス決済がご利用いただけます。</div>
          </div> */}
          <div className="bg-red-200 border border-red-400 p-2 rounded">
            金属カードを使用したことによる決済端末の故障が多く発生しています。金属カードをご利用になる場合はコンタクトレス決済でお願いします。
          </div>
          <div className="bg-yellow-200 border border-yellow-400 p-2 rounded">
            暗証番号スキップ（PINバイパス）は2025年3月にて原則廃止となります。{/* <Link href={"https://www.jcca-office.gr.jp/dealer/handling/ichandling/"} target="_blank">関連リンク</Link> */}<br />
            本人確認には暗証番号をご利用ください（一部暗証番号の入力が必要ない場合もあります）。
          </div>
          <div className="bg-yellow-200 border border-yellow-400 p-2 rounded">
            一部スマートフォン端末において決済端末が反応しない、再起動するといった問題が起きる場合があるようです。その場合はTap to Payにて取り扱います。
          </div>

          <h3 className="font-bold mt-2">QRコード決済</h3>

          <div className="flex justify-center my-2">
            <Image src={qrAcceptance} alt={"Alipay+, WeChat Pay, COIN+, auPAY, d払い, UnionPay QR"} width={600} />
          </div>

          <h3 className="font-bold mt-2">過去のお支払い方法一覧</h3>
          <div>
            <ul className="list-disc ml-6">
              <li className=""><Link href={"/acceptance/acceptance_20250601_tbf18.pdf"}>技術書典18（2025/06/01）</Link></li>
            </ul>
          </div>
        </Section>

        <Section title={"レシートと領収書"} id="receipt">
          <p>
            nikatechの出展では、レシートを発行しています。ぜひお受け取りください。
          </p>
          <p>
            サークル代表のいる時にお申し付けいただければ、領収書も発行することができます。<br />
            なお、インボイス制度には対応していません。<br />
          </p>


          <p>
            また、レシートおよび領収書に記載されたQRコードを読み込むことで購入明細書を表示することができます。<br />
            電子版のPDF（PDF/X-2u準拠）などのファイルもここからダウンロードすることができます。
          </p>
          <div className="bg-red-200 border border-red-400 p-2 rounded">
            購入明細書は、レシートと違い経費計上に使用することはできません。
          </div>
        </Section>
      </main>
    </HeaderFooter>
  );
}
