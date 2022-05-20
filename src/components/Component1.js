
function Component1( props ) {
    console.log('props', props)
    return (
        <> 
        <button onClick={
            ()=>{
                props.passDataFromChildToParent('mensaje desde el hijo')}}>CLIC</button>
        </>
    )
}

export default Component1