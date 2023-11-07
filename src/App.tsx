import PersonalInfo from "./components/PersonalInfo";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="w-full h-screen bg-[#EFF5FF] flex flex-col md:flex-row md:justify-center md:items-center">
      <div className="flex flex-row items-start justify-start">
        <Sidebar />
        <PersonalInfo />
      </div>
    </div>
  );
};

export default App;
