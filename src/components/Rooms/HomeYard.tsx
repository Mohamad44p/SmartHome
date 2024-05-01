import CamaraCard from "../cards/CamaraCard";
import DoorCard from "../cards/DoorCard";

export default function HomeYard() {
  return (
    <div className="grid grid-cols-1 justify-center items-center gap-5">
      <CamaraCard/>
      <DoorCard/>
    </div>
  )
}
