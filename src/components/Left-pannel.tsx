import RenderCard from "./RenderCard";

function LeftPannel() {
  const init = 1;
  const fin = 29;
  const rango = fin - init + 1;
  return (
    <>
      {Array.from(new Array(rango).keys()).map((e) =>
        (e + 2) % 3 === 0 ? (
          <PlaceRow key={e} index={e} init={init} fin={fin} />
        ) : (
          <></>
        )
      )}
      {/* <div className="row">
        {Array.from(new Array(fin % 3).keys()).map((e) => (
          <RenderCard key={e} index={(fin - e + 3).toString()} />
        ))}
      </div> */}
    </>
  );
}

interface PropsPlace {
  index: number;
  init: number;
  fin: number;
}

function PlaceRow({ index, init, fin }: PropsPlace) {
  console.log(index);
  return (
    <>
      <div className="row">
        {Array.from(new Array(3).keys()).map((e) =>
          index + e <= fin ? (
            <RenderCard key={index + e} index={(index + e).toString()} />
          ) : (
            <></>
          )
        )}
      </div>
    </>
  );
}

export default LeftPannel;
