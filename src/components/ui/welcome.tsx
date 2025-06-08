import Link from "next/link";
import { Logo } from "./logo";

export const Welcome = () => {
    return(
        
        <div className="flex justify-center items-center">
            <style>
                {`
                .orange-hover {
                    transition: 0.3s ease-in-out;
                }
                .group:hover .orange-hover {
                    filter: brightness(0) saturate(100%) invert(48%) sepia(72%) saturate(441%) hue-rotate(347deg) brightness(107%) contrast(102%);
                }
                `}
            </style>
            <div className="absolute top-7">
                <Logo size={100} />
            </div>

            <div className="-mt-5 flex flex-col items-center justify-center">
                <img src='/fox.png' alt="" width={300} />
                <div className="flex flex-col text-center">
                    <h1 className="text-[28px] font-semibold">Olá!</h1>
                    <div className="flex flex-col text-center w-72">
                        <p className="text-[17px] font-medium">Bem-vindo à Foxify, o lugar onde sua presença faz a diferença.</p>
                    </div>
                </div>

                <div className="mt-7 flex flex-col md:flex-row items-center gap-3">
                    <Link href={'/signin'}>
                        <div className="flex justify-center items-center border-2 group gap-2 border-orange-500 rounded-2xl w-57 md:w-42 h-13">
                            <img src="/icons/user.svg" alt="" width={23} className="invert filter group-hover:-translate-x-1 transition-all duration-300" 
                                style={{filter: "brightness(0) saturate(100%) invert(48%) sepia(72%) saturate(441%) hue-rotate(347deg) brightness(107%) contrast(102%)"}}
                            />
                            <button className="cursor-pointer text-orange-500">Entrar</button>
                        </div>
                    </Link>

                    <Link href={'/signup'}>
                        <div className="flex justify-center cursor-pointer items-center bg-orange-500 group hover:bg-white transition-all duration-300 border-2 border-orange-500 hover:border-orange-500 rounded-2xl gap-1 w-57 md:w-42 h-13">
                            <img src="/icons/arrow-up-right.svg" alt="" width={23} className="invert filter group-hover:-translate-x-1 transition-all duration-300 orange-hover" />
                            <button className="text-white group-hover:text-orange-500 drop-shadow-md cursor-pointer">Cadastre-se</button>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-3">
                <p id="light" className="text-sm opacity-80 select-none">© 2025 Foxify Social.</p>
            </div>
        </div>
    );
}