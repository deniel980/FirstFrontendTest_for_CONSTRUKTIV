import HeaderTab from "../atoms/HeaderTab";
import FavoriteLogo from "../atoms/FavoriteLogo";

const Header = () => {
  return (
    <div className="fixed z-50 top-0 h-[123px] md:h-[203px] w-full bg-[#7544FC]">
      <div className="mt-[14.37px] md:mt-[43.96px] ml-[20px] md:ml-[240px]">
        <FavoriteLogo></FavoriteLogo>
        <div className="flex gap-[40px] mt-[20.37px] text-white font-bold">
          <HeaderTab innerText="Lorem"></HeaderTab>
          <HeaderTab innerText="Ipsum"></HeaderTab>
          <HeaderTab innerText="Dolor"></HeaderTab>
        </div>
      </div>
    </div>
  );
};

export default Header;
