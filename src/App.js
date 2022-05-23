
import './App.css';
import { Link } from "react-router-dom";


function App() {

  return (
    <div>
       <nav>
        <Link to="/component1">Componente 1</Link> |{" "}
        <Link to="/component2">Componente 2</Link>
      </nav>
    </div>
  );
}

export default App;
