import { useState } from "react";
import DropDown from "./DropDown";

interface Props {
  props: {
    name: string;
    base_experience: string;
    cries: string;
    game_indices: string[];
    height: string;
    id: string;
    types: string[];
    weight: string;
    sprites: {
      back_default?: string;
      back_female?: string;
      back_shiny?: string;
      back_shiny_female?: string;
      front_default?: string;
      front_female?: string;
      front_shiny?: string;
      front_shiny_female?: string;
    };
  };
}

interface PropsSprite {
  im1?: string;
  im2?: string;
}

function InfoCard({ props }: Props) {
  // console.log(props);
  return props ? (
    <>
      <Card props={props} />
    </>
  ) : (
    <>
      <p>No hay elementos para mostrar</p>
    </>
  );
}

function Card(props: Props) {
  const info = props.props;
  const [counter, setCounter] = useState(0);

  // console.log(info);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <div className="card mb-3">
        <p className="card-text">{counter}</p>
        <div className="text-center">
          <SpriteRender
            im1={info.sprites.front_default}
            im2={info.sprites.back_default}
          />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{info.name}</h5>
          <p className="card-text">ID: {info.id}</p>
          <DropDown texto={"hola"} />
          <a href="#" className="btn btn-primary" onClick={() => handleClick()}>
            Gruñido
          </a>
        </div>
      </div>
    </>
  );
}

function SpriteRender({ im1, im2 }: PropsSprite) {
  return (
    <>
      <img src={im1} className="rounded mx-auto "></img>
      <img src={im2} className="rounded mx-auto "></img>
    </>
  );
}

export default InfoCard;
