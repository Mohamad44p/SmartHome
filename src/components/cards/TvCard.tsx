import { useState } from "react";
import TvImage from "../../assets/TvImage.png";
import "./TvCard.css";
import axios from "axios";

export default function TvCard() {
  const [isTvOn, setisTvOn] = useState<boolean | null>(null);

  const toggleLight = async () => {
    try {
      const serverAddress = "http://192.168.1.163:5000";
      await axios.get(
        `${serverAddress}/${isTvOn ? "TvLightOn" : "TvLightOff"}`
      );
      setisTvOn(!isTvOn);
    } catch (error) {
      console.error("Error toggling light:", error);
    }
  };

  return (
    <div className="card">
      <div className="card2 flex flex-col gap-7">
        <div className="flex justify-between items-center">
          <h1 className="text-[18px] text-white font-[700]">TV Controlling</h1>
          <p className="text-muted-foreground text-sm font-semibold">
            {isTvOn ? "TV is ON" : "TV is OFF"}
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <img
              src={TvImage}
              alt="TV Image"
              className="w-20 h-20"
              loading="lazy"
            />
            <div className="checkbox-wrapper-8">
              <input
                type="checkbox"
                id="cb3-8"
                className="tgl tgl-skewed"
                checked={isTvOn ?? false}
                onChange={toggleLight}
              />
              <label
                htmlFor="cb3-8"
                data-tg-on="ON"
                data-tg-off="OFF"
                className="tgl-btn"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
