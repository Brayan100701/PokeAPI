import { useState } from "react";
import RenderCard from "./RenderCard";

function LeftPannel() {
  const [pokemonData, setPokemonData] = useState(null);

  const init = 150;
  const fin = 160;
  const rango = fin - init + 1;
  return (
    <>
      <div className="row overflow-auto">
        {Array.from(new Array(rango).keys()).map((e) => (
          <RenderCard key={e} index={(e + init).toString()} />
        ))}
      </div>
    </>
  );
}

export default LeftPannel;
