
import './App.css';
import Component1 from './components/Component1'
 

function App() {

  return (
    <div>
    <h1>Bookkeeper</h1>
    <nav>
      <Link to="/component1">Componente 1</Link> |{" "}
      <Link to="/component2">Componente 2</Link>
    </nav>
  </div>
  );
}

export default App;
