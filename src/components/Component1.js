// Definición de un REACT COMPONENT FUNCIONAL
import Component2 from './Component2'
// Para pasarle data de un componente padre a un componente hijo utilizo las props.
function Component1(  ) {
    // JSX te permite que en el primer DIV no le pongas el texto DIV.
    return (
        <> <p>Soy el componente 1 hola</p>
            <Component2 />
        </>
    )
}

export default Component1