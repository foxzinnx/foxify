import { Logo } from "@/components/ui/logo";
import { ReactNode } from "react";

type Props = {
    Children: ReactNode;
}

export default function Layout({ Children }: Props) {
    return(
        <main className="bg-white rounded-2xl min-h-screen flex justify-center mx-auto max-w-7xl">
            <section className="hidden lg:flex flex-col sticky top-0 h-screen w-72 px-3 border-r-2 border-neutral-200">
                <div className="flex-1 mt-6">
                    <Logo size={100} />
                </div>
            </section>
            <section className="flex-1 max-w-lg">{Children}</section>
            <aside className="hidden lg:flex flex-col gap-6 sticky top-0 h-screen w-96 px-8 py-6 border-l-2 border-neutral-200">DIREITA</aside>
        </main>
    );
}