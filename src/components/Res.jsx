import { devRes } from "../constants"

function Res() {
  
  return (
    <section className="section-mt">
      <div className="container mt-7 sm:mt-16 md:mt-[100px] justify-center items-center mx-auto flex max-md:gap-8 md:justify-between max-md:overflow-y-auto">
        {devRes.map((elem) => (
          <a
            href={elem.link}
            key={elem.id}
            className="max-md:bg-[#211C21] p-3 text-xs sm:text-lg md:text-2xl font-bold"
          >
            {elem.name}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Res