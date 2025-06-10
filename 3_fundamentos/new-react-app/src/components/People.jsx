const People = ({ first_name, profession, age }) => {
  return (
    <li>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        {first_name}
        <span
          style={{
            marginLeft: "20px",
            marginBottom: "auto",
            marginTop: "auto",
            fontSize: "14px",
            fontWeight: "400",
            color: age > 17 ? "green" : "red",
          }}
        >
          {age > 17 ? "Pode tirar carteira" : "não pode tirar carteira"}
        </span>
      </h2>
      <span style={{ marginInline: "10px" }}>idade: {age} anos</span>
      <span style={{ marginInline: "10px" }}>Profissão: {profession}</span>
    </li>
  );
};
export default People;
