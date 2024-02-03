import { useState } from "react";
import { qustions } from "../constants";

function Questions() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  return (
    <section className="section-mt">
      <div className="container mx-auto">
        <h2 className="title font-extrabold">Frequent questions</h2>

        <div className="max-md:flex-col md:flex md:justify-between">
          <p className="text-xs xs:text-base md:text-xl max-w-[389px] text-darkGray mt-5 md:mt-[30px]">
            Here you can find information on the most common questions. You can
            ask us a question
          </p>
          <div className="w-full md:w-[60%]">
            {qustions.map((elem) => (
              <div
                key={elem.id}
                className={`${!elem.last && "border-b"} cursor-pointer py-5`}
                onClick={() =>
                  setActiveQuestion(activeQuestion === elem.id ? null : elem.id)
                }
              >
                <div className="flex justify-between items-center">
                  <p className="text-sm xs:text-lg">{elem.qustion}</p>
                  {activeQuestion === elem.id ? (
                    <img src="arrowTop.svg" alt="icon" className="mr-2" />
                  ) : (
                    <img src="arrowBot.svg" alt="icon" className="mr-2" />
                  )}
                </div>
                <div
                  className={`faq-answer ${
                    activeQuestion === elem.id ? "open" : ""
                  }`}
                >
                  <p className="text-darkGray text-xs xs:text-lg mt-[10px] xs:mt-[18px]">
                    {elem.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;
