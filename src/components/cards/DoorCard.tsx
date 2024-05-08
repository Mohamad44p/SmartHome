import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/moving-border";

export default function DoorCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Door</CardTitle>
        <CardDescription>
          Make changes to your Door Open or Close.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-5">
          <Button className="text-white font-bold py-2 px-4 rounded">
            Open Door
          </Button>
          <Button className="bg-black text-white font-bold py-2 px-4 rounded">
            Close Door
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
