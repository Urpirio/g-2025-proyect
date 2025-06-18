
import Header from "../../components/components - Generales/Header";
import Section1Home from "../../components/components - Home/section1 - Home";
import Section2Home from "../../components/components - Home/section2 - Home";
import Section3Home from "../../components/components - Home/section3 - Home";
import Section4Home from "../../components/components - Home/section4 - Home";

export default function page() {
  return (
    <body>
      <Header/>
        <main>
          <Section1Home/>
          <Section2Home/>
          <Section3Home/>
          <Section4Home/>
        </main>
    </body>
  )
}
