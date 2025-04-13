import { Metadata } from "next";

import Section from "@/components/Section";
import Image from "next/image";

import creditAcceptance from "../credit_acceptance.svg";

export const metadata: Metadata = {
  title: '標準決済方法一覧',
}

export default function Home() {
  return (
    <main className="flex flex-col flex-wrap gap-6 py-4">

      <Section title={"標準決済方法一覧"} id="payment">
        イベントによって利用できる決済方法が異なることがあります。詳細についてはイベントの宣伝ツイート等をご覧ください。

        <h3 className="font-bold">現金</h3>
        できるだけおつりの出ないようにお願いいたします。

        <h3 className="font-bold mt-2">クレジット・デビット・プリペイド</h3>
        端末はMiura Systems M010です。お声がけいただければiPhoneでのTap to Payも利用できます。
        <div className="flex justify-center my-2">
          <Image src={creditAcceptance} alt={"Visa"} width={500} />
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
          一部スマートフォン端末においてM010が反応しない、再起動するといった問題が起きる場合があるようです。その場合はTap to Payにて取り扱います。
        </div>
        

        <h3 className="font-bold mt-2">QRコード決済</h3>
        未定

      </Section>
    </main>

  );
}
