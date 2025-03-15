import Link from "next/link";
import Section from "@/components/Section";
import Year from "@/components/Year";
import GetDateISO8601String from "@/utils/GetDateISO8601String";
import Image from "next/image";

import visaLogo from "./visa.svg";
import masterLogo from "./master.svg";
import unionpayLogo from "./unionpay.svg";
import contactlessLogo from "./contactless.svg";

export default function Home() {
  return (
    <div className="w-full md:w-[800px] bg-white m-auto p-2 px-4 md:px-6 min-h-[100svh] border-t-4 border-t-[#008db7] shadow">
      <header className="pb-2">
        <span className="font-mono text-sm text-neutral-400 leading-none">Last updated: {GetDateISO8601String(new Date(Date.now()))}</span>
        <h1 className="font-bold text-4xl mt-3">nikatech</h1>

        <p className="mt-1">
          技術系でいろいろやってる個人サークルです。<br />
          {/* 具体的にどのようなことをしているかは<a href="#works" className="underline text-blue-500">こちら</a>をご覧ください。 */}
        </p>
      </header>

      <hr className="my-1 border border-neutral-300" />

      <main className="flex flex-col flex-wrap gap-6 py-4">

        <Section title={"目次的な何か"} id="faketoc">
          <ul className="list-disc list-inside ml-3">
            <li>参加予定のイベントは<Link href={"#event"} >こちら</Link></li>
            <li>頒布した品の一覧は<Link href={"#item"} >こちら</Link></li>
            <li>SNSや販売ページは<Link href={"#sns"} >こちら</Link></li>
            <li>頒布品に対する文句、ご意見は<Link href={"#form"} >こちら</Link></li>
          </ul>
        </Section>

        <Section title={"サークル紹介"} id="circle">
          <p>
            プログラミング関連が多いですが、あまりジャンルを固定せずいろいろやっている個人サークルです。<br />
            よくWeb系や、C/C++言語を書くのでその関連の話が多くなると思います。<br />
          </p>

          <p>
            「楽しちゃダメだから」をモットーに、できるだけ深いところを扱う物を作ろうと考えています。<br />
          </p>

          <p>
            最近はにわかですが決済系にも興味があります。<br />
          </p>
        </Section>

        <Section title={"決済方法一覧"} id="payment">
          イベントによって利用できる決済方法が異なることがあります。詳細についてはイベントの宣伝ツイート等をご覧ください。

          <h3 className="font-bold">現金</h3>
          できるだけおつりの出ないようにお願いいたします。
          
          <h3 className="font-bold mt-2">クレジット・デビット・プリペイド</h3>
          <div className="flex justify-center">
            <Image src={visaLogo} alt={"Visa"} width={100}/>
            <Image src={masterLogo} alt={"Mastercard"} width={100} className="ml-2"/>
            <Image src={unionpayLogo} alt={"UnionPay"} width={100} className="ml-0"/>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Image src={contactlessLogo} alt={""} width={15} />
            <div>コンタクトレス決済がご利用いただけます(UnionPayを除く)。</div>
          </div>
          <div className="bg-red-200 border border-red-400 p-2 rounded">
            金属カードを使用したことによる決済端末の故障が多く発生しています。金属カードをご利用になる場合はコンタクトレス決済でお願いします。
          </div>
          <div className="bg-yellow-200 border border-yellow-400 p-2 rounded">
            暗証番号スキップ（PINバイパス）は2025年3月にて原則廃止となります。{/* <Link href={"https://www.jcca-office.gr.jp/dealer/handling/ichandling/"} target="_blank">関連リンク</Link> */}<br />
            本人確認には暗証番号をご利用ください（一部暗証番号の入力が必要ない場合もあります）。
          </div>

          <h3 className="font-bold mt-2">QRコード決済</h3>
          未定

        </Section>

        <Section title={"参加予定イベント"} id="event">
          <div className="border border-neutral-400 p-2">
            <div className="font-bold text-xl">技術書典18 オフライン会場</div>
            <div className="">2025-06-01 (日) / 池袋・サンシャインシティ 展示ホールD / 配置場所未定</div>

            <div className="flex flex-wrap mt-1">
              <Link href={"https://techbookfest.org/event/tbf18"} target="_blank">イベントの公式ページ</Link>
            </div>
          </div>

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


        <Section title={"頒布品"} id="item">
          <h3 className="font-bold">販売中／予定</h3>
          <ul className="list-disc list-outside ml-6">
            <li><Link href={"#"}>スマートリモコン自作ガイド（未完成）</Link></li>
            <li><Link href={"#"}>高級言語は甘え Part1 AVRアセンブラ （未完成）</Link></li>
          </ul>

          <h3 className="font-bold">制作検討中</h3>
          <ul className="list-disc list-outside ml-6">
            <li>
              <Link href={"#"}>PSPで学ぶMIPSアーキテクチャ（幻）</Link><br />
              めっちゃデータつきのELF使われててよくわからん
            </li>
          </ul>
        </Section>

        <Section title={"SNS"} id="sns">
          <div>
            <div>サークル代表のTwitter(新X)は<Link href={"https://twitter.com/nikachu2012"} target="_blank">こちら</Link></div>
            <div>サークル代表のポートフォリオは<Link href={"https://portfolio.nikachu.net"} target="_blank">こちら</Link></div>
          </div>
        </Section>

        <Section title={"ご意見フォーム"} id="form">
          <p>
            頒布品についての文句やご意見など、代表に直接伝えたいことはこちらのフォームにお願いします。<br />
            基本的には返さないものと思ってください。
          </p>

          <p>
            暗号化が必要な場合は、<Link href={"https://portfolio.nikachu.net/publickey"} target="_blank">OpenPGP公開鍵</Link>を利用して暗号化してください。
          </p>

          <p>Googleフォームを使用しています。送信にはGoogleアカウントが必要です。</p>

          <Link href="https://forms.gle/7ixA4yZEv6ToTEU76" target="_blank" className="ml-0">ご意見フォーム</Link>
        </Section>

      </main>

      <hr className="my-1 border border-neutral-300" />

      <footer className="flex flex-col flex-wrap gap-2 py-2">
        <span className="font-mono text-sm text-neutral-400 leading-none">(C) <Year /> nikatech</span>
        <span className="font-mono text-sm text-neutral-400 leading-none">Thanks to open source software contributors!</span>
      </footer>
    </div>
  );
}
