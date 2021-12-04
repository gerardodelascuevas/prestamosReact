import React, {Fragment} from 'react'

function Header(props){
    // console.log(props)
    
    return (
        <Fragment>
        <h1> {props.titulo} </h1>
        <h1> { props.cantidad }</h1>
        </Fragment>
    )
}

export default Header; 