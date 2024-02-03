import { useGSAP } from "@gsap/react";
import { tasks } from "../constants";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
function Custemers() {
  const container = useRef();

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1060px)", () => {
        gsap.from(".custItem", {
          scrollTrigger: {
            trigger: ".custBox",
            end: "bottom center",
            scrub: 1,
          },
          stagger: {
            from: "end",
            amount: 0.5,
          },
          y: 100,
          opacity: 0,
        });
      });

      mm.add("(max-width: 1059px)", () => {
        gsap.from(".custItem", {
          scrollTrigger: {
            trigger: ".custBox",
            end: "bottom bottom",
            scrub: 1,
          },
          stagger: 0.5,
          x: -100,
          opacity: 0,
        });
      });
    },
    { scope: container }
  );
  return (
    <section className="section-mt" ref={container}>
      <div className="container mx-auto relative md:h-[500px]">
        <div>
          <h2 className="title md:max-w-[600px] md:leading-[48px] md:tracking-[-3%]">
            We love customers with extraordinary tasks more
          </h2>
          <p className="max-w-[376px] text-base font-medium mt-5 xs:mt-[10px] md:mt-5 leading-[22px] xs:leading-[30px]">
            Solving non—standard tasks is the engine of the industry and the
            driving force of progress in the world.
          </p>
          <button className="border py-[15px] px-5 rounded-md flex items-center hover:bg-white hover:text-black 
          transition-colors justify-center mt-[30px] md:mt-10">
            Tell us about the task
          </button>
        </div>
        <div className="flex justify-between max-md:flex-col flex-wrap gap-8 custBox items-center mt-16">
          {tasks.map((elem) => (
            <div
              key={elem.id}
              id={elem.id}
              className={`w-full md:max-w-[300px] custItem relative md:absolute
               ${elem.styles} ${
                elem.id === "02" && "center_absolute_customer"
              }`}
            >
              <div className="xs:max-w-[300px]">
                <h2 className="text-sm xs:text-base font-extrabold">
                  {elem.title}
                </h2>
                <p className="text-xs xs:text-base font-medium mt-2">
                  {elem.text}
                </p>
              </div>
              <p className="absolute top-0 xs:-top-9 right-0  opacity-40 text-7xl font-extrabold xs:text-[150px]">
                {elem.id}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Custemers;
