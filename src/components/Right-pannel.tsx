import { useState } from "react";
import RenderCard from "./RenderCard";

function RightPannel() {
  const [renderValue, setRendervalue] = useState({
    box: "1",
    reference: "Busqueda",
  });

  function handleSubmitRight() {
    const input = document.getElementById(
      "RightSearchBy"
    ) as HTMLInputElement | null;
    setRendervalue({
      box: input ? input.value : "",
      reference: "Busqueda" + input?.value,
    });
  }

  return (
    <>
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
        </div>
      </div>
      <RenderCard key={renderValue.reference} index={renderValue.box} />
    </>
  );
}

export default RightPannel;
