import Image from "next/image";
import imgFamily from '@/../public/img/img - Home/FamilyImg.png';

export default function Section1Home() {
  return (
    <section className="flex relative py-20 md:py-0">
        <div className=" 
        md:mask-l-from-20% 
        md:mask-l-to-60% 
        mask-radial-at-center 
        lg:mask-l-from-30% 
        lg:mask-l-to-60%  w-dvw lg:h-dvh hidden md:flex justify-end items-start z-20">
            <Image className="   object-contain" src={imgFamily} alt=""/>
        </div>
        <div className=" md:absolute z-20 boder w-full md:py-20 lg:py-20 lg:h-[80%] flex flex-col justify-center gap-5 px-10 ">
            <div className="w-[100%] text-center md:text-start md:w-[65%] lg:w-[45%]">
                <h1 className="text-5xl font-semibold">
                    <span className="text-fblue font-black">Conectamos</span> a los ciudadanos con sus <span className="text-fblue font-black">beneficios</span>, de forma rápida, digna y transparente.
                </h1>
            </div>
            <div className="flex justify-center md:justify-start">
                <button className="border px-15 py-3 bg-fblue rounded-2xl text-2xl font-semibold text-white">Registrar</button>
            </div>
        </div>
    </section>
  )
}
