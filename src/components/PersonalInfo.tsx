const PersonalInfo = () => {
  return (
    <div className="">
      <div
        className="top-[90px] md:top-0 md:h-[600px] left-1/2 -translate-x-1/2 z-40 absolute md:relative md:items-center shadow 
        py-8 px-6 md:pt-14 md:px-[100px] md:pb-8
       bg-white w-[343px] md:w-full mx-auto rounded-r-[10px]"
      >
        <div className="flex flex-col gap-[9px] pb-5">
          <h1 className="text-[#022959] text-2xl font-bold leading-normal">
            Personal info
          </h1>
          <p className="text-[#9699AA] leading-[25px]">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        {/* Form */}
        <form className="text-[#022959] text-sm flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col md:gap-3">
            <label>Name</label>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              className="pl-4 py-3 border border-[#D6D9E6] rounded text-[#9699AA] font-medium outline-none"
            />
          </div>
          <div className="flex flex-col md:gap-3">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              className="pl-4 py-3 border border-[#D6D9E6] rounded text-[#9699AA] font-medium outline-none"
            />
          </div>
          <div className="flex flex-col md:gap-3">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              className="pl-4 py-3 border border-[#D6D9E6] rounded text-[#9699AA] font-medium outline-none"
            />
          </div>
          <div className="flex w-full justify-end mt-3 md:mt-20">
            <button className="text-white bg-[#022959] py-3 px-4 rounded text-sm font-medium leading-normal">
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
