import Link from "next/link";

export function EventSchedule() {
    return <>
        <div>
            参加予定イベントはありません。イベント参加履歴については<Link href={"/event"} className="link">こちら</Link>をご覧ください。<br />
            コミックマーケット108への参加予定はありません。コミックマーケット109はもしかしたら出るかも？
        </div>
    </>
}
