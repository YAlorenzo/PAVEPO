import { useState } from "react"
import { headerNav } from "../constants"
import MobileMenu from "./MobileMenu";
// import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const [toggel, setToggel] = useState(false);
  return (
    <>
      <header className="py-5">
        <div className="flex flex-wrap justify-between items-center py-7 container mx-auto">
          <a href="#" className="uppercase text-xl xs:text-4xl font-normal">
            pavepo
          </a>

          <div className="flex-wrap justify-center items-center gap-5 hidden sm:flex">
            {headerNav.map((elem) => (
              <a
                href={elem.link}
                key={elem.id}
                className="text-xs font-normal 
                      cursor-pointer hover:text-gray transition-colors"
              >
                {elem.title}
              </a>
            ))}
          </div>

          <button
            className="font-normal text-xs max-sm:border 
               py-2 xs:py-[10px] w-[100px] xs:w-32 sm:w-40 md:w-[120px] max-sm:rounded-md xs:text-sm  sm:text-xs sm:text-gray"
          >
            Log In
          </button>

          <div
            className="block sm:hidden"
            onClick={() => setToggel((prev) => !prev)}
          >
            <img src="/menu.svg" alt="icon" className="w-[36px] xs:w-[60px]" />
          </div>
        </div>
      </header>
      <MobileMenu isOpen={toggel} />
    </>
  );
}

export default Header
