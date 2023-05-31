import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container mt-3 p-5">
        <Weather initialLocation="Málaga" />
      </div>
    </div>
  );
}

export default App;
