import Marquee from "react-fast-marquee";
import MarqueeItem from "./MarqueeItem";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "fallback",
});

const MarqueeComponent = () => {
  return (
    <Marquee className={bebas.className} speed={100}>
      <div className="flex items-center text-5xl lg:text-6xl xl:text-8xl font-bold text-white m-auto">
        *
      </div>
      <MarqueeItem text="Clean" textWhite="Code" />
      <div className="flex items-center text-5xl lg:text-6xl xl:text-8xl font-bold text-white m-auto">
        *
      </div>
      <MarqueeItem text="Good" textWhite="Websites" />
      <div className="flex items-center text-5xl lg:text-6xl xl:text-8xl font-bold text-white m-auto">
        *
      </div>
      <MarqueeItem text="Good" textWhite="Stuff" />
      <div className="flex items-center text-5xl lg:text-6xl xl:text-8xl font-bold text-white m-auto">
        *
      </div>
      <MarqueeItem text="FrontEnd" textWhite="Lover" />
    </Marquee>
  );
};

export default MarqueeComponent;
