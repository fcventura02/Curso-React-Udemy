import "./App.css";

import { useState } from "react";
import { useFatch } from "./hooks/useFatch";

function App() {
  const baseUrlData = "http://localhost:3000/products";
  //const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //4 - custom rook
  const { data: items, httpConfig, loading, error } = useFatch(baseUrlData);

  //1 - Resgatando dados
  /* useEffect(() => {
    async function fachData() {
      const res = await fetch(baseUrlData);
      const data = await res.json();
      setProducts(data);
    }
    fachData();
  }, []); */

  //2 - add dados
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };
    /* 
    const res = await fetch(baseUrlData, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    //3 - carregamento diamico
    const addedProduct = await res.json();
    setProducts((prevProduct) => [...prevProduct, addedProduct]); */

    // 5 - refatorando POST
    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  const handleDelete = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <>
      <h1>Lista de produtos</h1>
      {/* 6 - Loading */}
      {loading && <p>carregando Dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items?.map((item, index) => (
            <li key={index}>
              {item.name} - R${item.price}{" "}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </label>
          {/* 7 - State loading no POST */}
          <input type="submit" value="Criar produto" disabled={loading} />
        </form>
      </div>
    </>
  );
}

export default App;
