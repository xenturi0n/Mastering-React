import React, { Component, PropTypes } from 'react';
import _map from 'lodash/map';
import _range from 'lodash/range';

import Basura from './basura.jsx';

const styles={
    width:'100%',
    height: '20%',
    border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}


class BasuraList extends Component{
    _renderBasuras(){
        const basuras = this.props.basuras;
        
        return basuras.map((item, index)=>{
            return(
                <Basura id={item.id} 
                        descripcion={item.descripcion}
                        tipo={item.tipo} 
                        key={index}
                        indexBasura={index}
                        callbacks={this.props.callbacks} />
            );
        });        
    }
    
    render(){
        return(
            <div style={styles}>
                {this._renderBasuras()}
            </div>
        );
    }
}

BasuraList.propTypes = {
    basuras: PropTypes.arrayOf(PropTypes.object),
    callbacks: PropTypes.object
}

export default BasuraList;