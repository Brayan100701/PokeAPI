import { useState, useReducer } from "react";
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

function InfoCard({ props }: Props) {
  // console.log(props);
  return props ? (
    <>
      <Card props={props} />
    </>
  ) : (
    <>
      <p>Cargando información...</p>
    </>
  );
}

function Card(props: Props) {
  const info = props.props;
  // console.log(info);
  const [isShiny, setIsShiny] = useState(false);
  const [test, setTest] = useState(false);

  {
    test === false && info.name !== "" ? setTest(true) : () => {};
  }
  return (
    <>
      <div className="card mb-3">
        <button
          className="btn btn-primary"
          onClick={() => setIsShiny(!isShiny)}
        >
          {isShiny ? "Mostrar normal" : "Mostrar Shiny"}
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
          <div className="row">
            <div className="col">
              <h5 className="card-title">{info.name}</h5>
            </div>
            <div className="col">
              <p className="card-text">ID: {info.id}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="card-text">Peso: {info.weight}Kg</p>
            </div>
            <div className="col">
              <p className="card-text">Altura: {info.height}m</p>
            </div>
          </div>

          <DropDown texto={"hola"} />
        </div>
      </div>
    </>
  );
}

export default InfoCard;
