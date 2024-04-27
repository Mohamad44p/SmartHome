import LightControlingKitchen from "../cards/LightControlingKitchen";
import LightSlider from "../cards/LightSlider";
import MeasurementsCard from "../cards/MeasurementsCard";

export default function Kitchen() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
      <MeasurementsCard />
      <LightControlingKitchen/>
      <LightSlider/>
    </div>
  );
}
