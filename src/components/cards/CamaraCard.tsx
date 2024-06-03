import HomeImage1 from "../../../public/LogoSmarthome.png";

export default function CamaraCard() {
  return (
    <div className="my-16">
      <div className="relative flex md:w-[560px] flex-col rounded-xl bg-[#1a1a1a] bg-clip-border shadow-md">
        <div className="relative md:w-full -mt-6 lg:h-96 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <div>
            <h1 className="lg:text-xl font-bold pb-8">Live Video Feed</h1>
            <img
              id="bg"
              src={`${import.meta.env.VITE_SERVER_URL}/videofeed` || HomeImage1}
              alt="Camera Feed"
            />
          </div>
        </div>
        <div className="p-6">
          <p className="block font-sans text-base font-light leading-relaxed text-white antialiased">
            Easy to control your camera from anywhere in the world.
          </p>
        </div>
      </div>
    </div>
  );
}
