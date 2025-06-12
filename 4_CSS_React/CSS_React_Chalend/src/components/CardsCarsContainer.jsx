import { useState } from "react";
import style from "./CardCarsContainer.module.css";
import CardCars from "./CardCars";

const CardCarsContainer = () => {
  const [listCars] = useState([
    {
      make: "Subaru",
      model: "A4",
      year: 2002,
      fuel_type: "Hybrid",
      top_speed: 81,
    },
    {
      make: "Mercedes",
      model: "F-150",
      year: 1990,
      fuel_type: "Electric",
      top_speed: 159,
    },
    {
      make: "Toyota",
      model: "Civic",
      year: 1996,
      fuel_type: "Electric",
      top_speed: 105,
    },
    {
      make: "Honda",
      model: "Outback",
      year: 2000,
      fuel_type: "Electric",
      top_speed: 164,
    },
    {
      make: "Audi",
      model: "Golf",
      year: 1994,
      fuel_type: "Electric",
      top_speed: 81,
    },
    {
      make: "Nissan",
      model: "Civic",
      year: 1991,
      fuel_type: "Gasoline",
      top_speed: 145,
    },
    {
      make: "Ford",
      model: "Civic",
      year: 2018,
      fuel_type: "Gasoline",
      top_speed: 137,
    },
    {
      make: "Nissan",
      model: "Altima",
      year: 2003,
      fuel_type: "Electric",
      top_speed: 112,
    },
    {
      make: "Volkswagen",
      model: "Outback",
      year: 2001,
      fuel_type: "Gasoline",
      top_speed: 164,
    },
    {
      make: "Mercedes",
      model: "F-150",
      year: 1993,
      fuel_type: "Gasoline",
      top_speed: 182,
    },
  ]);
  return (
    <div className={style.cardCarContainer}>
      {listCars.map((iten) => (
        <CardCars car={iten} />
      ))}
    </div>
  );
};
export default CardCarsContainer;
