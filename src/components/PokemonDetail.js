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
            <div className="card-container">
                <img src={this.props.img} alt={this.props.name} />

                {this.state.data.map(types =>
                    <div>
                        <Badge variant="primary">{types.type.name}</Badge>{' '}
                    </div>
                )}

                <Table striped bordered hover variant="dark">
                    <tbody>
                        {this.state.data2.map(stat =>
                            <tr>
                                <td>{stat.stat.name}</td>
                                <td>{stat.base_stat}</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
            )
    }
}

export default PokemonDetail;