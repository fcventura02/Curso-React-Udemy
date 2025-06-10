import { Fragment, useState } from "react";
import "./App.css";

import city from "./assets/city.jpg";
import CarDetails from "./components/CarDetails";
import ChangeMessageState from "./components/ChangeMessageState";
import ConditionalRender from "./components/ConditionalRender";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";
import MessageState from "./components/MessageState";
import ShowUserName from "./components/ShowUserName";
import People from "./components/People";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState();

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  const listPeople = [
    { id: 1, first_name: "Rik", profession: "Financial Analyst", age: 25 },
    {
      id: 2,
      first_name: "Charita",
      profession: "Assistant Professor",
      age: 24,
    },
    { id: 3, first_name: "Claudio", profession: "Senior Developer", age: 25 },
    {
      id: 4,
      first_name: "Cherry",
      profession: "Sales Representative",
      age: 16,
    },
    {
      id: 5,
      first_name: "Wilhelmine",
      profession: "Assistant Media Planner",
      age: 20,
    },
    {
      id: 6,
      first_name: "Norma",
      profession: "Occupational Therapist",
      age: 15,
    },
    { id: 7, first_name: "Padriac", profession: "Actuary", age: 19 },
    { id: 8, first_name: "Zaria", profession: "VP Quality Control", age: 18 },
    { id: 9, first_name: "Georgeta", profession: "Actuary", age: 15 },
    {
      id: 10,
      first_name: "Dorey",
      profession: "Software Test Engineer III",
      age: 21,
    },
  ];

  return (
    <div className="App">
      <h1>Seção 3</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
        <img src={city} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Matheus" />
      {/* destructuring */}
      <CarDetails brand="Ford" color="Azul" km={10000} />
      {/* reaproveitamento */}
      <CarDetails brand="VW" color="Vermelho" km={535} />
      <CarDetails brand="Fiat" color="Branco" km={0} />
      {/* loop com array de obj */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* fragments */}
      <Fragment />
      {/* children prop */}
      <Container>
        <p>Eu sou do componente superior</p>
      </Container>
      <Container>
        <div>
          <p>Eu também</p>
        </div>
      </Container>
      {/* event as prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />

      <h1>Seção 3</h1>
      <ul>
        {listPeople.map(({ id, first_name, profession, age }) => (
          <People
            key={id}
            first_name={first_name}
            profession={profession}
            age={age}
          ></People>
        ))}
      </ul>
    </div>
  );
}

export default App;
