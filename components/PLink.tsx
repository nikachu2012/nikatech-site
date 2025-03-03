import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    href: string
    className?: string
    children?: ReactNode
    target?: string
}

export default function PLink({ href, className, children, target }: Props) {
    return <Link
        href={href}
        className={`${className || ""} mx-1 underline underline-offset-2 text-[#008db7]`}
        target={target}
    >
        {children}
    </Link>
}
