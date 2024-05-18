import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Slider } from "../ui/slider";

export default function LightSlider() {
  const [state, setState] = useState();

  useEffect(() => {
    setState;
  }, []);

  console.log(state);

  return (
    <>
      <Card className="lg:h-[300px] lg:w-[650px] ">
        <CardHeader>
          <h5 className="mb-2 font-sans text-[15px] font-semibold leading-snug tracking-normal text-white antialiased">
            Light Control Increasing/Decreasing
          </h5>
          <p className="font-semibold text-muted-foreground leading-snug tracking-normal  antialiased">
            Use the 3 Buttons to increase or decrease the light in the room, If
            you want to turn on One Light, press the first button 30%
            brightness, for the second button 60% brightness and for the third
            button 100% brightness.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-11 mt-10 justify-center items-center">
            <Slider defaultValue={[0]} max={100} step={1} className="lg:w-[60%]"/>
            <p className="text-xl">100%</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
