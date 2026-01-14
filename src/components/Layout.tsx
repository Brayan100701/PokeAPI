import NavBar from "./NavBar";
import LeftPannel from "./Left-pannel";
import RightPannel from "./Right-pannel";
import "../css/Layout.css";

function Layout() {
  return (
    <>
      <NavBar />
      <div className="text-center" id="general-title">
        <h2>POKEDEX</h2>
      </div>
      <div className="row" id="general">
        <div className="col-sm-4" id="right-pannel">
          <RightPannel />
        </div>
        <div className="col-sm-8" id="left-pannel">
          <LeftPannel />
        </div>
      </div>
    </>
  );
}

export default Layout;
