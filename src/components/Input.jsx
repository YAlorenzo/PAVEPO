
function Input({ name, placeholder, w}) {
  return (
    <>
      <label
        htmlFor={name}
        className={`text-[#F3F1EB]  ${
          w
            ? "max-sm:w-full w-[59%]"
            : " max-xs:w-full max-md:w-[280px] w-[25%]"
        }`}
      >
        <input
          type="text"
          name={name}
          id={name}
          placeholder={placeholder}
          className="border-b bg-black placeholder:text-darkGray outline-none hover:outline-none
               text-darkGray text-base font-normal border-b-darkGray py-5
               mb-[10px] xs:mb-5 w-full"
        />
        <br />
        {name}
      </label>
    </>
  );
}

export default Input