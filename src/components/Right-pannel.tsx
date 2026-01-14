import { useState } from "react";
import RenderCard from "./RenderCard";

function RightPannel() {
  return (
    <>
      <SearchBar />
      <RenderCard index="417" />
    </>
  );
}

function SearchBar() {
  return (
    <>
      <form className="d-flex" role="search" id="busqueda">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Busca por Id o Nombre"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
}

export default RightPannel;
