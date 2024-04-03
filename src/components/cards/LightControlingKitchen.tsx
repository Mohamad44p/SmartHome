import { Lightbulb } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import "../cards/Lightingcontroll.css";

export default function LightControlingKitchen() {
  const [isLightOn, setIsLightOn] = useState<boolean | null>(null);
  const toggleLight = async () => {
    try {
      const serverAddress = "http://192.168.1.163:5000";
      await axios.get(`${serverAddress}/${isLightOn ? "off2" : "on2"}`);
      setIsLightOn(!isLightOn);
    } catch (error) {
      console.error("Error toggling light:", error);
    }
  };

  return (
    <div className="card">
      <div className="card2 flex flex-col gap-7">
        <div className="flex justify-evenly items-center">
          <Lightbulb  size={20} color={isLightOn ? "yellow" : "white"} />
          <h1 className="text-[15px] text-white font-[700]">
            Light Controling
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="font-medium font-mono text-[15px] text-muted-foreground">
            {isLightOn ? "Light is ON" : "Light is OFF"}
          </h1>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isLightOn ?? false}
              onChange={toggleLight}
              value="light"
              className="sr-only  peer"
            />
            <div className="group peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-300 w-24 h-12  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️']  after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-10 after:w-10 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-12 peer-checked:after:content-['✔️'] peer-hover:after:scale-95"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
