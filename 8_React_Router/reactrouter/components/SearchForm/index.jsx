import { useNavigate } from "react-router-dom";

import { useState } from "react";

export const SearchForm = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query)
    navigate("/search?q=" + query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <input type="submit" value="Buscar" />
    </form>
  );
};