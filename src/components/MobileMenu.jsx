
import gsap from "gsap";
import { headerNav } from "../constants"
import { useEffect } from "react";


function MobileMenu({ isOpen }) {

     useEffect(() => {
      if (isOpen) {
        gsap.to('.sidebar', { y: 0, duration: 1.5, ease: "elastic" });
      } else {
          gsap.to('.sidebar', { y: 100, duration: 1.5,  ease: "elastic" });
      }
     }, [isOpen]);
    return (
      <div className="container relative sm:hidden">
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } p-6  border bg-black absolute  z-20 top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {headerNav.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px]
          ${
            index === headerNav.length - 1 ? "mr-0" : "mb-4"
          } text-white transition-colors`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default MobileMenu