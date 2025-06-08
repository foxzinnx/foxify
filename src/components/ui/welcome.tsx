import Link from "next/link";
import { Logo } from "./logo";

export const Welcome = () => {
    return(
        <div className="flex justify-center items-center">
            <div className="absolute top-7">
                <Logo size={100} />
            </div>

            <div className="flex flex-col items-center justify-center">
                <img src='/raposa.png' alt="" width={300} />
                <div className="flex flex-col text-center">
                    <h1 className="text-[28px] font-semibold">Olá!</h1>
                    <div className="flex flex-col text-center w-72">
                        <p className="text-[17px] font-medium">Bem-vindo à Foxify, o lugar onde sua presença faz a diferença.</p>
                    </div>
                </div>

                <div className="mt-7 flex flex-col md:flex-row items-center gap-3">
                    <Link href={'/signin'}>
                        <div className="flex justify-center items-center border-2 border-orange-500 rounded-2xl w-57 md:w-47 h-14">
                            <button className="w-full h-full cursor-pointer text-orange-500">Entrar</button>
                        </div>
                    </Link>

                    <Link href={'/signup'}>
                        <div className="flex justify-center cursor-pointer items-center bg-orange-500 rounded-2xl w-57 md:w-47 h-14">
                            <button className="w-full h-full text-white drop-shadow-md cursor-pointer">Cadastre-se</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}