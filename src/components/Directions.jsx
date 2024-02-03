import { useGSAP } from "@gsap/react";
import { direction } from "../constants";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Directions() {
  const container = useRef();
  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      mm.add("(min-width: 800px)", () => {
        gsap.from(".buttDir", {
          scrollTrigger: {
            trigger: ".boxGG",
            end: "top top",
                scrub: 1,
            
          },
          stagger: 0.1,
          x: -500,
          rotate: 360,
        });
        console.log(mm + "min-w-800");
      });

      mm.add("(max-width: 799px)", () => {
        gsap.from(".buttDir", {
          scrollTrigger: {
            trigger: ".boxGG",
            end: "top top",
            scrub: 1,
          },
          opacity: 0,
          x: -100,
          stagger: 0.1,
          rotate: 360,
        });
        console.log(mm + "max-w-799");
      });
    },
    { scope: container }
  );
  return (
    <section className="section-mt" ref={container}>
      <div className="container mx-auto">
        <h2 className="title  md:text-center">The main directions</h2>
        {direction.map((elem) => (
          <div
            key={elem.id}
            className={` ${
              !elem.last && "border-b"
            }  boxGG flex items-center justify-between 
                mt-[30px] xs:mt-[40px] md:mt-[65px] pb-[10px] xs:pb-[25px] md:pb-9 cursor-pointer`}
          >
            <div className="w-full md:w-auto">
              <h2 className="text-base font-semibold xs:text-xl md:text-[28px] uppercase">
                {elem.title}
              </h2>
              <p className="text-accentGray font-normal text-xs xs:text-lg leading-[160.5%] max-w-[580px]  mt-[14px] xs:mt-[10px]">
                {elem.text}
              </p>
            </div>
            <button className="flex items-center justify-center rounded-full border-[2px] xs:border-[4px] p-5 buttDir">
              <img src="/arrowButton.svg" alt="icon" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Directions;
