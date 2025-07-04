

// useContext
import { useContext } from "react";
import { SomeContext } from "../../components/HookUseContext";
import HookUseState from "../../components/HookUseState";
import HookUseReducer from "../../components/HookUseReducer";
import HookUseEffect from "../../components/HookUseEffect";
import HookUseRef from "../../components/HookUseRef";
import HookUseCallback from "../../components/HookUseCallback";
import HookUseMemo from "../../components/HookUseMemo";
import HookUseEffectLayout from "../../components/HookUseEffectLayout";
import HookUseImperativeHandle from "../../components/HookUseImperativeHandle";
import HookCustom from "../../components/HookCustom";

const Home = () => {
  const { contextValue } = useContext(SomeContext);

  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseEffectLayout />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  );
};

export default Home;