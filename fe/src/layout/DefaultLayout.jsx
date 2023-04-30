import "./DefaultLayout.scss";
import { Login } from "../components/Components";
import Sidebar from "./sidebar/Sidebar";
function DefaultLayout({ Page }) {
  return (
    <>
      <div className="defaultlayout">
        <div className="glass">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
export default DefaultLayout;
