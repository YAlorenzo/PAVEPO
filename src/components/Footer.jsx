import { socialLinks } from "../constants";

function Footer() {
  return (
    <footer className="section-mt pb-11">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-xl xs:text-4xl">PAVEPO</h2>
        <ul className="flex items-center mt-5 max-xs:justify-between  max-xs:flex-wrap md:gap-5">
          {socialLinks.map((elem) => (
            <li key={elem.id} className="text-xs xs:text-lg font-normal">
              <a href={elem.link}>{elem.title}</a>
            </li>
          ))}
        </ul>
        <p className="text-darkGray md:text-lg font-normal mt-5 xs:mt-[30px]">
          For additional questions contact@pavepo.com
        </p>
        <button
          className="border rounded-md w-full text-xs mt-[30px] xs:mt-[50px] xs:text-lg 
              font-normal flex items-center justify-center xs:w-[230px] py-[10px] xs:py-[15px]
               hover:bg-white hover:text-black transition-colors"
        >
          Contact us
        </button>
      </div>
    </footer>
  );
}

export default Footer;
