import NavBar from "./NavBar";
import LeftPannel from "./Left-pannel";
// import RightPannel from "./Right-pannel";
import "../css/Layout.css";

function Layout() {
  return (
    <>
      <NavBar />
      <div className="row" id="general">
        <div className="col-8" id="left-pannel">
          <LeftPannel />
        </div>
        <div className="col-4" id="right-pannel">
          {/* <RightPannel /> */}
        </div>
      </div>
    </>
  );
}

export default Layout;
