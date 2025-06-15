import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    backHref: string;
}

export const ProfileHeader = ({ children, backHref}: Props) => {
    return(
        <header className="hidden md:flex items-center px-4 py-3">
            <Link href={backHref} className="flex justify-center items-center border-2 border-neutral-800 size-10 rounded-full">
                <FontAwesomeIcon icon={faArrowLeft} className="size-4" />
            </Link>
            <div className="hidden md:flex flex-col flex-1 w-full justify-center items-center pr-10">{children}</div>
        </header>
    );
}