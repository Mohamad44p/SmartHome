import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import HomeYard from "./HomeYard";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

export default function Rooms() {
  return (
    <div>
      <div className="w-full mx-auto flex justify-center items-center mt-24">
        <Tabs defaultValue="LivingRoom" className="md:w-[700px] w-[250px]">
          <HoverBorderGradient>
            <TabsList className="grid w-full grid-cols-3 bg-black">
              <TabsTrigger
                className="text-[10px] md:text-[15px] mr-2 lg:mr-0"
                value="LivingRoom"
              >
                Living Room
              </TabsTrigger>
              <TabsTrigger
                className="text-[10px] md:text-[15px] mr-2 lg:mr-0"
                value="Kitchen"
              >
                Kitchen
              </TabsTrigger>
              <TabsTrigger
                className="text-[10px] md:text-[15px] mr-2 lg:mr-0"
                value="HomeYard"
              >
                Home yard
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
          <TabsContent value="HomeYard">
            <Card>
              <CardHeader>
                <CardTitle>Home Yard</CardTitle>
                <CardDescription>
                  Control your Doors and See your camera Live.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <HomeYard />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
