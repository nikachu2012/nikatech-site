import Link from "next/link";
import Section from "@/components/Section";
import Image from "next/image";
import hero from "./hero.png"
import HeaderFooter from "@/components/HeaderFooter";
import { EventSchedule } from "./event/event";
import { NewReleaseList } from "./item/newRelease";
import { Announcement } from "./announcement/announcement";

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
            コンピュータや、プログラミング関連の本を書く同人サークルです。サークルといっても一人です。<Link className="link" href={"https://portfolio.nikachu.net"} target="_blank">サークル主のプロフィール</Link><br />
            よくWeb系や、C/C++言語を書くのでその関連の話が多くなると思いますが、あまりジャンルを限定せず興味を持ったものは色々扱います。<br />
          </p>

          <p>
            「楽しちゃダメだから」をモットーに、できるだけ深いところを扱う物を作ろうと考えています。<br />
          </p>
        </Section>


        <section id="announcement">
          <h2 className="font-bold text-2xl border-b border-neutral-300 pb-1 mb-2">お知らせ</h2>
          <Announcement />

          <div>
            過去のお知らせについては<Link className="link" href={"/announcement"}>こちら</Link>をご覧ください。
          </div>

        </section>

        <Section title={"参加予定イベント"} id="event">
          <EventSchedule />
        </Section>


        <Section title={"新刊"} id="newitem">
          <NewReleaseList />
        </Section>

      </main>
    </HeaderFooter>

  );
}
