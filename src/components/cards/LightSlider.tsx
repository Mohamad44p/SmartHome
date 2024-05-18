import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Slider } from "../ui/slider";

export default function LightSlider() {
  const [brightness, setBrightness] = useState(0);

  const handleSliderChange = (value: number[]) => {
    setBrightness(value[0]);
    fetch("http://192.168.1.163:5000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ brightness: value[0] }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Brightness set to:", data.brightness);
      })
      .catch((error) => {
        console.error("Error setting brightness:", error);
      });
  };

  return (
    <>
      <Card className="lg:h-[300px] lg:w-[650px] ">
        <CardHeader>
          <h5 className="mb-2 font-sans text-[15px] font-semibold leading-snug tracking-normal text-white antialiased">
            Light Control Increasing/Decreasing
          </h5>
          <p className="font-semibold text-muted-foreground leading-snug tracking-normal antialiased">
            Use the slider to adjust the brightness of the light.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-11 mt-10 justify-center items-center">
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="lg:w-[60%]"
              onValueChange={handleSliderChange}
            />
            <p className="text-xl">{brightness}%</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
