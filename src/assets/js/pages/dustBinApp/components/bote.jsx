import React, { Component, PropTypes } from 'react';
import Basura from './basura.jsx';



const styles = {
    width: '48%',
    height: '50%',
    border: '2px solid black'
}

const styles_bote__content={
    width: '100%',
    height: 'calc(80% - 10px)',
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
    
}

const styles_bote__title={
    margin: '0 0 10px 0',
    height: '20%',
    padding: 0,
    textTransform: 'uppercase',
    textAlign: 'center'
}
          
class Bote extends Component{
    _renderContenido(){
        const contenido = this.props.contenido;
        
        return contenido.map((item, index)=>{
            return(
                <Basura id={item.id} 
                        tipo={item.tipo}
                        descripcion={item.descripcion}
                        enBote={item.enBote} 
                        key={index}
                        indexBasura={index} 
                        callbacks={this.props.callbacks}
                        indexBote={this.props.indexBote}/>
            );
        });
    }
    
    render(){
        return(
            <div className="bote" style={styles}>
                <h3 className="bote__title" style={styles_bote__title}>{this.props.tipo}</h3>
                <div className="bote__content" style={styles_bote__content}>
                    {this._renderContenido()}
                </div>
            </div>
        );
    }
}

Bote.propTypes = {
    id: PropTypes.number,
    contenido: PropTypes.arrayOf(PropTypes.object),
    tipo: PropTypes.string,
    callbacks: PropTypes.object,
    enBote: PropTypes.bool,
    indexBote: PropTypes.number
}

export default Bote;