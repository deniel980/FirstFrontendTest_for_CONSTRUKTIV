import FirstTextPassage from "../molecules/FirstTextPassage";
import Picture from "../atoms/Picture";

const LilaScreenPart = () => {
    return (
        <div className="bg-[#7544FC] absolute top-0 -z-10 h-[601px] md:h-[703px] w-full md:px-[100px] md:flex md:gap-[150px] md:place-content-between">
            <FirstTextPassage></FirstTextPassage>
            <Picture></Picture>
        </div>
    )
}

export default LilaScreenPart;