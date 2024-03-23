import { Link } from "react-router-dom";
import UserImage from "../../assets/UserImage.jpg";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="w-full flex justify-around items-center my-3">
        <Link to="/">
          <h1 className="text-3xl font-mono p-shadow  shadow-blue-300 font-bold">
            Smart Home
          </h1>
        </Link>

        <div className="hidden md:flex justify-center items-center">
          <div className="flex w-[500px] h-[40px] items-center justify-around rounded-md shadow-2xl">
            <Link to="/">
              <button className="outline-0 font-mono font-bold hover:scale-125 text-gray-300 hover:text-white duration-700 text-[22px] border-none h-[40px] rounded-full bg-transparent flex items-center justify-center text-primary transition-all ease-in-out cursor-pointer">
                Home
              </button>
            </Link>
            <Link to="/about">
              <button className="outline-0 font-mono font-bold hover:scale-125 text-gray-300 hover:text-white duration-700 text-[22px] border-none h-[40px] rounded-full bg-transparent flex items-center justify-center text-primary transition-all ease-in-out cursor-pointer">
                About
              </button>
            </Link>
            <Link to="/Services">
              <button className="outline-0 font-mono font-bold hover:scale-125 text-gray-300 hover:text-white duration-700 text-[22px] border-none h-[40px] rounded-full bg-transparent flex items-center justify-center text-primary transition-all ease-in-out cursor-pointer">
                Services
              </button>
            </Link>
            <Link to="/Rooms">
              <button className="outline-0 font-mono font-bold hover:scale-125 text-gray-300 hover:text-white duration-700 text-[22px] border-none h-[40px] rounded-full bg-transparent flex items-center justify-center text-primary transition-all ease-in-out cursor-pointer">
                Rooms
              </button>
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center">
          <img
            src={UserImage}
            alt="User Image"
            className="w-10 h-10 rounded-full"
          />
        </div>

        <div className="md:hidden flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                <MenuIcon className="h-6 w-6 lg:w-5 lg:h-5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <div className="flex flex-col items-center justify-center gap-4">
                <Link to="/" className="w-full">
                  <Button
                    variant={"outline"}
                    className="w-full rounded-full flex justify-center items-center gap-3"
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/about" className="w-full">
                  <Button
                    variant={"outline"}
                    className="w-full rounded-full flex justify-center items-center gap-3"
                  >
                    About
                  </Button>
                </Link>
                <Link to="/Services" className="w-full">
                  <Button
                    variant={"outline"}
                    className="w-full rounded-full flex justify-center items-center gap-3"
                  >
                    Services
                  </Button>
                </Link>
                <Link to="/Rooms" className="w-full">
                  <Button
                    variant={"outline"}
                    className="w-full rounded-full flex justify-center items-center gap-3"
                  >
                    Rooms
                  </Button>
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="border-b-[1px] border-primary/60 my-4"></div>
    </nav>
  );
}
