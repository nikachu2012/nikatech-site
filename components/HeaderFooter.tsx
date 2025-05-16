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
        { title: "お問い合わせ", href: "#form" },
    ]


export default function HeaderFooter({ children }: { children: ReactNode }) {
    return <>
        <div className="w-full bg-neutral-100 border-b-4 border-b-accent sticky top-0 z-999999">
            <div className="w-full lg:w-[1000px] h-[50px] m-auto flex items-center justify-between px-4">
                <Link href={"/"} className="text-black! no-underline!">
                    <div>
                        <span className="font-mono font-bold">nikatech</span>
                    </div>
                </Link>


                <div className="lg:hidden flex justify-center relative left-0 top-0 size-[30px]">

                    <input type="checkbox" id="check" className="appearance-none absolute size-full [&:checked~#sidebar]:-translate-x-0 [&:checked~#closeBtn]:block [&:checked~#openBtn]:hidden [&~#openBtn]:block z-50 " />

                    <div id="openBtn" className="absolute size-full hidden z-40">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#008db7"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
                    </div>
                    <div id="closeBtn" className="absolute size-full hidden z-40">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#008db7"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                    </div>


                    <div id="sidebar" className="transition-transform duration-100 ease-in-out transform -translate-x-full box-border fixed left-0 top-0 p-6 w-full h-full lg:w-0 lg:h-0 bg-neutral-200 z-30 lg:hidden flex flex-col gap-2 overflow-hidden pt-[50px]">
                        {linkList.map((e, i) => (
                            <Link key={i} href={e.href} className="font-bold no-underline! text-lg">{e.title}</Link>
                        ))}
                    </div>
                </div>

                <div className="hidden lg:flex lg:gap-4">
                    {linkList.map((e, i) => (
                        <Link key={i} href={e.href} className="font-bold no-underline!">{e.title}</Link>
                    ))}
                </div>

            </div>
        </div>
        <div className="w-full lg:w-[1000px] m-auto">

            <div className="w-full bg-white m-auto px-4 pb-4 min-h-[100svh] shadow">
                {children}
            </div>

            <footer className="w-full m-auto font-mono text-sm text-neutral-400 p-4">
                <div className="flex flex-col flex-wrap gap-2">
                    <span className="leading-none">Last updated: {GetDateISO8601String(new Date(Date.now()))}</span>
                </div>

                <div className="flex flex-col flex-wrap gap-2 mt-4">
                    <div className="leading-none">(C) <Year /> nikatech</div>
                    <div className="leading-none">Thanks to open source software contributors!</div>
                </div>
            </footer>
        </div>
    </>
}
