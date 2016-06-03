import React, { Component, PropTypes } from 'react';
import _map from 'lodash/map';
import _range from 'lodash/range';

import Bote from './bote.jsx';

const styles = {
    width: '100%',
    height: '80%',
    border: '1px solid green',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
}

class BoteList extends Component{
    
    _renderBote(){
        const botesData = this.props.botes;
        
        const botes = botesData.map((item, index)=>{
            return (<Bote tipo={item.tipo} 
                          id={item.id} 
                          key={index} 
                          contenido={item.contenido}
                          indexBote={index} 
                          callbacks={this.props.callbacks}/>);
        });
        return botes;
    }
    
    render(){
        return(
            <div style={styles}>
                {this._renderBote()}
            </div>
        );
    }
}

BoteList.propTypes={
    botes: PropTypes.arrayOf(PropTypes.object),
    callbacks: PropTypes.object
}

export default BoteList;