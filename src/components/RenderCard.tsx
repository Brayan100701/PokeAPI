import { useState, useEffect } from "react";
import InfoCard from "./InfoCard";

interface Props {
  index: string;
}

function RenderCard({ index }: Props) {
  const [pokemonData, setPokemonData] = useState(null);
  const API_URL = "https://pokeapi.co/api/v2/pokemon/" + index;

  const fetchPokemonos = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error("ERROR");
    }
  };

  useEffect(() => {
    fetchPokemonos();
  }, []);

  return (
    <>
      <InfoCard props={pokemonData} />
    </>
  );
}

// function RenderCard({ index }: Props) {
//   const API_URL = "https://pokeapi.co/api/v2/pokemon/";
//   const data = Intermediate(API_URL + index);
//   // console.log(data.game_indices);
//   return (
//     <>
//       <InfoCard props={data} />
//     </>
//   );
// }

// function Intermediate(URL: string) {
//   let data = {
//     name: "",
//     base_experience: "",
//     cries: "",
//     game_indices: [
//       {
//         version: { name: "" },
//       },
//     ],
//     height: "",
//     id: "",
//     types: [
//       {
//         type: { name: "" },
//       },
//     ],
//     weight: "",
//     sprites: {},
//   };

//   FetchApi(URL).then((e) => {
//     data.base_experience = e.base_experience;
//     data.cries = e.cries.latest;
//     data.game_indices = e.game_indices;
//     data.height = e.height;
//     data.id = e.id;
//     data.types = e.types;
//     data.weight = e.weight;
//     data.name = e.name;
//     data.sprites = {
//       back_default: e.sprites.back_default,
//       back_female: e.sprites.back_female,
//       back_shiny: e.sprites.back_shiny,
//       back_shiny_female: e.sprites.back_shiny_female,
//       front_default: e.sprites.front_default,
//       front_female: e.sprites.front_female,
//       front_shiny: e.sprites.front_shiny,
//       front_shiny_female: e.sprites.front_shiny_female,
//     };
//   });

//   return data;
// }

// const FetchApi = async (API_URL: string) => {
//   const data = await fetch(API_URL).then((e) => e.json());
//   return data;
// };

export default RenderCard;
