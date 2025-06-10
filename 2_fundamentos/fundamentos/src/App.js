import "./App.css";
import FirstComponent from "./components/FirstComponent";
import Challeng from "./components/Challeng";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events";

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challeng/>
    </div>
  );
}

export default App;
