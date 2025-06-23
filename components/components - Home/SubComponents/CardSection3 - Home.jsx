import Image from "next/image";
import { DataSection3 } from "../../../Data/Data - Home/Data - section3";

export default function CardSection3Home() {
    const Part1 = () => {
      const Cards =  DataSection3.map(items => {
        if(items.key < 3){
            return(
            <article className="flex w-80 items-center space-x-5 border border-gray-300 bg-white shadow md:shadow-xl p-3 rounded-3xl">
                <Image src={items.Icon} alt={items.Titulo}/>
                <h3 className="text-xl text-blue-600 ">{items.Titulo}</h3>
            </article>
            )
        }
      })

      return(Cards)
    }

    const Part2 = () => {
        const Cards =  DataSection3.map(items => {
          if(items.key > 1 && items.key < 4){
              return(
              <article className="flex w-80  items-center space-x-5 border border-gray-300 bg-white shadow md:shadow-xl p-3 rounded-3xl">
                  <Image src={items.Icon} alt={items.Titulo}/>
                  <h3 className="text-xl text-blue-600 ">{items.Titulo}</h3>
              </article>
              )
          }
        })
  
        return(Cards)
      }

      const Part3 = () => {
        const Cards =  DataSection3.map(items => {
          if(items.key > 4 && DataSection3.length){
              return(
              <article className="flex w-80 items-center space-x-5 border border-gray-300 bg-white shadow md:shadow-xl p-3 rounded-3xl">
                  <Image src={items.Icon} alt={items.Titulo}/>
                  <h3 className="text-xl text-blue-600 ">{items.Titulo}</h3>
              </article>
              )
          }
        })
  
        return(Cards)
      }

return({
    Part1,
    Part2,
    Part3
})
}
