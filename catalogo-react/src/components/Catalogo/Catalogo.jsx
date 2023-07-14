import ItemCatalogo from "./ItemCatalogo";
import { useState, useEffect } from "react";
import { Spin, Button } from "antd";
import "./Catalogo.css";

export default function Catalogo() {
  const [michis, setMichis] = useState([]);
  const [michiFacts, setMichiFacts] = useState([]);
  const [numeroRandom, setNumeroRandom] = useState();

  useEffect(() => {
    // Async para mostrar michis primero
    const traerMichis = async () => {
      const michiData = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      const datosParseados = await michiData.json();
      console.log(datosParseados);
      setMichis(datosParseados);
    };
    traerMichis();

    fetch(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=50"
    )
      .then((res) => res.json())
      .then((data) => setMichiFacts(data));
  }, []);

  const mostrarFactRandom = () => {
    setNumeroRandom(Math.floor(Math.random() * 50));
    return;
  };
  return (
    <main className="contenedorCatalogo">
      <h1>Michi catálogo</h1>

      {michis.length === 0 ? (
        <Spin size="large" />
      ) : (
        <>
          <section className="michifacts">
            <p>
              {michiFacts[numeroRandom]?.text || "¿Quieres saber más de los michis? Haz click en el botón"}
            </p>
            <Button type='primary' onClick={mostrarFactRandom} styles='botonMostrarMichiFact'>Mostrar Michi Fact</Button>
          </section>
          <section className="catalogo">
            {michis?.map((michi) => (
              <ItemCatalogo key={michi.id} url={michi.url} />
            ))}
          </section>
        </>
      )}
    </main>
  );
}
