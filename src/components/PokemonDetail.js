import React from 'react';

class PokemonDetail extends React.Component{

    constructor() {
        super();
        this.state = {
            pokemon: {}
        }
    }

    componentDidMount() {
        fetch(this.props.url)
            .then(response => response.json())
            .then(data => this.setState({pokemon: data}, () => {
                this.state.pokemon.types.map(type => {
                    console.log(type.type.name)
                })
                this.state.pokemon.stats.map(stat => {
                    console.log(`${stat.stat.name} = ${stat.base_stat}`)
                })
            }))
            .catch(error => {
                console.log(error);
            })
    }
    
    render() {
        return (
            <div className="card-container">
                <h2>{this.props.name}</h2>
                <img src={this.props.img} alt={this.props.name} />
            </div>
            )
    }
}

export default PokemonDetail;