import { useState, useEffect } from "react";
import axios from "axios";
import LightOn from "../../assets/LightOn.png";
import LightOff from "../../assets/LightOff.png";

export default function LightSlider() {
  const [brightness, setBrightness] = useState(0);

  useEffect(() => {
    const serverAddress = "http://192.168.1.163:5000";

    axios
      .get(`${serverAddress}/brightness`)
      .then((response) => {
        const { brightness } = response.data;
        setBrightness(brightness);
      })
      .catch((error) => {
        console.error("Error fetching LED brightness:", error);
      });
  }, []);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newBrightness = parseInt(event.target.value);
    setBrightness(newBrightness);
    const serverAddress = "http://192.168.1.163:5000";

    axios
      .get(`${serverAddress}/update?brightness=${newBrightness}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error updating LED brightness:", error);
      });
  };

  return (
    <div className="card">
      <div className="card2 flex flex-col gap-7">
        <div className="flex justify-center items-center">
          <h1 className="text-[13px] lg:text-[15px] text-white font-[700]">
            Light intensity Control
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div>
            <img
              src={brightness > 0 ? LightOn : LightOff}
              alt="Light Bulb Image"
              className={brightness > 0 ? "w-20 h-20" : "w-20 h-20"}
              loading="lazy"
            />
          </div>
          <div className="max-w-[30em] flex items-center gap-3">
            <input
              type="range"
              value={brightness}
              onChange={handleSliderChange}
            />{" "}
            <p>{brightness}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
