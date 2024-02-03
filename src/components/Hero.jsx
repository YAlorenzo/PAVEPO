import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";
import { heroInfo } from "../constants";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

// Регистрация плагинов
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".animo", {
        y: -150,
        opacity: 0,
        duration: 0.7,
      });

      gsap.to(".text", {
        text: "tO TRANSFORMATION AND REACHING NEW HEIGHTS",
        duration: 3.5,
        delay: 1.5,
        ease: "ease.in",
      });

      gsap.from(".item", {
        scrollTrigger: {
          trigger: ".box",
          // scrub: 0.5,
        },
        opacity: 0,
        stagger: 0.5,
        y: 50,
      });

      gsap.from(".line", {
        opacity: 0,
        duration: 2.5,
        delay: 3.5,
        ease: "bounce.out",
        y: -50,
      });
    },

    { scope: container }
  );

  return (
    <section className="mt-5" ref={container}>
      <div className="mx-auto container">
        <div className="text-center opacity-1 animo">
          <h1 className="text-[40px] xs:text-[64px] font-normal leading-normal">
            YOUR KEY
          </h1>
          <p className="text-xs xs:text-base font-light text-gray lowercase text"></p>

          <img
            src="lineHero.svg"
            alt="icon"
            className="mx-auto mt-6 max-xs:hidden line"
          />
        </div>

        <div
          style={{ width: "100%", height: "100vh" }}
          className="flex items-center justify-center height-full "
        >
          <Canvas
            style={{ width: "100%", height: "100%" }}
            camera={{ position: [0, 0, 90] }}
          >
            <ambientLight />
            <Planet />
          </Canvas>
        </div>

        <div
          className="flex flex-wrap gap-7 justify-center 
        sm:justify-between sm:gap-14 md:gap-24 md:justify-center items-center box"
        >
          {heroInfo.map((elem) => (
            <div key={elem.id} className="text-center item">
              <h2 className="text-2xl sm:text-[40px] md:text-[50px] leading-normal font-extrabold">
                {elem.title}
              </h2>
              <p className="text-xs sm:text-lg font-normal text-accentGray">
                {elem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
