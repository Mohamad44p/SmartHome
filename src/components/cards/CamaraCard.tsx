import { Disc2 } from "lucide-react";
import CamaraPlacholder from "../../assets/CamaraPlacholder.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CamaraCard() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [cameraStatus, setCameraStatus] = useState<boolean | null>(null);

  useEffect(() => {
    const loadCameraFeed = async () => {
      try {
        const serverAddress = "http://192.168.1.163:5000";
        const response = await axios.get(`${serverAddress}/video_feed`);
        if (response.data) {
          setVideoSrc(response.data);
          setCameraStatus(true);
        } else {
          setCameraStatus(false);
        }
      } catch (error) {
        console.error("Error loading camera feed:", error);
        setCameraStatus(false);
      }
    };

    loadCameraFeed();
  }, []);

  return (
    <div className="my-16">
      <div className="relative flex md:w-[560px] flex-col rounded-xl bg-[#1a1a1a] bg-clip-border shadow-md">
        <div className="relative md:w-full -mt-6 lg:h-96 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          {cameraStatus === true ? (
            <video
              className="w-full h-full object-cover"
              src={videoSrc ?? ""}
              autoPlay
              controls
            ></video>
          ) : (
            <img
              src={CamaraPlacholder}
              alt="Camera Placeholder"
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="p-6">
          <h5 className="flex gap-4 mb-2 font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
            Camera Current Status{" "}
            {cameraStatus === true ? (
              <span className="text-green-400 flex items-center gap-1">
                <Disc2 size={20} /> On
              </span>
            ) : (
              <span className="text-red-400 flex items-center gap-1">
                <Disc2 size={20} /> Off
              </span>
            )}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-white antialiased">
            Easy to control your camera from anywhere in the world.
          </p>
        </div>
      </div>
    </div>
  );
}
