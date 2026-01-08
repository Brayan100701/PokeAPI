import InfoCard from "./InfoCard";

function LeftPannel() {
  const pokemonos = [
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Mudkip",
    "Torchic",
    "Treecko",
  ];
  return (
    <>
      <div className="row overflow-auto">
        <InfoCard pokelista={pokemonos} />
      </div>
    </>
  );
}

export default LeftPannel;
