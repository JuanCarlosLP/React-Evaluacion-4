import React from 'react';
import ModalDetails from './modal';
import './styles.css';

function Card(props){
    return (
       
        <div className="card-container">
          
            <h5>#{props.id}</h5> 
            <h3>{props.name}</h3>
            <img src={props.img} alt={props.name} />
            <div className="btn-estadisticas">
            <ModalDetails url={props.url} name={props.name} img={props.img}/>
             </div>
        </div>
    )
}

export default Card;