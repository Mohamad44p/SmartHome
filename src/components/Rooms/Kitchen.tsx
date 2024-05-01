import LightControlingKitchen from "../cards/LightControlingKitchen";
import LightSlider from "../cards/LightSlider";
import MeasurementsCard from "../cards/MeasurementsCard";

export default function Kitchen() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10">
      <MeasurementsCard />
      <LightControlingKitchen />
      <LightSlider />
    </div>
  );
}
