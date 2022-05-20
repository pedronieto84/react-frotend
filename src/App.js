
import './App.css';
import { Link } from "react-router-dom";
 
// EJERCICIO

// 1. Inicializar un proyecto de cero con "npx create-react-app"

// 2. Limpiar el proyecto
    // 2.a -> Quitar los archivos de testing.
    // 2.b -> Limpiar el HTML
    // 2.c -> Limpiar los css de index.css y app.css
    // 2.d -> Quitar las imágenes y el logo
    // 2.e -> Quitar las dependencies de testing (donde ponga tester)
    // 2.f -> Quitar el script de test del package.json

// 3. PONER REACT ROUTER
    // Seguir esta guia para poner el routing   https://reactrouter.com/docs/en/v6/getting-started/tutorial
    // Crear una pagina para cada animal
    // Poner todo el html de los animales en cada componente de su animal

// 4. Usar componentes globales
    // Crear un componente Animal que se encargue de mostrar la data de Animal.
    // En cada familia de animales, crear un array de Animales y que con un bucle for, pasarle a los componentes hijos la data por props, para que sea el componente Animal el que se encarga de presentar la data.


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
