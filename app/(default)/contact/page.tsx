import Link from "next/link";
import Section from "@/components/Section";
import HeaderFooter from "@/components/HeaderFooter";

export default function Home() {
    return (
        <HeaderFooter>
            <main className="flex flex-col flex-wrap gap-6 py-4">

                <Section title={"お問い合わせ"} id="form">
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
