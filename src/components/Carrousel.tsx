// import ImCarr from "./ImCarr";

interface Sprites {
  props: {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
  };
}

function Carrousel({ props }: Sprites) {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators"></div>
        <div className="carousel-inner">
          <ImCarr attributes={props} />
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

function Indicators() {
  return (
    <>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
    </>
  );
}

function ImCarr({ attributes }: any) {
  return (
    <>
      {Object.keys(attributes).map((e) => {
        Element(e, attributes[e as keyof typeof attributes]);
      })}
    </>
  );
}

function Element(name: string, im: string) {
  const first =
    name !== "back_default" ? "carousel-item" : "carousel-item active";
  return (
    <>
      <div className={first}>
        <img src={im} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>{name}</h5>
        </div>
      </div>
    </>
  );
}

export default Carrousel;
