
import './App.css';
import Component1 from './components/Component1'
// Ejemplo de poner componentes anidados.


const user = {
  nombre: 'Laura',
  edad: 25
}
// Ejemplo de pasar data de un componente padre a un componente hijo.
function App() {

  return (
    <div>
      <Component1 usuario={user} edad={user.edad} />
    </div>
  );
}

export default App;
