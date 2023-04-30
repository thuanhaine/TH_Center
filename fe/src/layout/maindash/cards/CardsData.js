import { CiFaceSmile, CiFaceMeh, CiFaceFrown } from "react-icons/ci";
export const CardsData = [
  // vidu co 20hs, trong do 5hs kha, 11 hs TB,  4 hs Yeu
  {
    title: "Good",
    color: {
      backGroundColor: "rgb(110 255 142)",
      boxShadow: "0px 0px 10px 1px rgb(110 255 142)",
    },
    barValue: 25,
    value: 5,
    icon: CiFaceSmile,
    time: "In the last course",
    series: [
      {
        name: "Excellent Students",
        data: [8, 8.2, 9.6, 9.7, 8.4],
      },
    ],
  },
  {
    title: "Average",
    color: {
      backGroundColor: "rgb(255 212 92)",
      boxShadow: "0px 0px 10px 1px rgb(255, 200, 47)",
    },
    barValue: 51,
    value: 11,
    icon: CiFaceMeh,
    time: "In the last course",
    series: [
      {
        name: "Excellent Students",
        data: [6, 7, 5, 5, 6, 5, 7, 7, 6, 7, 5],
      },
    ],
  },
  {
    title: "Bad",
    color: {
      backGroundColor: "rgb(255 130 98",
      boxShadow: "0px 0px 10px 1px rgb(255, 89, 47)",
    },
    barValue: 20,
    value: 4,
    icon: CiFaceFrown,
    time: "In the last course",
    series: [
      {
        name: "Excellent Students",
        data: [3, 4, 5, 2],
      },
    ],
  },
];
