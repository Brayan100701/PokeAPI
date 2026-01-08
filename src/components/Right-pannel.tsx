import SearchBar from "./SearchBar";
import InfoCard from "./InfoCard";

function RightPannel() {
  return (
    <>
      <SearchBar />
      <InfoCard pokelista={["Hola"]} />
    </>
  );
}
export default RightPannel;
