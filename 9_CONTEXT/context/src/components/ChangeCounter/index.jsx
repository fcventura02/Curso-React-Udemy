// 3 - alterando valor do contador
import { CounterContext } from "../../context/CounterContext";
import { useCounterContext } from "../../hooks/useCounterContext";

const ChangeCounter = () => {
  // const { counter, setCounter } = useContext(CounterContext);
  // 4 - refatorando para hook
  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Add value to counter
      </button>
    </div>
  );
};

export default ChangeCounter;