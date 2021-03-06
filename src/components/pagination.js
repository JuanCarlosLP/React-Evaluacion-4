import React from 'react';

function Pagination(props){
    const pokemonArray = Array.apply(null, Array(13)).map(() => {}); //Simular arreglo de 10 elementos
    //3. Mostrar las páginas disponibles
    //Si solicitamos la página 10 mostrariamos [5, 6, 7, 8, 9, 10, 11, 12, 13, 14] ( |10 - 5| |10 + 4| )
    //Si solicitamos la página 14 mostrariamos [9, 10, 11, 12, 13, 14, 15, 16, 17, 18] ( |14 - 5 | |14 + 4| )
    return (
        
            <div className="pagination-row">
                <div className="container-paginacion">
                {
                    pokemonArray.map( (element, index) => {
                        return <div key={index} className="item" onClick={() => props.fetchPageFn(index+1)}>{index + 1}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Pagination;