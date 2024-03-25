import { Link } from "react-router-dom";
import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "../ui/button";

export function HomePage() {
  return (
    <>
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
            Welcome to Your <br /> Smart Home
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Smart Home system, where convenience meets security. Our smart home
            solutions provide you with control over your home's lighting,
            temperature, security, and more, all from the palm of your hand.
            Experience the future of home automation with us.
          </p>
          <Link to="/Rooms">
            <Button className="rounded-lg border hover:bg-slate-800 text-white border-neutral-800 focus:ring-2 focus:ring-teal-50 w-full relative z-10 mt-4 bg-neutral-950">
              Get Started
            </Button>
          </Link>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
