import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function MeasurementsCard() {
  const [sensorData, setSensorData] = useState<{
    temperature: number | null;
    humidity: number | null;
  }>({
    temperature: null,
    humidity: null,
  });

  useEffect(() => {
    const fetchData = () => {
      fetch(`${import.meta.env.VITE_SERVER_URL}/read-sensor`)
        .then((response) => response.json())
        .then((data) => setSensorData(data))
        .catch((error) => console.error("Error fetching sensor data:", error));
    };

    fetchData();

    const intervalId = setInterval(fetchData, 10000);

    return () => clearInterval(intervalId);
  }, []);
  const date = new Date().toLocaleDateString("en-US").split("/").join("-");

  useEffect(() => {
    if (sensorData.temperature && sensorData.temperature > 35) {
      toast.error("Warning: Fire in the house");
    }
  }, [sensorData]);

  return (
    <Card className="lg:w-[300px] aspect-video rounded-lg shadow flex flex-col items-center justify-center gap-2  group">
      <div className="flex flex-col items-center p-8 rounded-md w-full sm:px-12  text-gray-100">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Hebron | Palstine</h2>
          <p className="text-sm text-gray-400">{date.toString()}</p>
        </div>
        <svg
          className="w-32 h-32 p-6 text-yellow-400 fill-current animate-[spin_5s_linear_infinite;]"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
          <rect
            className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            y="16"
            x="240"
            height="48"
            width="32"
          ></rect>
          <rect
            className="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            y="448"
            x="240"
            height="48"
            width="32"
          ></rect>
          <rect
            className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            y="240"
            x="448"
            height="32"
            width="48"
          ></rect>
          <rect
            className="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            y="240"
            x="16"
            height="32"
            width="48"
          ></rect>
          <rect
            className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            transform="rotate(-45 416 416)"
            y="393.373"
            x="400"
            height="45.255"
            width="32"
          ></rect>
          <rect
            className="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            transform="rotate(-45 96 96)"
            y="73.373"
            x="80"
            height="45.255"
            width="32.001"
          ></rect>
          <rect
            className="animate-[pulse_1s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            transform="rotate(-45.001 96.002 416.003)"
            y="400"
            x="73.373"
            height="32"
            width="45.255"
          ></rect>
          <rect
            className="animate-[pulse_2s_cubic-bezier(0.4,_0,_0.6,_1)_infinite;]"
            transform="rotate(-45 416 96)"
            y="80"
            x="393.373"
            height="32.001"
            width="45.255"
          ></rect>
        </svg>
        <div className="mb-2 lg:text-xl font-semibold">
          <p className="flex md:flex-row flex-col justify-between items-center md:gap-7 gap-y-2">
            {" "}
            <span>Tempter :</span>
            <span className="mx-1 font-normal">
              {sensorData.temperature?.toString() ?? "27°"}
            </span>
          </p>
          <p className="flex md:flex-row flex-col justify-between items-center md:gap-7 gap-y-2">
            {" "}
            <span>Humanity :</span>
            <span className="mx-1 font-normal">
              {sensorData.humidity?.toString() ?? "27%"}
            </span>
          </p>
        </div>
      </div>
      <ToastContainer />
    </Card>
  );
}
