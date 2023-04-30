import { GrScorecard, GrAppsRounded } from "react-icons/gr";
import { BiUserPin, BiHome } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";

const DataSidebar_Admin = [
  { icon: <GrAppsRounded />, title: "Dashboard" },
  { icon: <BiUserPin />, title: "Profile" },
  { icon: <AiOutlineSchedule />, title: "Schedule" },
  { icon: <BiHome />, title: "Class" },
  { icon: <FaUserGraduate />, title: "Teacher" },
  { icon: <HiOutlineUserGroup />, title: "Student" },
];
const DataSidebar_Teacher = [
  { icon: <GrAppsRounded />, title: "Dashboard" },
  { icon: <BiUserPin />, title: "Profile" },
  { icon: <AiOutlineSchedule />, title: "Schedule" },
  { icon: <BiHome />, title: "Class" },
];

const DataSidebar_Student = [
  { icon: <GrAppsRounded />, title: "Dashboard" },
  { icon: <BiUserPin />, title: "Profile" },
  { icon: <AiOutlineSchedule />, title: "Schedule" },
  { icon: <GrScorecard />, title: "Score" },
];

export { DataSidebar_Admin, DataSidebar_Teacher, DataSidebar_Student };
