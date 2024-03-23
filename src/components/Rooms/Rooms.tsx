import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import BedRoom from "./BedRoom";
import Garage from "./Garage";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

export default function Rooms() {
  return (
    <div>
      <div className="w-full mx-auto flex justify-center items-center mt-24">
        <Tabs defaultValue="LivingRoom" className="lg:w-[600px] w-[300px]">
          <HoverBorderGradient>
            <TabsList className="grid w-full grid-cols-4 bg-black">
              <TabsTrigger
                className="text-[10px] lg:text-[15px] mr-2 lg:mr-0"
                value="LivingRoom"
              >
                Living Room
              </TabsTrigger>
              <TabsTrigger
                className="text-[10px] lg:text-[15px] mr-2 lg:mr-0"
                value="BedRoom"
              >
                Bed Room
              </TabsTrigger>
              <TabsTrigger
                className="text-[10px] lg:text-[15px] mr-2 lg:mr-0"
                value="Kitchen"
              >
                Kitchen
              </TabsTrigger>
              <TabsTrigger
                className="text-[10px] lg:text-[15px] mr-2 lg:mr-0"
                value="Garage"
              >
                Garage
              </TabsTrigger>
            </TabsList>
          </HoverBorderGradient>
          <TabsContent value="LivingRoom">
            <Card>
              <CardHeader>
                <CardTitle>Living Room</CardTitle>
                <CardDescription>Make changes to Living Room.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <LivingRoom />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="BedRoom">
            <Card>
              <CardHeader>
                <CardTitle>Bed Room</CardTitle>
                <CardDescription>
                  Make changes to your Bed Room.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <BedRoom />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Kitchen">
            <Card>
              <CardHeader>
                <CardTitle>Kitchen</CardTitle>
                <CardDescription>Make changes to your Kitchen.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Kitchen />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Garage">
            <Card>
              <CardHeader>
                <CardTitle>Garage</CardTitle>
                <CardDescription>Make changes to your Garage.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Garage />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
