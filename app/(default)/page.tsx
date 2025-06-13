import Link from "next/link";
import Section from "@/components/Section";
import Image from "next/image";
import hero from "./hero.png"
import HeaderFooter from "@/components/HeaderFooter";
import GetDateISO8601String from "@/utils/GetDateISO8601String";
import { EventSchedule } from "./event/event";
import { NewReleaseList } from "./item/newRelease";

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
          <ul className="list-none divide-y divide-neutral-300">
            <li className="p-2">
              <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-06-13T22:42:40.000+09:00"))}</span><br />
              <div>
                BOOTHでの電子版の頒布を開始しました！<Link href={"https://nikatech.booth.pm/"}>BOOTHでの頒布ページ</Link>
              </div>
            </li>
            <li className="p-2">
              <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-06-02T00:00:00.000+09:00"))}</span><br />
              <div>
                技術書典18撤収しました。本当に楽しかったです。皆様お越しいただきありがとうございました！！
              </div>
            </li>
            <li className="p-2">
              <span className="font-mono text-neutral-500 text-sm">{GetDateISO8601String(new Date("2025-05-16T12:41:42.000+09:00"))}</span><br />
              <div>
                6/1(日) 技術書典18参加します！出展場所は<b>う17</b>です。皆様のお越しをお待ちしております。
              </div>
            </li>
          </ul>
        </Section>

        <Section title={"参加予定イベント"} id="event">
          <EventSchedule />
        </Section>


        <Section title={"新刊"} id="newitem">
          <NewReleaseList />
        </Section>

        <Section title={"SNS"} id="sns">
          <div>
            <div>サークル代表のTwitter(新X)は<Link href={"https://twitter.com/nikachu2012"} target="_blank">こちら</Link></div>
            <div>サークル代表のポートフォリオは<Link href={"https://portfolio.nikachu.net"} target="_blank">こちら</Link></div>
          </div>
        </Section>
      </main>
    </HeaderFooter>

  );
}
