import { useState } from "react";
import RenderCard from "./RenderCard";

function RightPannel() {
  const [renderValue, setRendervalue] = useState({
    box: "1",
    reference: "Busqueda",
  });

  function handleSubmitRight() {
    const input = document.getElementById(
      "RightSearchBy",
    ) as HTMLInputElement | null;
    const pendejo = document.getElementById("pendejo") as HTMLLabelElement;
    const id = parseInt(input ? input.value : "");

    if (id > 0 && id < 1026) {
      pendejo.innerText = "";
      setRendervalue({
        box: input ? input.value : "",
        reference: "Busqueda" + input?.value,
      });
    } else {
      pendejo.innerText = "No se puede realizar la búsqueda";
    }
  }

  return (
    <>
      <p>Búsqueda por ID único o Nombre</p>
      <div className="row searchRow">
        <div className="col-sm-8">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Busca por Id o Nombre"
            aria-label="Search"
            id="RightSearchBy"
          />
        </div>
        <div className="col-sm-4">
          <button
            className="btn btn-outline-success"
            onClick={() => handleSubmitRight()}
          >
            Buscar
          </button>
          <label id="pendejo"></label>
        </div>
      </div>
      <RenderCard key={renderValue.reference} index={renderValue.box} />
    </>
  );
}

export default RightPannel;
