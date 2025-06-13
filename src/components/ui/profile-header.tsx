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
        <header className="flex items-center px-4 py-6">
            <Link href={backHref} className="flex justify-center items-center border-2 border-neutral-800 size-11 rounded-full">
                <FontAwesomeIcon icon={faArrowLeft} className="size-5" />
            </Link>
            <div className="flex flex-col flex-1 w-full justify-center items-center pr-10">{children}</div>
        </header>
    );
}