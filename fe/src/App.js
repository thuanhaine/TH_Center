import { Fragment, useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import { Login } from "./components/Components";
import {
  Unknow_User,
  Student_User,
  Teacher_User,
  Amin_User,
} from "./route/Routes";
import { Routes, Route } from "react-router-dom";
function App() {
  const [isLogin, setIsLogin] = useState(true);
  return isLogin ? (
    <Routes>
      {Student_User.map((route, index) => {
        let Layout = DefaultLayout;
        if (route.layout === null) {
          Layout = Fragment;
        } else if (route.layout) {
          Layout = route.layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout Page={route.component} />}
            />
          );
        }
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />;
      })}
    </Routes>
  ) : (
    <Routes>
      {Unknow_User.map((route, index) => {
        let Layout = DefaultLayout;
        if (route.layout === null) {
          Layout = Fragment;
        } else if (route.layout) {
          Layout = route.layout;
        }
        const Page = route.component;
        return <Route key={index} path={route.path} element={<Page />} />;
      })}
    </Routes>
  );
}

export default App;
