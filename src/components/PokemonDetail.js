import React from 'react';
import {Table, Badge} from 'react-bootstrap'

class PokemonDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data2: []
        }
    
        this.getData();
    }
    
    getData() {
        fetch(this.props.url)
            .then(response => {return response.json();})
            .then(result => {this.setState({
                    data: result.types,
                    data2: result.stats
                })
            })
            .catch(error => {console.log(error)})
    }
    
    render() {
        return (
<<<<<<< HEAD
            <div className="card-container-detalles">
                <img src={this.props.img} alt={this.props.name} />
=======
            <div className="card-container">
>>>>>>> 441412480ebf527157a22f5d1eec7086cc80f858

                <div className="row justify-content-around mb-2">
                    {this.state.data.map(types =>
                     <Badge variant="primary"><h6>{types.type.name}</h6></Badge> 
                    )}
                </div>
                
                <div className="img-details">
                    <img src={this.props.img} alt={this.props.name} />
                </div>

                <Table striped bordered hover variant="dark">
                    <tbody>
                        {this.state.data2.map(stat =>
                            <tr>
                                <td>{stat.stat.name}</td>
                               
                                <td><progress min="0" max="100" value={stat.base_stat}></progress></td>
                                <td>{stat.base_stat}%</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            )
    }
}

export default PokemonDetail;