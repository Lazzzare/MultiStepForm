import sideBarImageForMobile from "./../images/bg-sidebar-mobile.svg";
import sideBarImageForDesktop from "./../images/bg-sidebar-desktop.svg";

interface StepData {
  stepNumber: number;
  stepTitle: string;
  stepInfo: string;
}

const stepsData: StepData[] = [
  { stepNumber: 1, stepTitle: "STEP 1", stepInfo: "YOUR INFO" },
  { stepNumber: 2, stepTitle: "STEP 2", stepInfo: "SELECT PLAN" },
  { stepNumber: 3, stepTitle: "STEP 3", stepInfo: "ADD-ONS" },
  { stepNumber: 4, stepTitle: "STEP 4", stepInfo: "SUMMARY" },
];

const Sidebar = () => {
  return (
    <div className="relative z-10 mx-auto">
      {/* Images */}
      <div className="">
        <img
          src={sideBarImageForMobile}
          alt="sideBarImageForMobile"
          className="w-full flex md:hidden"
        />
        <div className="bg-white p-4 rounded-l-[10px] hidden md:flex">
          <img
            src={sideBarImageForDesktop}
            alt="sideBarImageForMobile"
            className="w-full h-[568px] hidden md:flex rounded-[10px]"
          />
        </div>
      </div>
      {/* Buttons */}
      <div
        className="z-10 absolute mx-auto top-8 md:top-10 flex flex-row md:flex-col md:pl-8 md:pt-10
      md:items-start md:left-8 items-center gap-4 text-white text-sm font-bold tracking-[1px]
      justify-center w-full leading-normal"
      >
        {stepsData.map((step) => (
          <div key={step.stepNumber} className="flex flex-row gap-4">
            <button className="border rounded-full w-8 h-8 items-center">
              {step.stepNumber}
            </button>
            <div className="hidden md:flex flex-col">
              <h2 className="text-[#ABBCFF] text-xs leading-normal">
                {step.stepTitle}
              </h2>
              <h1 className="text-white text-sm font-bold tracking-[1px] uppercase">
                {step.stepInfo}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
