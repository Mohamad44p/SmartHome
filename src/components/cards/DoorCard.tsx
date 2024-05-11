import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/moving-border";

export default function DoorCard() {
  const handleOpenDoor = () => {
    axios.post('http://192.168.1.163:5000/open_door')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error opening door:', error);
      });
  };

  const handleCloseDoor = () => {
    axios.post('http://192.168.1.163:5000/close_door')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error closing door:', error);
      });
  };

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
          <Button className="text-white font-bold py-2 px-4 rounded" onClick={handleOpenDoor}>
            Open Door
          </Button>
          <Button className="bg-black text-white font-bold py-2 px-4 rounded" onClick={handleCloseDoor}>
            Close Door
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
