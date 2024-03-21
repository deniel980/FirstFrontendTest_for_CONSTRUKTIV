import FormTextPassage from "./FormTextPassage";

const Form = () => {
  return (
    <form className="md:w-[710px] h-[610px] md:h-[566px] mt-[20px] md:mt-[132px] bg-[#7544FC] rounded-[10px] px-[20px] md:px-[60px] py-[40px] md:py-[40px]">
      <FormTextPassage></FormTextPassage>
      <div className="grid gap-[8px] mt-[30px]">
        <input
          className="h-[46px] w-full px-[20px] py-[13px] rounded-[10px]"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="h-[46px] w-full px-[20px] py-[13px] rounded-[10px]"
          type="email"
          placeholder="E-Mail Adresse"
          required
        />
        <input
          className="h-[180px] w-full px-[20px] py-[13px] rounded-[10px]"
          type="text"
          placeholder="Nachricht"
          required
        />
        <div className="flex gap-[8px] mt-[12px] text-white">
          <input className="w-[20px] h-[20px] rounded-[4px]" type="checkbox" required/>
          <span>Einwilligung zur Datenverarbeitung*</span>
        </div>

        <input
          className="h-[46px] w-full px-[20px] rounded-[10px] bg-[#FF6F4B] text-white font-bold"
          type="submit"
          value="Jetzt absenden!"
        />
      </div>
    </form>
  );
};

export default Form;
