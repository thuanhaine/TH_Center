import { Login, Register } from "../components/Components";
import {
  DefaultLayout,
  Profile,
  Maindash,
  Class,
  Schedule,
  Teacher,
  Student,
  Request,
} from "../layout/Layout";
const Unknow_User = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];
const Student_User = [
  { path: "/", component: Maindash, layout: DefaultLayout },
  { path: "/register", component: Register, layout: DefaultLayout },
  { path: "/profile", component: Profile, layout: DefaultLayout },
  { path: "/class", component: Class, layout: DefaultLayout },
  { path: "/schedule", component: Schedule, layout: DefaultLayout },
  { path: "/teacher", component: Teacher, layout: DefaultLayout },
  { path: "/student", component: Student, layout: DefaultLayout },
];

const Teacher_User = [
  { path: "/", component: Maindash, layout: DefaultLayout },
  { path: "/register", component: Register, layout: DefaultLayout },
  { path: "/profile", component: Profile, layout: DefaultLayout },
  { path: "/class", component: Class, layout: DefaultLayout },
  { path: "/schedule", component: Schedule, layout: DefaultLayout },
];

const Amin_User = [
  { path: "/", component: Maindash, layout: DefaultLayout },
  { path: "/register", component: Register, layout: DefaultLayout },
  { path: "/profile", component: Profile, layout: DefaultLayout },
  { path: "/class", component: Class, layout: DefaultLayout },
  { path: "/schedule", component: Schedule, layout: DefaultLayout },
  { path: "/teacher", component: Teacher, layout: DefaultLayout },
  { path: "/student", component: Student, layout: DefaultLayout },
  { path: "/request", component: Request, layout: DefaultLayout },
];

export { Unknow_User, Student_User, Teacher_User, Amin_User };
