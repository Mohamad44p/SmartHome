import axios from "axios";
import { useState } from "react";
import { Card, CardHeader } from "../ui/card";

export default function RgbControling() {
  const [color, setColor] = useState({ r: 255, g: 255, b: 255 });

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hexColor = e.target.value;
    const rgbColor = hexToRgb(hexColor);
    setColor(rgbColor);
    sendColorToBackend(rgbColor);
  };

  const hexToRgb = (hex: string) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
  };

  const sendColorToBackend = (color: { r: number; g: number; b: number }) => {
    axios
      .post(`${import.meta.env.VITE_SERVER_URL}/set_color`, color)
      .then((response: { data: unknown }) => {
        console.log(response.data);
      })
      .catch((error: Error) => {
        console.error("Error sending color to backend:", error);
      });
  };

  return (
    <Card className="h-[300px]">
      <div className="card2 flex flex-col gap-7">
        <CardHeader className="flex justify-center items-center">
          <h1 className="text-[14px] text-white font-[700]">
            Light Controling RGB
          </h1>
        </CardHeader>
        <p className="text-muted-foreground text-[12px] text-center font-semibold">
          RGB Color: {`rgb(${color.r}, ${color.g}, ${color.b})`}
        </p>
        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="checkbox-wrapper-8">
              <input
                type="color"
                className="ColorPicker"
                onChange={handleChangeColor}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
