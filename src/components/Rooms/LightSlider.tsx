import { useState } from "react";
import axios from "axios";

export default function LightSlider() {
  const [sliderValue, setSliderValue] = useState<number>(0);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
    const brightness = Math.round((newValue / 100) * 255);
    const serverAddress = "http://192.168.1.163:5000";
    axios
      .post(`${serverAddress}/update`, { brightness })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error updating brightness:", error);
      });
  };

  return (
    <div className="card">
      <div className="card2 flex flex-col gap-7">
        <div className="flex justify-between items-center">
          <h1 className="text-[18px] text-white font-[700]"></h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="font-medium font-mono text-[15px] text-muted-foreground">
            Light Slider Control
          </h1>
          <div className="max-w-[30em] flex items-center gap-3">
            <input
              type="range"
              value={sliderValue}
              onChange={handleSliderChange}
            />{" "}
            <p>{sliderValue}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
