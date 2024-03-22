import SecondTextPassage from "../molecules/SecondTextPassage";
import ThirdTextPassage from "../molecules/ThirdTextPassage";
import FourthTextPassage from "../molecules/FourthTextPassage";
import Form from "../molecules/Form";

const WhiteScreenPart = () => {
  return (
    <div className="h-[2568px] md:h-auto md:pb-[214px] w-[90%] md:w-full m-auto absolute">
      <SecondTextPassage></SecondTextPassage>
      <ThirdTextPassage></ThirdTextPassage>
      <div className="md:flex md:gap-[20px] w-full m-auto md:w-fit">
        <FourthTextPassage></FourthTextPassage>
        <Form></Form>
      </div>
    </div>
  );
};

export default WhiteScreenPart;
