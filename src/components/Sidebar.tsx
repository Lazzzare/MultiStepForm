import sideBarImageForMobile from "./../images/bg-sidebar-mobile.svg";

const Sidebar = () => {
  return (
    <div className="relative">
      {/* Images */}
      <div>
        <img
          src={sideBarImageForMobile}
          alt="sideBarImageForMobile"
          className="w-full"
        />
      </div>
      {/* Buttons */}
      <div
        className="absolute top-8 flex flex-row items-center gap-4 text-white text-sm
      font-bold tracking-[1px] justify-center w-full leading-normal"
      >
        <button className="border rounded-full w-8 h-8 items-center">1</button>
        <button className="border rounded-full w-8 h-8 items-center">2</button>
        <button className="border rounded-full w-8 h-8 items-center">3</button>
        <button className="border rounded-full w-8 h-8 items-center">4</button>
      </div>
    </div>
  );
};

export default Sidebar;
