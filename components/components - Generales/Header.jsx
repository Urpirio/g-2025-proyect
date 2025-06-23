'use client';
import Image from "next/image";
import Link from "next/link";
import Logo from '@/../public/img/img - Home/Rectangle 101.png';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";

export let SetDeployMenu;
export default function Header() {
    
  const Pathname = usePathname();
  const [DeployMenu,setDeployMenu] = useState(false);
  SetDeployMenu = setDeployMenu;

  return (
    <header className="flex border border-gray-300 shadow-2xs justify-between  sticky top-0 z-50 bg-white py-4 px-5 w-full">
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
            <Link href={''} className="border px-5 py-2 rounded-xl bg-fblue text-white">Iniciar Sesión</Link>
            <Link href={''} className="border px-5 py-2 rounded-xl bg-gray-400 text-white">Registrarse</Link>
        </div>
        <div className=" md:hidden flex items-center">
            <button className="text-4xl" onClick={()=>{setDeployMenu(!DeployMenu)}}>
                {DeployMenu ? <IoMdClose className="text-red-600"/>: <IoMenu className="text-blue-950"/>}
            </button>
        </div>
        <menu className={`${DeployMenu ? 'flex' : 'hidden'} flex-col p-5 border-b border-gray-300 rounded-b-2xl shadow bg-white  absolute right-0 w-full top-18`}>
            <div className="flex flex-col gap-2 ">
                <Link href={''} className={`${Pathname === '/' ? 'text-blue-600' : ''}`}>Inicio</Link>
                <Link href={''}>Sobre Nosotros</Link>
                <Link href={''}>Servicios</Link>
            </div>
            <div className="flex flex-col gap-2 py-2">
                <Link href={''} className="text-center border px-5 py-2 w-full rounded-xl bg-fblue text-white">Iniciar Sesión</Link>
                <Link href={''} className="text-center border px-5 py-2 w-full rounded-xl bg-gray-400 text-white">Regristrarse</Link>
            </div>
        </menu>
    </header>
  )
}
