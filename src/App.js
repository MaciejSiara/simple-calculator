import "./App.css";

// Import components
import { Fields, Result } from "./components";
import { useCalculator } from "./hooks/useCalculator";

function App() {
  const props = useCalculator();

  return (
    <div className="container">
      <Fields {...props} />
      <Result result={props.calcState.result} />
    </div>
  );
}

export default App;
