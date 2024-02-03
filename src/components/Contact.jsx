import { useState } from "react";
import Input from "./Input";

function Contact() {
  const [contactType, setContactType] = useState("email"); // Состояние для хранения выбранного типа контакта

  // Обработчик изменения типа контакта
  const handleContactTypeChange = (event) => {
    setContactType(event.target.value);
  };

  return (
    <section className="section-mt">
      <div className="container mx-auto">
        <h2 className="title mb-[30px] xs:mb-[50px]">Contact us</h2>
        <form>
          <div className="flex gap-11 md:justify-between flex-wrap items-center">
            <div className="max-xs:w-full max-md:w-[280px] md:w-[25%]">
              <input
                type="text"
                placeholder={`${
                  contactType === "email"
                    ? "contact@pavepo.com"
                    : "t.me/contactPavepo"
                }`}
                className="border-b bg-black placeholder:text-darkGray outline-none hover:outline-none
               text-darkGray text-base font-normal border-b-darkGray py-5
               mb-[10px] xs:mb-5 w-full"
              />
              <div className="flex">
                <label
                  className={`flex items-center ${
                    contactType === "email" ? "text-white" : "text-gray"
                  } cursor-pointer `}
                >
                  <input
                    type="radio"
                    name="contactType"
                    value="email"
                    className="opacity-0"
                    checked={contactType === "email"}
                    onChange={handleContactTypeChange}
                  />
                  <span className="mr-2">
                    {contactType === "email" ? (
                      <img src="/radioActiv.svg" alt="icon" />
                    ) : (
                      <img src="/radioPass.svg" alt="icon" />
                    )}
                  </span>
                  Email
                </label>
                <label
                  className={`flex items-center ${
                    contactType === "telegram" ? "text-white" : "text-gray"
                  } cursor-pointer `}
                >
                  <input
                    type="radio"
                    name="contactType"
                    value="telegram"
                    checked={contactType === "telegram"}
                    className="opacity-0"
                    onChange={handleContactTypeChange}
                  />
                  <span className="mr-2">
                    {contactType === "telegram" ? (
                      <img src="/radioActiv.svg" alt="icon" />
                    ) : (
                      <img src="/radioPass.svg" alt="icon" />
                    )}
                  </span>
                  Telegram
                </label>
              </div>
            </div>
            <Input name="Name" placeholder="Paul" className="w-[25%]" />
            <Input
              name="Company site"
              placeholder="PAVEPO.COM"
              className="w-[25%]"
            />
          </div>

          <div className="flex justify-between flex-wrap items-center mt-14">
            <Input
              name="Describe the question"
              w={true}
              placeholder="How to move the planet in the right direction even faster?"
            />

            <button
              type="submit"
              className="py-[15px] px-5 w-[180px] flex items-center 
              mt-9 xs:mt-12 max-xs:w-full justify-center max-h-[50px] hover:bg-white hover:text-black transition-colors rounded-md border-2"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
