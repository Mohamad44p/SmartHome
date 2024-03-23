import LightControlingCard from "./LightControlingCard";
import MeasurementsCard from "./MeasurementsCard";

export default function LivingRoom() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5">
      <MeasurementsCard/>
      <LightControlingCard/>
      <MeasurementsCard/>
      <MeasurementsCard/>
    </div>
  )
}
