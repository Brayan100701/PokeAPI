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

function ImCarr({ props }: Sprites) {
  console.log(props);
  const renders = Object.keys(props).map((e) => {
    Element(e, props[e as keyof typeof props]);
  });

  return renders;
}

function Element(name: string, im?: string) {
  return (
    <>
      <div className="carousel-item">
        <img src={im} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5>{name}</h5>
        </div>
      </div>
    </>
  );
}

export default ImCarr;
