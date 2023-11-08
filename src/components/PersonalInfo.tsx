import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  setIsFormValid: (e: boolean) => void;
}

type FormValues = {
  name: string;
  email: string;
  phone: string;
};

const PersonalInfo = ({ setIsFormValid }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = () => {
    setIsFormValid(true);
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-[#022959] text-sm flex flex-col gap-4 md:gap-6"
        >
          <div className="flex flex-col md:gap-3">
            <div className="flex flex-row items-center justify-between">
              <label>Name</label>
              {errors.name && (
                <p className="text-red-500 text-sm">{`${errors.name.message}`}</p>
              )}
            </div>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="text"
              placeholder="e.g. Stephen King"
              className="pl-4 py-3 border border-[#D6D9E6] rounded text-[#9699AA] font-medium outline-none"
            />
          </div>
          <div className="flex flex-col md:gap-3">
            <div className="flex flex-row items-center justify-between">
              <label>Email Address</label>
              {errors.email && (
                <p className="text-red-500 text-sm">
                  {`${errors.email.message}`}
                </p>
              )}
            </div>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              className="pl-4 py-3 border border-[#D6D9E6] rounded text-[#9699AA] font-medium outline-none"
            />
          </div>
          <div className="flex flex-col md:gap-3">
            <div className="flex flex-row items-center justify-between">
              <label>Phone Number</label>
              {errors.phone && (
                <p className="text-red-500 text-sm">
                  {`${errors.phone.message}`}
                </p>
              )}
            </div>
            <input
              {...register("phone", {
                required: {
                  value: true,
                  message: "Phone number is required",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be 10 digits",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Invalid phone number format",
                },
              })}
              type="number"
              inputMode="numeric"
              placeholder="e.g. +1 234 567 890"
              className="pl-4 py-3 border border-[#D6D9E6] rounded text-[#9699AA] font-medium outline-none"
            />
          </div>
          <div className="flex w-full justify-end mt-3 md:mt-20">
            <button
              onClick={handleSubmit(onSubmit)}
              className="text-white bg-[#022959] py-3 px-4 rounded text-sm font-medium leading-normal"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
