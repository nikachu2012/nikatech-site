import GetDateISO8601String from "@/utils/GetDateISO8601String";
import Link from "next/link";
import { ReactNode } from "react";
import Year from "./Year";


const linkList: {
    title: string
    href: string
}[] = [
        { title: "イベント", href: "/event" },
        { title: "お支払い", href: "/payment" },
        { title: "頒布品", href: "/item" },
        { title: "お問い合わせ", href: "/contact" },
    ]


function FooterLink({ href, children, className, newtab }: { href: string, children: ReactNode, className?: string, newtab?: boolean }) {
    return <Link href={href} target={newtab ? "_blank" : undefined}>
        <span className={`hover:underline underline-offset-2 ${className}`}>
            {children}
        </span>
    </Link>
}


export default function HeaderFooter({ children }: { children: ReactNode }) {
    return <>
        <div className="w-full bg-white border-b border-b-neutral-300 sticky top-0 z-999999">
            <div className="w-full lg:w-[1200px] h-[64px] m-auto flex justify-between lg:justify-start items-center gap-6 leading-none px-4 lg:p-0">
                <Link href={"/"} className="text-black! no-underline! leading-none">
                    <div>
                        <span className="font-mono text-2xl font-bold text-accent">nikatech</span>
                    </div>
                </Link>


                <div className="lg:hidden flex justify-center relative left-0 top-0 w-[30px] h-[64px]">

                    <input type="checkbox" id="check" className="appearance-none absolute size-full [&:checked~#sidebar]:-translate-x-0 [&:checked~#closeBtn]:block [&:checked~#openBtn]:hidden [&~#openBtn]:block z-50 " />

                    <div id="openBtn" className="absolute size-full hidden z-40">
                        <div className="size-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="30px" height="30px" fill="#008db7"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                        </div>
                    </div>
                    <div id="closeBtn" className="absolute size-full hidden z-40">
                        <div className="size-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="30px" height="30px" fill="#008db7"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        </div>
                    </div>


                    <div id="sidebar" className="transition-transform duration-100 ease-in-out transform -translate-x-full box-border fixed left-0 top-0 p-6 w-full h-full lg:w-0 lg:h-0 bg-white z-30 lg:hidden flex flex-col gap-2 overflow-hidden pt-[50px]">
                        <Link href={"/"} className="text-black! no-underline! text-lg ">トップ</Link>
                        {linkList.map((e, i) => (
                            <Link key={i} href={e.href} className="text-black! no-underline! text-lg ">{e.title}</Link>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex lg:gap-4">
                    {linkList.map((e, i) => (
                        <Link key={i} href={e.href} className="text-black! no-underline!">{e.title}</Link>
                    ))}
                </div>

            </div>
        </div>
        <div className="w-full lg:w-[1200px] m-auto px-4 lg:p-0">
            <div className="w-full bg-white m-auto pb-4">
                {children}
            </div>
        </div>
        <footer className="w-full text-neutral-500 bg-neutral-100">
            <div className="w-full lg:w-[1200px] m-auto grid grid-rows-3 grid-cols-1 lg:grid-rows-1 lg:grid-cols-3 p-4 lg:px-0 gap-4">
                <div className="flex flex-col gap-1">
                    <div className="font-bold text-sm mb-1">ページリンク</div>
                    <FooterLink href="/event">イベント</FooterLink>
                    <FooterLink href="/payment">お支払い</FooterLink>
                    <FooterLink href="/item">頒布品</FooterLink>
                    <FooterLink href="/contact">お問い合わせ</FooterLink>
                    <FooterLink href="/forclerk">売り子の方へ</FooterLink>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="font-bold text-sm mb-1">サークル代表SNS</div>
                    <FooterLink href="https://portfolio.nikachu.net" newtab>ポートフォリオ</FooterLink>
                    <FooterLink href="https://twitter.com/nikachu2012" newtab>Twitter（新X）</FooterLink>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="font-bold text-sm mb-1">頒布サイト</div>
                    <FooterLink href="https://nikatech.booth.pm/" newtab>BOOTH</FooterLink>
                    <FooterLink href="https://techbookfest.org/organization/KdLZ1mQYzBTzyyz68x2UX" newtab>技術書典公式サイト</FooterLink>
                </div>
            </div>
            <hr className="text-neutral-400" />
            <div className="w-full lg:w-[1200px] m-auto font-mono text-sm p-4 lg:px-0">
                <div className="flex flex-col flex-wrap gap-2">
                    <span className="leading-none">Last updated: {GetDateISO8601String(new Date(Date.now()))}</span>
                </div>

                <div className="flex flex-col flex-wrap gap-2 mt-4">
                    <div className="leading-none">(C) <Year /> nikatech</div>
                    <div className="leading-none">Thanks to open source software contributors!</div>
                </div>
            </div>

        </footer>
    </>
}
