import Link from "next/link";
import Section from "@/components/Section";

export default function Home() {
  return (
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
        <p>
          イベントによって利用できる決済方法が異なることがあります。詳細についてはイベントの宣伝ツイート等をご覧ください。
        </p>
        <p>
          イベント共通の決済方法については<Link href={"payment"}>標準決済方法一覧</Link>をご覧ください。
        </p>
      </Section>

      <Section title={"参加予定イベント"} id="event">
        <div className="border border-neutral-400 p-2">
          <div className="font-bold text-xl">技術書典18 オフライン会場</div>
          <div className="">2025-06-01 (日) / 池袋・サンシャインシティ 展示ホールD / <span className="text-red-500">う17</span></div>

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
        <h3 className="font-bold">新刊</h3>
        <ul className="list-disc list-outside ml-6">
          <li><Link href={"item/smartremote_guide"}>スマートリモコン自作ガイド（ほぼ完成！！！！！）</Link></li>
          <li>
            <Link href={"item/avrasm"}>Arduinoで学ぶアセンブリ （ほぼ完成！！！！！）</Link><br />
            サークル代表へ　アセンブラじゃなくてアセンブ<b>リ</b>ですご注意を
          </li>
        </ul>
        
        <h3 className="font-bold">既刊</h3>
        <ul className="list-disc list-outside ml-6">
          既刊なんかねーよ　うるせえよ　黙れよ
          {/* <li><Link href={"item/smartremote_guide"}>スマートリモコン自作ガイド（未完成）</Link></li> */}
          {/* <li><Link href={"item/avrasm"}>高級言語は甘え Part1 AVRアセンブラ （未完成）</Link></li> */}
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
  );
}
