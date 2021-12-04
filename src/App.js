import React,{ Fragment, useState } from 'react'
// import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/formulario';
import Mensaje from './componentes/mensaje';
import Resultado from './componentes/resultado';
import Spinner from './componentes/spinner';
 

function App() {
     //definiendo el state 
     const [cantidad, setCantidad] = useState(0); 
     const [plazo, setPlazo] = useState(''); 
     const [total, setTotal] = useState(0); 
     const [cargando, setCargando] = useState('false'); 

     let componente; 
     if(cargando === true){
       componente = <Spinner />
     }else if(total==0){
      componente = <Mensaje/>
      // console.log(total)
     } else {
      componente = <Resultado
      total = {total}
      plazo = {plazo}
      cantidad = {cantidad}
      />
      
      // console.log(total)
     }
  return (
    <Fragment>
      <Header 
      titulo = 'Cotizador con React'
      
      />
      
      <div className='container'> 
            <Formulario 
            cantidad = {cantidad}
            setCantidad = {setCantidad}
            plazo = {plazo}
            setPlazo = {setPlazo}
            total = {total}
            setTotal = {setTotal}
            setCargando = {setCargando}
            />
            {/* <p> Total vale ahora = {total}</p> */}
             <div className='mensajes'>
            {componente}  
            
            {console.log(total)}
            </div>          

      </div>
     

    </Fragment>
  );
}

export default App;
