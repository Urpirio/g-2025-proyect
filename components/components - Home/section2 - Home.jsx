import Image from "next/image";
import ImgSection2 from '@/../public/img/img - Home/Group 135.png';

export default function Section2Home() {
  return (
    <section className="flex flex-wrap py-20">
        <div className=" h-[100%] w-[100%] px-10 md:w-[50%] min-w-80 flex justify-end">
            <Image className="object-cover" src={ImgSection2} alt="ImgSection"/>
        </div>
        <div className=" w-[100%] md:w-[50%] min-w-80 flex justify-end  p-10">
            <span className="sm:text-xl lg:text-5xl font-semibold  w-[100%]">
                <span className="text-fblue">Plataforma gubernamental</span> que permite a los ciudadanos consultar,
                 solicitar bonos y ayudas sociales. De manera transparente, 
                 facil y eficiente.
            </span>
        </div>
    </section>
  )
}
