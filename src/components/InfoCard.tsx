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
  const [isShiny, setIsShiny] = useState(false);

  return (
    <>
      <div className="card mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setIsShiny(!isShiny)}
        >
          Shiny
        </button>
        <div className="text-center">
          <img
            src={
              isShiny ? info.sprites.front_shiny : info.sprites.front_default
            }
            className="rounded mx-auto "
          ></img>
          <img
            src={isShiny ? info.sprites.back_shiny : info.sprites.back_default}
            className="rounded mx-auto "
          ></img>
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{info.name}</h5>
          <p className="card-text">ID: {info.id}</p>
          <DropDown texto={"hola"} />
        </div>
      </div>
    </>
  );
}

export default InfoCard;
