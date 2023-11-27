import FirebaseIcon from "./icons/FirebaseIcon";
import TailwindIcon from "./icons/TailwindIcon";
import VueIcon from "./icons/VueIcon";
import HtmlIcon from "./icons/HtmlIcon";
import { Bebas_Neue } from "next/font/google";
import LinkIcon from "./icons/LinkIcon";
import Image from "next/image";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "fallback",
});

const Proyects = () => {
  return (
    <article className="flex flex-col justify-between items-center lg:flex-row border-[1px] border-white rounded-xl py-20 px-20 mt-10 group hover:scale-[1.03] hover:bg-white transition-all">
      <div>
        <div className="flex gap-5 items-center">
          <h3
            className={`${bebas.className} font-bold text-8xl text-secondary-color group-hover:text-gray-950`}
          >
            Gartoll Web
          </h3>
          <LinkIcon />
        </div>
        <p className="text-white text-lg group-hover:text-gray-950">
          Una web corporativa para una empresa de Seguridad Privada.
        </p>
        <div className="flex items-center mt-10">
          <HtmlIcon color="text-white group-hover:text-gray-950 transition-colors" />
          <VueIcon color="text-white group-hover:text-gray-950 transition-colors" />
          <FirebaseIcon color="text-white group-hover:text-gray-950 transition-colors" />
          <TailwindIcon color="text-white group-hover:text-gray-950 transition-colors" />
        </div>
      </div>
      <div className="flex flex-row gap-3 lg:relative h-36 lg:h-52 lg:w-1/3 justify-center">
        <Image
          height={500}
          width={500}
          src="/images/g1.png"
          alt="Imagen de pagina web de gartol hecha por Daniel Castillo Balboa"
          className="h-auto w-full lg:absolute lg:-top-28 lg:right-0 lg:group-hover:scale-75 lg:group-hover:opacity-0 transition-all ease-in-out"
        />
        <Image
          height={700}
          width={700}
          src="/images/g2.png"
          alt="Imagen de pagina web de gartol hecha por Daniel Castillo Balboa"
          className="h-auto w-full lg:absolute lg:-top-20 lg:right-0 lg:group-hover:scale-125 lg:scale-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all  ease-in-out"
        />
      </div>
    </article>
  );
};

export default Proyects;
