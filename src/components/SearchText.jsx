import React from "react";

const SearchText = ({ setSearch }) => {
  return (
    <div className="d-flex justify-content-between p-2 bg-white">
      <label className="text-dark h2" htmlFor="Buscador">Personaje</label>
      <input
        className="form-control inputSearch"
        name="Buscador"
        placeholder="búsqueda"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchText;
