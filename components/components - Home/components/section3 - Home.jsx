import Image from "next/image";
import ImgChicaPhone from '@/../public/img/img - Home/Group 376.png'
import CardSection3Home from "../SubComponents/CardSection3 - Home";

export default function Section3Home() {
    const { Part1,Part2,Part3} = CardSection3Home()
  return (
   <section>
    <div className="py-10">
        <h2 className="text-center text-blue-600 text-3xl md:text-5xl font-bold">¿Por qué elegirnos?</h2>
    </div>
    <div className="flex justify-center items-center h-1/2">
        <div className="w-1/3 h-1/3 hidden md:block">
            <Image className="h-[100%] w-[100%]" src={ImgChicaPhone} alt=""/>
        </div>
        <div className="flex gap-2 flex-col justify-around px-10 md:absolute w-full h-1/2">
        <div className="flex gap-2 flex-wrap justify-center md:justify-around">
            <Part1/>
        </div>
        <div className="flex gap-2 flex-wrap justify-center md:justify-between">
            <Part2/>
        </div>
        <div className="flex gap-2 flex-wrap justify-center md:justify-around">
            <Part3/>
        </div>
        </div>
    </div>
   </section>
  )
}
