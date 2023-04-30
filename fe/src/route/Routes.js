import { Login, Register } from "../components/Components";
import DefaultLayout from "../layout/DefaultLayout";
const Unknow_User = [
  { path: "/", component: Login },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];
const Student_User = [
  { path: "/", component: Login, layout: DefaultLayout },
  { path: "/register", component: Register, layout: DefaultLayout },
];

const Teacher_User = [];

const Amin_User = [];

export { Unknow_User, Student_User, Teacher_User, Amin_User };
