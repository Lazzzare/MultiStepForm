import { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  return (
    <div className="w-full h-screen bg-[#EFF5FF] flex flex-col md:flex-row md:justify-center md:items-center">
      <div className="flex flex-row items-start justify-start">
        <Sidebar />
        <PersonalInfo setIsFormValid={setIsFormValid} />
        <SelectPlan />
      </div>
    </div>
  );
};

export default App;
