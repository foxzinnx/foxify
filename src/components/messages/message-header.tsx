import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const MessageHeader = () => {
    return(
        <div className="p-3 border-b-2 border-b-neutral-100 pb-5">
            <div className="relative flex justify-center items-center">
                <div className="absolute top-0 left-0">
                    <Link href={"/home"} className="flex justify-center items-center md:border-2 border-neutral-200 size-11 rounded-full">
                        <FontAwesomeIcon icon={faArrowLeft} className="size-5 text-black" />
                    </Link>
                </div>
                <span className="text-lg pt-2 font-semibold">Mensagens</span>
            </div>
        </div>
    );
}