import React from 'react'
import App from '../App'
const Resultado = ({total, plazo, cantidad}) =>(
    <div className='u-full-width resultado'> 
        <h2>Resumen: </h2>
        <p> La cantidad Solicitada es: $ {cantidad} </p>
        {console.log(cantidad)}
        <p> A pagar en:  {plazo} meses </p>
        {console.log(plazo)}
        <p> Su pago mensual es de { (total / plazo).toFixed(2) } </p>

        <p> Total a pagar: $ {(total).toFixed(2)} </p>
        {console.log(total)}
    </div>
)


export default Resultado
