import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import styled from "styled-components";

const Body = styled.body`
  background-color: antiquewhite;
`;

const Tabla = styled.div`
  background-color: rgb(255, 255, 255);
  margin: 50px auto;
  width: 90%;
  border-top: 1px solid black;
  border-right: 1px solid black;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
`;

const Item = styled.div`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  font-size: 0.95em;
`;

const Nombre = styled.div`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  font-weight: bold;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  font-size: 0.95em;
`;

const Dni = styled.div`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  font-weight: bold;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  font-size: 0.95em;
`;

const Email = styled.div`
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  font-weight: bold;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  font-size: 0.95em;
`;

const Eliminar = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  font-size: 0.95em;
  background: transparent;
  border-left: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [datos, setDatos] = useState<
    { nombre: string; dni: string; email: string }[]
  >([]);
  const [error, setError] = useState("");

  const Submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/^\d{8}[a-zA-Z]$/g.test(dni)) {
      setError("El DNI ingresado no es válido.");
      return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setError("El email ingresado no es válido.");
      return;
    }
    setDatos([...datos, { nombre, dni, email }]);
    setNombre("");
    setDni("");
    setEmail("");
    setError("");
  };

  const Delete = (index: number) => {
    const newDatos = [...datos];
    newDatos.splice(index, 1);
    setDatos(newDatos);
  };

  return (
    <Body>
      <form onSubmit={Submit} className="formulario">
        <div>
          <label>Introduce tu nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Julio"
          />
        </div>
        <div>
          <label>Introduce tu edad:</label>
          <input
            type="text"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
            placeholder="50417169F"
          />
        </div>
        <div>
          <label>Introduce tu email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Julio77@gmail.com"
          />
        </div>
        <button type="submit" className="btn">
          Añadir
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      <div className="tabla">
        <Tabla>
          <Nombre>
            <div className="nombre">Nombre</div>
          </Nombre>
          <Dni>
            <div className="dni">DNI</div>
          </Dni>
          <Email>
            <div className="email">Email</div>
          </Email>
          <Eliminar>
            <button onClick={() => setDatos([])} className="btn">
              <img src="practica2\public\calavera.jpg" alt="Eliminar todos" />
            </button>
          </Eliminar>
          {datos.map(({ nombre, dni, email }, index) => (
            <React.Fragment key={index}>
              <Item>
                <div className="item">{nombre}</div>
              </Item>
              <Item>
                <div className="item">{dni}</div>
              </Item>
              <Item>
                <div className="item">{email}</div>
              </Item>
              <Eliminar>
                <button onClick={() => Delete(index)}>
                  <img src="practica2\public\papelera.png" alt="Eliminar" />
                </button>
              </Eliminar>
            </React.Fragment>
          ))}
        </Tabla>
      </div>
    </Body>
  );
};

export default Formulario;
