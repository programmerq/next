import aleksandrKlizhentas from "./crew/aleksandr_klizhentas.jpg";
import alexWolfe from "./crew/alex_wolfe.jpg";
import alexWolfe2 from "./crew/alex_wolfe_2.jpg";
import alexandraPatane from "./crew/alexandra_patane.jpg";
import alexandraPatane2 from "./crew/alexandra_patane_2.jpg";
import andrewLytvynov from "./crew/andrew_lytvynov.jpg";
import annaRadchenko from "./crew/anna_radchenko.jpg";
import annaRadchenko2 from "./crew/anna_radchenko_2.jpg";
import bardiaShahali from "./crew/bardia_shahali.jpg";
import euguenyKontsevoy from "./crew/eugueny_kontsevoy.jpg";
import joshuaSmith from "./crew/joshua_smith.jpg";
import kafiPayne from "./crew/kafi_payne.jpg";
import kafiPayne2 from "./crew/kafi_payne_2.jpg";
import pierreBeaucamp from "./crew/pierre_beaucamp.jpg";
import taylorWakefield from "./crew/taylor_wakefield.jpg";
import taylorWakefield2 from "./crew/taylor_wakefield_2.jpg";
import { ImageProps } from "next/image";

type NextImageData = Exclude<ImageProps["src"], string>;

interface Member {
  firstName: string;
  lastName: string;
  role: string;
  photos: NextImageData[];
}

const crew: Member[] = [
  {
    firstName: "Aleksandr",
    lastName: "Klizhentas",
    role: "CTO",
    photos: [aleksandrKlizhentas],
  },
  {
    firstName: "Anna",
    lastName: "Radchenko",
    role: "Designer",
    photos: [annaRadchenko, annaRadchenko2],
  },
  {
    firstName: "Alex",
    lastName: "Wolfe",
    role: "VP of UX and Design",
    photos: [alexWolfe, alexWolfe2],
  },
  {
    firstName: "Alexandra",
    lastName: "Patane",
    role: "Mid market Account Executive",
    photos: [alexandraPatane, alexandraPatane2],
  },
  {
    firstName: "Andrew",
    lastName: "Lytvynov",
    role: "Software Engineer",
    photos: [andrewLytvynov],
  },
  {
    firstName: "Bardia",
    lastName: "Shahali",
    role: "VP of Sales",
    photos: [bardiaShahali],
  },
  {
    firstName: "Ev",
    lastName: "Kontsevoy",
    role: "CEO",
    photos: [euguenyKontsevoy],
  },
  {
    firstName: "Joshua",
    lastName: "Smith",
    role: "Enterprise Account Executive",
    photos: [joshuaSmith],
  },
  {
    firstName: "Kafi",
    lastName: "Payne",
    role: "HR Director",
    photos: [kafiPayne, kafiPayne2],
  },
  {
    firstName: "Pierre",
    lastName: "Beaucamp",
    role: "Software Engineer",
    photos: [pierreBeaucamp],
  },
  {
    firstName: "Taylor",
    lastName: "Wakefield",
    role: "COO",
    photos: [taylorWakefield, taylorWakefield2],
  },
];

export default crew;
