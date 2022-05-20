
import './App.css';
// Control de eeventos clasicos, mouseClick y mouseOver.
const mouseClick = () => { console.log('mouseClick') }
const mouseOver = () => { console.log('mouseOver') }

function App() {
  return (
    <div className="App">
  <button onClick={ mouseClick  }>Click</button>
  <button onMouseOver={ mouseOver }>Hover</button>
    </div>
  );
}

export default App;
