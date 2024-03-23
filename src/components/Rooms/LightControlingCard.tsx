import { Lightbulb } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import "../cards/Lightingcontroll.css";

export default function LightControlingCard() {
  const [isLightOn, setIsLightOn] = useState(false);

  const toggleLight = async () => {
    try {
      if (isLightOn) {
        await axios.get("/off2");
      } else {
        await axios.get("/on2");
      }
      setIsLightOn(!isLightOn);
    } catch (error) {
      console.error("Error toggling light:", error);
    }
  };

  return (
    <div className="card">
      <div className="card2 flex flex-col gap-7">
        <div className="flex justify-between items-center">
          <Lightbulb size={20} color={isLightOn ? "yellow" : "gray"} />
          <h1 className="text-[18px] text-white font-[700]">
            Light Controling
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="font-medium font-mono text-[15px] text-muted-foreground">
            {isLightOn ? "Light is ON" : "Light is OFF"}
          </h1>
          <label className="switch">
            <input
              checked={isLightOn}
              onChange={toggleLight}
              type="checkbox"
              className="toggle"
            />
            <span className="slider"></span>
            <span className="card-side"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
