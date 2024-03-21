import SecondTextPassage from "../molecules/SecondTextPassage";
import ThirdTextPassage from "../molecules/ThirdTextPassage";
import FourthTextPassage from "../molecules/FourthTextPassage";
import Form from "../molecules/Form";

const WhiteScreenPart = () => {
  return (
    <div className="h-[2568px] md:h-auto md:pb-[214px] w-[350px] md:w-full ml-[20px] md:ml-[0px] absolute">
      <SecondTextPassage></SecondTextPassage>
      <ThirdTextPassage></ThirdTextPassage>
      <div className="md:flex md:gap-[20px] md:w-fit md:m-auto">
        <FourthTextPassage></FourthTextPassage>
        <Form></Form>
      </div>
    </div>
  );
};

export default WhiteScreenPart;
