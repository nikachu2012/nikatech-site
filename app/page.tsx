import Link from "next/link";
import Section from "@/components/Section";
import Year from "@/components/Year";
import GetDateISO8601String from "@/utils/GetDateISO8601String";

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

        <Section title={"参加予定イベント"} id="event">
          <div className="border border-neutral-400 p-2">
            <div className="font-bold text-xl">技術書典18 オフライン会場</div>
            <div className="">2025-06-01 (日) / 審査中です</div>
            
            <div>
            </div>

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
          <ul className="list-disc list-inside ml-3">
            <li><PLink href={"#"}>スマートリモコン自作ガイド（未完成）</PLink></li>
            <li><PLink href={"#"}>PSPで学ぶMIPSアーキテクチャ（未完成）</PLink></li>
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
