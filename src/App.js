
import './App.css';
import Component1 from './components/Component1'
 

// Pasarle data de un hijo a un padre

const passDataFromChildToParent = (dataFromChild) =>{
  console.log('data from my child', dataFromChild)
}


function App() {

  return (
    <div>
      <Component1 passDataFromChildToParent={ passDataFromChildToParent } />
    </div>
  );
}

export default App;
