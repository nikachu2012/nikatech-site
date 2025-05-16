import Link from "next/link";
import Section from "@/components/Section";
import Image from "next/image";
import hero from "./hero.png"
import HeaderFooter from "@/components/HeaderFooter";
import GetDateISO8601String from "@/utils/GetDateISO8601String";

export default function Home() {
  return (
    <HeaderFooter>
      <main className="flex flex-col flex-wrap gap-6">

        <div className="relative w-full h-[150px] lg:h-[300px] overflow-hidden table mt-4">
          <Image src={hero} alt={"hero"} className="absolute object-cover object-center blur-xs w-full h-full inline-block" width={1200} height={300} />
          <div className="absolute w-full h-full bg-black opacity-50"></div>
          <div className="absolute text-white h-full flex justify-center flex-col mx-4 lg:mx-10 gap-1 lg:gap-3">
            <h1 className="font-bold text-4xl lg:text-7xl">nikatech</h1>
            <div className="text-sm md:text-base">
              技術系でいろいろやってる個人サークルです。
            </div>
          </div>
        </div>

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

        <Section title={"お知らせ"} id="announcement">
          <ul className="ml-6 list-disc">
            <li>
              <span className="font-mono text-neutral-">{GetDateISO8601String(new Date("2025-05-16T12:41:42.000+09:00"))}</span><br />
              <div>
                6/1(日) 技術書典18参加します！出展場所は<b>う17</b>です。皆様のお越しをお待ちしております。
              </div>
            </li>
          </ul>
        </Section>

        <Section title={"参加予定イベント"} id="event">
          <div className="border border-neutral-400 p-2">
            <div className="font-bold text-xl">技術書典18 オフライン会場</div>
            <div className="">2025-06-01 (日) / 池袋・サンシャインシティ 文化会館ビル2F 展示ホールD / <span className="text-red-500">う17</span></div>

            <div className="flex flex-wrap my-1 gap-2">
              <Link href={"https://techbookfest.org/event/tbf18"} target="_blank">イベントの公式ページ</Link>
              <Link href={"https://techbookfest.org/organization/KdLZ1mQYzBTzyyz68x2UX"} target="_blank">サークルページ</Link>
            </div>

            <table className="border-collapse mt-2 table-auto">
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
                  <td className="border border-neutral-400 p-1 px-2"><Link href={"/item/avrasm"}>Arduinoで学ぶアセンブリ</Link></td>
                  <td className="border border-neutral-400 p-1 px-2">JPY 500</td>
                </tr>
                <tr>
                  <td className="border border-neutral-400 p-1 px-2">新刊</td>
                  <td className="border border-neutral-400 p-1 px-2"><Link href={"/item/smartremote_guide"}>スマートリモコン自作ガイド</Link></td>
                  <td className="border border-neutral-400 p-1 px-2">JPY 500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>


        <Section title={"新刊"} id="newitem">
          <ul className="list-disc list-outside ml-6">
            <li><Link href={"item/smartremote_guide"}>スマートリモコン自作ガイド（ほぼ完成！！！！！）</Link></li>
            <li>
              <Link href={"item/avrasm"}>Arduinoで学ぶアセンブリ （ほぼ完成！！！！！）</Link><br />
              サークル代表へ　アセンブラじゃなくてアセンブ<b>リ</b>ですご注意を
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
    </HeaderFooter>

  );
}
