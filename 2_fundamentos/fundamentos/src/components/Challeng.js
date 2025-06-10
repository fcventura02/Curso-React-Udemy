const Challeng = () => {
  const var1 = 2;
  const var2 = 5;
  return (
    <div>
      <h1>
        A soma de {var1} com {var2}
      </h1>
      <br />
      <button onClick={() => (console.log(var1 + var2))}>
        Clique aqui para somar
      </button>
    </div>
  );
};

export default Challeng;