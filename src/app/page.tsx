import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import SocialIcons from "@/components/SocialIcons";
import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";
import Cv from "@/components/icons/Cv";
import MarqueeComponent from "@/components/Marquee";
import Proyects from "@/components/Proyects";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "fallback",
});

export default function Home() {
  return (
    <>
      <header className="mx-auto bg-thith-color flex mt-10 rounded-3xl px-0 lg:px-20 py-20 lg:py-0 max-w-[1350px]">
        <div className="flex flex-col sm:flex-row justify-between h-full w-full relative bg-grey sm:h-[40vh] lg:h-[85vh] lg:max-h-[960px] rounded-3xl">
          <div className="flex justify-center h-full lg:pt-4 flex-col relative gap-3 lg:gap-1 content-wrapper w-screen lg:w-auto">
            <p
              className={`${bebas.className} text-white text-4xl font-bebas font-black text-center lg:text-left uppercase`}
            >
              ¡Hola!
            </p>
            <h1
              className={`${bebas.className} text-white text-6xl md:text-8xl font-black font-bebas text-center lg:text-left`}
            >
              Soy{" "}
              <span className="text-secondary-color font-secondary uppercase">
                Daniel Castillo
              </span>
            </h1>
            <p className="text-white text-lg text-center lg:text-left">
              Front-End Developer
            </p>
            <ul className="flex gap-3 justify-center lg:justify-start">
              <SocialIcons
                text="Github"
                link="https://github.com/TheDaidor2001"
              >
                <Github />
              </SocialIcons>
              <SocialIcons
                text="Linkedin"
                link="https://www.linkedin.com/in/daniel-castillo-balboa-360a85224/"
              >
                <Linkedin />
              </SocialIcons>
              <SocialIcons text="Curriculum" link="/pdf/NCurriculum.pdf">
                <Cv />
              </SocialIcons>
            </ul>
          </div>
          <div className="hidden items-center w-full lg:flex">
            <Image
              width={400}
              height={400}
              className="w-[600px] h-auto mx-auto"
              src="/images/hero.svg"
              alt=""
            />
          </div>
        </div>
      </header>
      <div className="max-w-[1350px] mx-auto">
        <section
          className=" bg-secondary-color flex flex-col lg:flex-row mt-10 rounded-3xl px-0 lg:px-28 h-52 gap-5 items-center justify-center"
          id="about_me"
        >
          <p className="lg:-rotate-90 text-xl lg:text-2xl font-bold text-center text-gray-950 uppercase">
            Sobre mi
          </p>
          <h2
            className={`${bebas.className} text-4xl md:text-6xl lg:text-8xl font-extrabold text-gray-950 text-center uppercase`}
          >
            Sin barreras, sin límites
          </h2>
        </section>
        <section className="flex flex-col lg:flex-row items-center mt-20 rounded-3xl px-10 lg:px-20 pb-20 gap-20">
          <div className="w-full lg:w-2/3">
            <h3 className="text-secondary-color text-3xl font-semibold">
              Apasionado por la creación de sitios Web.
            </h3>
            <p className="text-white text-xl font-light mt-2">
              Desarrolador web desde 2021, siempre impulsado por el deseo de
              elaborar sitios web preciosos, accesibles y con el mejor
              rendimiento posible
            </p>
            <p className="text-white text-xl font-light mt-4">
              He tenido el privilegio de aprender de profesionales con varios
              cursos de expertos orientados en la materia de la programación
              FrontEnd.
            </p>
          </div>
          <div className="mx-auto w-1/3">
            <Image
              width={270}
              height={270}
              className="mx-auto"
              src="/images/name.png"
              alt="daniel castillo balboa programador frontEnd"
            />
          </div>
        </section>

        <section className="flex flex-col gap-10 xl:gap-0 xl:flex-row items-center px-10 md:px-20 xl:px-0 rounded-3xl">
          <article className="text-center px-7 py-20 lg:p-20 lg:border-r-2 border-white group hover:bg-secondary-color transition-all rounded-3xl xl:rounded-none xl:rounded-l-3xl hover:scale-[1.05] hover:rounded-3xl border-2 w-full">
            <h1
              className={`${bebas.className} text-5xl lg:text-8xl text-secondary-color group-hover:text-gray-950`}
            >
              Escuela
            </h1>
            <p className="text-white text-lg md:text-xl w-full lg:text-2xl lg:w-3/4  mx-auto my-5 group-hover:text-gray-950">
              Graduado en el Instituo IES Valle del Cidacos enfocado en la
              informática y programación.
            </p>
            <span className="text-white font-bold text-lg xl:text-xl group-hover:bg-white group-hover:rounded-3xl group-hover:px-5 group-hover:py-1 group-hover:text-gray-950">
              Desde 2005 hasta 2017
            </span>
          </article>
          <article className="text-center px-7 py-20 lg:p-20 lg:border-r-2 border-white group hover:bg-white transition-all rounded-3xl xl:rounded-none xl:rounded-r-3xl hover:scale-[1.05] hover:rounded-3xl border-2 w-full">
            <h1
              className={`${bebas.className} text-5xl lg:text-8xl text-secondary-color group-hover:text-gray-950`}
            >
              Titulación
            </h1>
            <p className="text-white text-lg md:text-xl w-full lg:text-2xl lg:w-3/4  mx-auto my-5 group-hover:text-gray-950">
              Graduado en el centro profesional Nostradmus como técnico en
              Sistemas informáticos y Redes.
            </p>
            <span className="text-white font-bold text-lg xl:text-xl group-hover:bg-secondary-color group-hover:rounded-3xl group-hover:px-5 group-hover:py-1 group-hover:text-gray-950">
              Desde 2019 hasta 2021
            </span>
          </article>
        </section>
      </div>
      <section className="mt-14 py-10">
        <MarqueeComponent />
      </section>
      <div className="max-w-[1350px] mx-auto">
        <section className="mt-5">
          <p className="text-4xl text-center text-white font-bold">Proyectos</p>
          <h2
            className={`${bebas.className} text-center text-secondary-color text-8xl mt-5`}
          >
            Grandes Proyectos, Grandes enseñanzas
          </h2>

          <div className="space-y-10">
            <Proyects />
            <Proyects />
            <Proyects />
          </div>
        </section>
      </div>
    </>
  );
}
