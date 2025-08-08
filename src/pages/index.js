import { useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    document.documentElement.classList.toggle("light", isDarkMode);
  };

  return (
    <div className="min-h-screen p-5 bg-backgroundPrimary" >
      <div className="flex justify-end mb-5">
        <button
          onClick={handleToggle}
          className="bg-backgroundSecondary rounded-lg border-borderPrimary border-2 p-2 text-primary font-medium"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className=" border-borderPrimary border-2 p-2 w-1/4 mx-auto bg-backgroundSecondary rounded-lg h-64 text-secondary font-bold flex justify-center items-center"> 
      NEXT APP
      </div>
    </div>
  );
}
