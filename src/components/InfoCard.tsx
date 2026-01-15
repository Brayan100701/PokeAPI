import { useState } from "react";
// import DropDown from "./DropDown";
import "../css/Types.css";

interface Props {
  props: any;
}

function InfoCard({ props }: Props) {
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
  const [isShiny, setIsShiny] = useState(false);
  return (
    <>
      <div className="col mb-4">
        <div className="card mb-3">
          <div className="row">
            {info.types.map((e: any, index: any) => (
              <Types key={index} type={e.type.name} />
            ))}
          </div>

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
              src={
                isShiny ? info.sprites.back_shiny : info.sprites.back_default
              }
              className="rounded mx-auto "
            ></img>
          </div>
          <div className="card-body text-center">
            <div className="row">
              <div className="col">
                <h5 className="card-title pname">{info.name.toUpperCase()}</h5>
              </div>
              <div className="col">
                <p className="card-text pname">ID: {info.id}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="card-text">
                  Peso: {parseInt(info.weight) / 10}Kg
                </p>
              </div>
              <div className="col">
                <p className="card-text">
                  Altura: {parseInt(info.height) / 10}m
                </p>
              </div>
            </div>
            <div className="row">
              {/* <DropDown props={info.game_indices} name={info.name} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface PropsTypes {
  type: string;
}

function Types({ type }: PropsTypes) {
  return (
    <>
      <div className="col type">
        <p className={type}>{type.toUpperCase()}</p>
      </div>
    </>
  );
}

export default InfoCard;
