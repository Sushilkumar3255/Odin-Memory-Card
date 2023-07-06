import Pikachu from "./img/pikachu.jpg";
import Mewtwo from "./img/Mewtwo.jpeg";
import Lucario from "./img/Lucario.jpg";
import Gangar from "./img/Gangar.jpg";
import Squirtel from "./img/Squirtel.jpg";
import bulbasour from "./img/bulbasour.jpg";

type Character = {
    id?: number;
    image: string;
    name: string;
};

export const characters: Character[] = [
    {
        id: 1,
        name: "Pikachu",
        image: Pikachu,
      },
      {
        id: 2,
        name: "Mewtwo",
        image: Mewtwo,
      },
      {
        id: 3,
        name: "Lucario",
        image: Lucario,
      },
      {
        id: 4,
        name: "Gangar",
        image: Gangar,
      },
      {
        id: 5,
        name: "Squirtel",
        image: Squirtel,
      },
      {
        id: 6,
        name: "bulbasour",
        image: bulbasour,
      },
];
