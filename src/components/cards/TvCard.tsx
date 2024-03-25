import { useState } from "react";
import TvImage from "../../assets/TvImage.png";
import "./TvCard.css";

export default function TvCard() {
  const [TvisOn, setTvisOn] = useState(false);

  const handleTurnOn = () => {
    setTvisOn(!TvisOn);
  };

  return (
    <div className="card">
      <div className="card2 flex flex-col gap-7">
        <div className="flex justify-between items-center">
          <h1 className="text-[18px] text-white font-[700]">TV Controlling</h1>
          <p className="text-muted-foreground text-sm font-semibold">
            {TvisOn ? "TV is ON" : "TV is OFF"}
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
                checked={TvisOn}
                onChange={handleTurnOn}
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
