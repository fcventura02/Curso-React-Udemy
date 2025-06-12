import styles from "./CardCars.module.css";

const CardCars = ({ car }) => {
  return (
    <div className={styles.cardCar}>
      <div className={styles.title_container}>
        <h3>
          {car.make} {car.model}
        </h3>
        <span>{car.year}</span>
      </div>
      <div className={styles.details}>
        <p className={styles.top_speed}>
          Velocidade máxima: <br /> <span>{car.top_speed} KM/h</span>
        </p>
        <p className={styles.fuel}>
          Combustível: <span>{car.fuel_type}</span>
        </p>
      </div>
    </div>
  );
};

export default CardCars;
