
import './App.css';
// Como pasar eventos a funciones en JSX.
const mouseClick = (param) => { console.log(param) }
const mouseOver = (param) => { console.log(param) }

function App() {
  return (
    <div className="App">
  <button onClick={ ()=>{ mouseClick('click') }  }>Click</button>
  <button onMouseOver={ ()=>{ mouseOver('over') }  }>Hover</button>
    </div>
  );
}

export default App;
