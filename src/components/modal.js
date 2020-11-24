import React from 'react';
import {Button, Modal} from 'react-bootstrap'
import PokemonDetail from './PokemonDetail'

class ModalDetails extends React.Component{
    constructor() {
        super()
        this.state = {
            show: false
        }
    }

    handleModal() {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div>
                <Button onClick={()=>{this.handleModal()}}>Ver Detalles</Button>
                <Modal show={this.state.show}>
                    <Modal.Header>{this.props.name}</Modal.Header>
                    <Modal.Body>
                        <PokemonDetail url={this.props.url} name={this.props.name} img={this.props.img}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>{this.handleModal()}}>Regresar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalDetails;