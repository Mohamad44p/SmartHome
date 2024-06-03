import { Lightbulb } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import "./switch.css";

export default function LightControlingCard() {
  const [isLightOn, setIsLightOn] = useState<boolean | null>(null);
  const toggleLight = async () => {
    try {
      await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/${isLightOn ? "ledvoff" : "ledvon"}`
      );
      setIsLightOn(!isLightOn);
    } catch (error) {
      console.error("Error toggling light:", error);
    }
  };

  return (
    <Card className="h-[300px]">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <Lightbulb size={20} color={isLightOn ? "yellow" : "white"} />
          <h1 className="text-[15px] text-white font-[700]">
            Light Controling
          </h1>
        </CardTitle>
        <CardContent>
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="font-medium font-mono text-xl mt-14 text-muted-foreground">
              {isLightOn ? "Light is ON" : "Light is OFF"}
            </h1>
            <label className="switch-button" htmlFor="switch">
              <div className="switch-outer">
                <input
                  id="switch"
                  type="checkbox"
                  checked={isLightOn ?? false}
                  onChange={toggleLight}
                />
                <div className="button">
                  <span className="button-toggle"></span>
                  <span className="button-indicator"></span>
                </div>
              </div>
            </label>
          </div>
        </CardContent>
      </CardHeader>
    </Card>
  );
}
