import Weather from "./Weather";
import "./App.css";
import "./GithubButton.css";

function App() {
  return (
    <div className="App">
      <div class="container mt-3 p-5">
        <Weather initialLocation="Málaga" />
      </div>
    </div>
  );
}

export default App;
