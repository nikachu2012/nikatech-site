import { ReactNode } from "react";

export default function Section({ children, title, id }: { children?: ReactNode, title: ReactNode, id?: string }) {
    return <section id={id}>
        <h2 className="font-bold text-2xl mb-3">{title}</h2>
        <div className="flex flex-col flex-wrap gap-2">
            {children}
        </div>
    </section>
}
