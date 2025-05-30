import Image from "next/image";
import Link from "next/link";

type Props = {
    size: number;
}

export const Logo = ({ size }: Props) => {
    return(
        <Link href="/home">
            <Image 
                src={'/foxify-logo.png'}
                alt="Logo"
                width={size}
                height={size}
                quality={100}
            />
        </Link>
    );
}