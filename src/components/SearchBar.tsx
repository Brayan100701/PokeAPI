function SearchBar() {
  return (
    <>
      <form className="d-flex" role="search">
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

export default SearchBar;
