import { useState } from "react";
import RenderCard from "./RenderCard";

function LeftPannel() {
  const [estructura, setEstructura] = useState({ init: 1, fin: 10 });

  // const init = 280;
  // const fin = 300;
  // const rango = fin - init + 1;

  function handleSubmitLeft() {
    const textOne = document.getElementById(
      "leftSearchByOne",
    ) as HTMLInputElement | null;
    const textTwo = document.getElementById(
      "leftSearchByTwo",
    ) as HTMLInputElement | null;
    const imbecil = document.getElementById("imbecil") as HTMLLabelElement;
    try {
      const one = parseInt(textOne ? textOne.value : "1");
      const two = parseInt(textTwo ? textTwo.value : "1");

      if (one > 0 && two > one && two < 1026) {
        imbecil.innerText = "";
        setEstructura({
          init: one,
          fin: two,
        });
      } else {
        imbecil.innerText = "No se puede realizar la búsqueda";
      }
    } catch (error) {
      alert("Piola");
    }
  }

  return (
    <>
      <p>Búsqueda múltiple por rango de ID's</p>
      <div className="row searchRow">
        <div className="col-sm-4">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Mostrar desde"
            aria-label="Search"
            id="leftSearchByOne"
          />
        </div>
        <div className="col-sm-4">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Hasta"
            aria-label="Search"
            id="leftSearchByTwo"
          />
        </div>
        <div className="col-sm-4">
          <button
            className="btn btn-outline-success"
            onClick={() => handleSubmitLeft()}
          >
            Buscar
          </button>
          <label id="imbecil"></label>
        </div>
      </div>
      {Array.from(new Array(estructura.fin - estructura.init + 1).keys()).map(
        (e) =>
          (e + 3) % 3 == 0 ? (
            <Aux key={e} index={e + estructura.init} fin={estructura.fin} />
          ) : (
            <EmptyComp key={e} />
          ),
      )}
    </>
  );
}

interface PropsPlace {
  index: number;
  fin: number;
}

function Aux({ index, fin }: PropsPlace) {
  return <PlaceRow key={index} index={index} fin={fin} />;
}

interface PropsPlaceT {
  index: number;
  fin: number;
}

function PlaceRow({ index, fin }: PropsPlaceT) {
  return (
    <>
      <div className="row">
        {Array.from(new Array(3).keys()).map((e) => (
          <AuxTwo key={index + e} index={index} fin={fin} e={e} />
        ))}
      </div>
    </>
  );
}

interface PropsTwo {
  index: number;
  fin: number;
  // init: number;
  e: number;
}

function AuxTwo({ index, fin, e }: PropsTwo) {
  return index + e <= fin ? (
    <RenderCard index={(index + e).toString()} />
  ) : (
    <></>
  );
}

function EmptyComp() {
  return <></>;
}

export default LeftPannel;
