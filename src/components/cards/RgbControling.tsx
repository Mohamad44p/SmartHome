import { useState } from "react";

export default function RgbControling() {
  const [color, setColor] = useState({ r: 255, g: 255, b: 255 });

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hexColor = e.target.value;
    const rgbColor = hexToRgb(hexColor);
    setColor(rgbColor);
    console.log(rgbColor);
  };

  const hexToRgb = (hex: string) => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
  };

  return (
    <div className="card">
      <div className="card2 flex flex-col gap-7">
        <div className="flex justify-between items-center">
          <h1 className="text-[18px] text-white font-[700]">
            Light Controling RGB
          </h1>
        </div>
        <p className="text-muted-foreground text-sm font-semibold">
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
    </div>
  );
}
