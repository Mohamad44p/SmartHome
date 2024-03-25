import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/tracing-beam";
import HomeImage1 from "../../assets/HomeImage1.jpg";
import HomeImage2 from "../../assets/HomeImage2.jpg";
import HomeImage3 from "../../assets/HomeImage3.jpg";
import HomeImage4 from "../../assets/HomeImage4.jpg";
import HomeImage5 from "../../assets/HomeImage5.jpg";
import { Skeleton } from "../ui/skeleton";

export function Service() {
  const [loaded, setLoaded] = useState(Array(dummyContent.length).fill(false));

  const handleImageLoad = (index: number) => {
    setLoaded((prevLoaded) => {
      const newLoaded = [...prevLoaded];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert relative">
              {!loaded[index] && (
                <div className="skeleton-wrapper absolute inset-0 rounded-lg overflow-hidden">
                  <Skeleton className="skeleton-bg w-full h-full animate-pulse" />
                </div>
              )}
              {item.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  className={`rounded-lg mb-10 object-cover ${
                    loaded[index] ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  style={{ width: "100%", height: "auto" }}
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Light Intensity Control",
    description: (
      <>
        <p>
          This feature allows users to control the intensity of the lights in
          their home remotely. Whether it's dimming the lights for a cozy
          atmosphere or brightening them for better visibility, users have full
          control at their fingertips.
        </p>
      </>
    ),
    badge: "Light Control",
    image: HomeImage1,
  },
  {
    title: "TV Control",
    description: (
      <>
        <p>
          With this feature, users can remotely control their TVs from anywhere.
          Whether it's changing channels, adjusting volume, or even turning the
          TV on or off, users can manage their entertainment seamlessly.
        </p>
      </>
    ),
    badge: "TV Control",
    image: HomeImage2,
  },
  {
    title: "Live Camera Access",
    description: (
      <>
        <p>
          This functionality allows users to access live camera feeds from their
          home remotely. Whether it's checking in on pets, monitoring for
          security purposes, or simply keeping an eye on their surroundings,
          users can view live footage from anywhere with an internet connection.
        </p>
      </>
    ),
    badge: "Camera Access",
    image: HomeImage3,
  },
  {
    title: "Humidity and Temperature Monitoring",
    description: (
      <>
        <p>
          This feature enables users to monitor humidity and temperature levels
          in each room of their home remotely. With real-time updates, users can
          ensure optimal comfort and adjust settings as needed for energy
          efficiency and personal preference.
        </p>
      </>
    ),
    badge: "Climate Control",
    image: HomeImage4,
  },
  {
    title: "Door Control",
    description: (
      <>
        <p>
          This feature allows users to remotely control the doors of their home.
          Whether it's unlocking the front door for a guest or ensuring all
          doors are securely locked while away, users have peace of mind and
          convenience at their fingertips.
        </p>
      </>
    ),
    badge: "Door Control",
    image: HomeImage5,
  },
];
