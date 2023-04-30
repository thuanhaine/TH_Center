import "./DefaultLayout.scss";
import { Login } from "../components/Components";
import Sidebar from "./sidebar/Sidebar";
import Maindash from "./maindash/Maindash";
function DefaultLayout({ Page }) {
  return (
    <>
      <div className="defaultlayout">
        <div className="glass">
          <Sidebar />
          <Page />
        </div>
      </div>
    </>
  );
}
export default DefaultLayout;
