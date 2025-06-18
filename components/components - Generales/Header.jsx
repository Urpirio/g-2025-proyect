import Image from "next/image";
import Link from "next/link";
import Logo from '@/../public/img/img - Home/Rectangle 101.png'

export default function Header() {
  return (
    <header className="flex border border-gray-300 shadow-2xs justify-between items-center sticky top-0 z-30 py-4 px-5">
        <div className="flex  w-40 lg:w-p3   justify-start"> 
            <Image className="h-10 w-50 object-contain" src={Logo} alt=""/>
        </div>
        <div className=" lg:w-p4 hidden md:flex  md:flex-grow items-center  ">
            <nav className=" w-Max flex  justify-center gap-8 md:gap-0 md:justify-around text-[16px]">
                <Link href={''}>Inicio</Link>
                <Link href={''}>Sobre Nosotros</Link>
                <Link href={''}>Servicios</Link>
            </nav>
        </div>
        <div className="  lg:w-p3 hidden md:flex justify-end  items-center gap-1">
            <button className="border px-5 py-2 rounded-xl bg-fblue text-white">Iniciar Sesión</button>
            <button className="border px-5 py-2 rounded-xl bg-gray-400 text-white">Registrarse</button>
        </div>
    </header>
  )
}
