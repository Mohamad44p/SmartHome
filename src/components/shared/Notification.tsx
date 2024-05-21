import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => {
  const [, setSensorData] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await fetch("http://192.168.1.163:5000/ir-sensor");
        const data = await response.json();
        setSensorData(data.ir_value);

        if (data.ir_value === "car in garag") {
          toast.info("Car is in the garage");
        } else {
          toast.info("Car is out of the garage");
        }
      } catch (error) {
        console.error("Error fetching sensor data:", error);
      }
    };

    fetchSensorData();
    const interval = setInterval(fetchSensorData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Notification;
