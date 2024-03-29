import LightControlingCard from "../cards/LightControlingCard";
import LightSlider from "../cards/LightSlider";
import MeasurementsCard from "../cards/MeasurementsCard";
import RgbControling from "../cards/RgbControling";
import TvCard from "../cards/TvCard";

export default function LivingRoom() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
      <MeasurementsCard/>
      <LightControlingCard/>
      <LightSlider/>
      <TvCard/>
      <RgbControling/>
    </div>
  )
}
