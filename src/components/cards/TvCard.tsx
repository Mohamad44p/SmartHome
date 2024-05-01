import { useState } from "react";
import TvImage from "../../assets/TvImage.png";
import "./TvCard.css";
import axios from "axios";
import { Card, CardHeader } from "../ui/card";

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
    <Card className="h-[300px]">
      <div className="card2 flex flex-col gap-7">
        <CardHeader className="flex justify-evenly items-center">
          <h1 className="text-[13px] lg:text-[15px] text-white font-[700]">
            TV Controlling
          </h1>
          <p className="text-muted-foreground text-[10px] lg:text-[12px] font-semibold">
            {isTvOn ? "TV is ON" : "TV is OFF"}
          </p>
        </CardHeader>
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
    </Card>
  );
}
