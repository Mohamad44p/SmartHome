import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

export default function LightSlider() {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <Card className="lg:h-[300px] lg:w-[650px] ">
        <CardHeader>
          <h5 className="mb-2 font-sans text-[15px] font-semibold leading-snug tracking-normal text-white antialiased">
            Light Control Increasing/Decreasing
          </h5>
          <p className="font-semibold text-muted-foreground leading-snug tracking-normal  antialiased">
            Use the 3 Buttons to increase or decrease the light in the room,
            If you want to turn on One Light, press the first button 30%
            brightness, for the second button 60% brightness and for the third
            button 100% brightness.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex gap-11 mt-10 justify-center items-center">
            <Button>
              30%
            </Button>
            <Button >
              60%
            </Button>
            <Button>
              100%
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
