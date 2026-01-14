import "../css/NavBar.css";

function NavBar() {
  return (
    <>
      {/* <nav className="navbar bg-body-tertiary"> */}
      <div className="carousel-var">
        <div className="group">
          <CarCard />
        </div>
        <div aria-hidden className="group">
          <CarCard />
        </div>
        <div aria-hidden className="group">
          <CarCard />
        </div>
      </div>
    </>
  );
}

function CarCard() {
  return (
    <>
      <div className="carCard"></div>
      <div className="carCard">
        <img className="carIcon" src="/react.svg"></img>
      </div>
      <div className="carCard">
        <img className="carIcon" src="/typeScript.svg"></img>
      </div>
      <div className="carCard">
        <img className="carIcon" src="/vite.svg"></img>
      </div>
      <div className="carCard">
        <img className="carIcon" src="/html.png"></img>
      </div>
      <div className="carCard">
        <img className="carIcon" src="/css.png"></img>
      </div>
      <div className="carCard">
        <img className="carIcon" src="/bootstrap.svg"></img>
      </div>
    </>
  );
}

export default NavBar;
