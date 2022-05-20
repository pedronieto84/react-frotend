
import './App.css';

const nombre = ()=>{
  return 'Luis'
}

const usuario = {
  direccion: {
    calle: 'Avenida LlucMajor'
  }
}

function App() {
  return (
    <div className="App">
      <h1>2+2</h1>
      <h1> Matematics { 2+2 }</h1>
      <h1> Ejemplo de Ternario { (3+2 ) > 4 ? 'es mayor': 'es menor'}</h1>
      <h1> Ejemplo de un Object {usuario.direccion.calle }</h1>
    </div>
  );
}

export default App;
