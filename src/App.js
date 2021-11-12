import AllPokemon from "./containers/AllPokemon";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        Personal Pokedex!
        <div>
          <AllPokemon />
        </div>
      </div>
    </Router>
  );
}

export default App;
