import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);

    const fetchData = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}products`);
      const data = await res.json();
      console.log("data:", data);
      setProducts(data);
      console.log("products:", products);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Handmades</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
