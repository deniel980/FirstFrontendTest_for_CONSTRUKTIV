import FirstTextPassage from "../molecules/FirstTextPassage";
import Picture from "../atoms/Picture";

const LilaScreenPart = () => {
    return (
        <div className="bg-[#7544FC] absolute top-0 -z-10 h-[601px] md:h-[703px] w-full md:pl-[240px] md:flex md:gap-[20px]">
            <FirstTextPassage></FirstTextPassage>
            <Picture></Picture>
        </div>
    )
}

export default LilaScreenPart;