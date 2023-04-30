import { CiFaceSmile, CiFaceMeh, CiFaceFrown } from "react-icons/ci";
export const CardsData = [
  // vidu co 20hs, trong do 5hs kha, 11 hs TB,  4 hs Yeu
  {
    title: "Good Students",
    color: {
      backGroundColor: "rgb(0, 240, 52)",
      boxShadow: "0px 0px 10px 1px rgb(0, 240, 52)",
    },
    barValue: 25,
    value: 5,
    icon: CiFaceSmile,
    year: 2022,
    series: [
      {
        name: "Excellent Students",
        data: [8, 8.2, 9.6, 9.7, 8.4],
      },
    ],
  },
  {
    title: "Average Students",
    color: {
      backGroundColor: "rgb(255, 200, 47)",
      boxShadow: "0px 0px 10px 1px rgb(255, 200, 47)",
    },
    barValue: 51,
    value: 11,
    icon: CiFaceMeh,
    year: 2022,
    series: [
      {
        name: "Excellent Students",
        data: [6, 7, 5, 5, 6, 5, 7, 7, 6, 7, 5],
      },
    ],
  },
  {
    title: "Below Average Students",
    color: {
      backGroundColor: "rgb(255, 89, 47)",
      boxShadow: "0px 0px 10px 1px rgb(255, 89, 47)",
    },
    barValue: 20,
    value: 4,
    icon: CiFaceFrown,
    year: 2022,
    series: [
      {
        name: "Excellent Students",
        data: [3, 4, 5, 2],
      },
    ],
  },
];
