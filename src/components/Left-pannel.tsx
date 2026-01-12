import RenderCard from "./RenderCard";

function LeftPannel() {
  const init = 315;
  const fin = 400;
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
