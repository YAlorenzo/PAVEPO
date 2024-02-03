import { useGSAP } from "@gsap/react";
import { gallery } from "../constants";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { arrowButton, lineGallery } from "../assets";

gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  const container = useRef();

  useGSAP(() => {
    const entries = document.querySelectorAll(".gallBox");
    entries.forEach(
      (entry) => {
        let entryMeta = entry.querySelector(".gallText");
        let entryMedia = entry.querySelector(".gallMedia");

        gsap.set(entryMeta, {
          xPercent: -100,
          opacity: 0,
        });
        gsap.set(entryMedia, {
          xPercent: 100,
          opacity: 0,
        });

        gsap.to(entryMeta, {
          scrollTrigger: {
            trigger: entryMeta,
            start: "top bottom",
            end: "bottom 90%",
            scrub: true,
          },
          xPercent: 0,
          opacity: 1,
        });
        gsap.to(entryMedia, {
          scrollTrigger: {
            trigger: entryMedia,
            start: "top bottom",
            end: "bottom 90%",
            scrub: true,
          },
          xPercent: 0,
          opacity: 1,
        });
      },
      { scope: container }
    );
  });
  return (
    <section className="section-mt overflow-y-hidden" ref={container}>
      <div className="container  mx-auto mt-[100px]">
        {gallery.map((elem) => (
          <div
            key={elem.id}
            className={`flex gap-10 gallBox flex-wrap md:flex-nowrap ${
              elem.ravers && "flex-row-reverse mt-20"
            }`}
          >
            <div
              className={`w-full md:w-[50%] ${
                elem.ravers ? "gallMedia" : "gallText"
              } `}
            >
              <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                <img
                  src={lineGallery}
                  alt="icon"
                  className="block md:hidden"
                />
                {elem.title}
              </h2>

              <p className="text-gray text-base font-normal mt-5 tracking-normal xs:mt-[10px] md:mt-5 max-xs:leading-[120%] leading-8">
                {elem.text}
              </p>
              <p className="text-gray text-base font-normal mt-5 tracking-normal xs:mt-[10px] md:mt-5 max-xs:leading-[120%] leading-8">
                {elem.textTwo}
              </p>

              <button className="text-lg border rounded-md py-[10px] px-[15px] mt-[25px] flex items-center justify-center">
                {elem.buttonText}
                <img
                  src={arrowButton}
                  alt="icon"
                  className="ml-3"
                  width="12px"
                  height="12px"
                />
              </button>
            </div>
            <div
              className={`w-full xs:w-full ${
                elem.ravers ? "gallText" : "gallMedia"
              }  md:w-[50%]`}
            >
              <img src={elem.img} alt="image" className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
