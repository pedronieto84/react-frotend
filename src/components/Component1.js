
function Component1( props ) {
    console.log('props', props)
    return (
        <> 
        <p>Soy el componente {props.usuario.nombre}
        </p>
        <p>La edad es : {props.edad}</p>
        </>
    )
}

export default Component1