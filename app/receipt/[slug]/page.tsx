import { getCloudflareContext } from "@opennextjs/cloudflare";
import { Metadata } from "next";

import Section from "@/components/Section";

export const metadata: Metadata = {
    title: 'レシート',
}

export default async function Home({ params }: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const context = await getCloudflareContext({ async: true });

    return (
        <main className="flex flex-col flex-wrap gap-6 py-4">

            <Section title={"標準決済方法一覧"} id="payment">
                {slug}<br />
                {context.env.nikatech_receipt.get(slug.toUpperCase())}
            </Section>
        </main>

    );
}
