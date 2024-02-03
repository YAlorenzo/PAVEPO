import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scob, scob2 } from "../assets";

gsap.registerPlugin(ScrollTrigger);

function Text() {
  const container = useRef();

  useGSAP(
    () => {
      gsap.from(".textIcon1", {
        scrollTrigger: {
          trigger: ".textBox",
          scrub: 1,
          end: "bottom center",
        },
        y: document.querySelector(".contText").offsetHeight / 2,
        x: document.querySelector(".contText").offsetWidth / 2,
      });
      gsap.from(".textIcon2", {
        scrollTrigger: {
          trigger: ".textBox",
          end: "bottom center",
          scrub: 1,
        },
        y: (document.querySelector(".contText").offsetHeight / 2) * -1,
        x: (document.querySelector(".contText").offsetWidth / 2) * -1,
      });
      gsap.from(".textBox", {
        scrollTrigger: {
          trigger: ".textBox",
          scrub: 1,
          end: "bottom center",
        },
        scale: 0,
        opacity: 0,
      });
    },

    { scope: container }
  );
  return (
    <section className="section-mt" ref={container}>
      <div className="container mx-auto">
        <div className="relative max-w-[80%] contText sm:max-w-[578px] md:max-w-[870px] mx-auto flex items-center justify-between">
          <img
            src={scob}
            alt="icon"
            className="absolute textIcon1 w-[24px] md:w-[40px] top-0 -left-10 md:-left-0"
          />
          <img
            src={scob2}
            alt="icon"
            className="absolute textIcon2 w-[24px]  md:w-[40px] bottom-0 -right-10 md:-right-0"
          />
          <p className="text-xs textBox font-bold xs:text-xl md:text-2xl mx-auto text-center w-[734px]">
            We are always very honest about working with customers. Therefore,
            we do not undertake projects that we think have a low probability of
            implementation. But if we have undertaken it, then rest assured - we
            will do everything possible and not possible to bring your task to
            an end.
          </p>
        </div>
        <p className="text-xs sm:text-lg text-center mt-4 text-accentGray">
          Pavel Popov CEO “PAVEPO”
        </p>
      </div>
    </section>
  );
}

export default Text;
