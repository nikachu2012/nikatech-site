import Section from "@/components/Section";
import HeaderFooter from "@/components/HeaderFooter";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "売り子の方へ",
}

export default function Home() {
    return (
        <HeaderFooter>
            <main className="flex flex-col flex-wrap gap-6 py-4">

                <Section title={"売り子の方へ"} id="posDetail">
                    売り子としてnikatechの出展に参加する方は、以下の説明を電車の中かなんかで読んでおいていただけると助かります。

                    <ul className="list-disc ml-6">
                        <li>
                            <Link className="link" href={"forclerk/pos"}>POSの操作方法</Link><br />
                            nikatechでは、独自開発のPOSを使用します。POSの操作方法を雑に解説します。
                        </li>
                        <li>
                            <Link className="link" href={"forclerk/airpayment"}>Airペイ（クレジット・QRコード）の操作方法</Link><br />
                            nikatechでは、キャッシュレス決済にAirペイを使用します。Airペイの操作方法と、クレジットの取り扱い方法をこちらも雑に解説します。公式のガイドとともに見ることをお勧めします。
                        </li>
                    </ul>
                </Section>
            </main>
        </HeaderFooter>
    );
}
