import React, {Fragment, useState} from 'react';
import App from '../App'
import { calcularTotal } from '../helpers'; 

const Formulario = ({cantidad, setCantidad, plazo, setPlazo, total, setTotal, setCargando}) => {
    // const  {cantidad, setCantidad, plazo, setPlazo, total, setTotal} = props; 

    //definir el state
    const [error, setError] = useState(false)
    //cuando el usuario hace submit 
    const calcularPrestamo = (e)=>{
        e.preventDefault(); 
        //validar 
        if(cantidad === 0 || plazo == '') setError(true);
        
        //si el usuario corrige 
        //Nota si algo se rompe retorna la funcion anterior 
        setError(false);

       //habilitar el spinner 
        setCargando(true)

       setTimeout( () => {
           //hacer la cotizacion 
          total = calcularTotal(cantidad, plazo)
        // total = total.cantidad;
        // console.log(total)
        
        //guardar el total
        setTotal (total)   

        //Desabilitar spinner
        setCargando(false)
       }, 2500)
              

    }
 

    return(
        <Fragment>
        <form onSubmit = {calcularPrestamo}>          

          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange = { e => setCantidad(parseInt(e.target.value))  }
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange = { e => setPlazo(parseInt(e.target.value))  }
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
          
  </form>
  {error == true ? <p className='error'> Todos los campos son obligatorios </p>: null}
  
  </Fragment>
    )
}

export default Formulario
