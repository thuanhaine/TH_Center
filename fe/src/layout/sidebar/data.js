import { GrScorecard, GrAppsRounded } from "react-icons/gr";
import { BiUserPin, BiHome } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";

const DataSidebar_Admin = [
  { path: "/", icon: <GrAppsRounded />, title: "Dashboard" },
  { path: "/profile", icon: <BiUserPin />, title: "Profile" },
  { path: "/schedule", icon: <AiOutlineSchedule />, title: "Schedule" },
  { path: "/class", icon: <BiHome />, title: "Class" },
  { path: "/teacher", icon: <FaUserGraduate />, title: "Teacher" },
  { path: "/student", icon: <HiOutlineUserGroup />, title: "Student" },
];
const DataSidebar_Teacher = [
  { path: "/", icon: <GrAppsRounded />, title: "Dashboard" },
  { path: "/profile", icon: <BiUserPin />, title: "Profile" },
  { path: "/schedule", icon: <AiOutlineSchedule />, title: "Schedule" },
  { path: "/class", icon: <BiHome />, title: "Class" },
];

const DataSidebar_Student = [
  { path: "/profile", icon: <BiUserPin />, title: "Profile" },
  { path: "/schedule", icon: <AiOutlineSchedule />, title: "Schedule" },
  { path: "/class", icon: <BiHome />, title: "Class" },
];

export { DataSidebar_Admin, DataSidebar_Teacher, DataSidebar_Student };
