import React, { Component } from 'react';

const styles = {
    widht: '500px',
    height: '300px',
    border: '2px dashed #777',
    display: 'flex',
    flexDirection: 'column'
}

class ContenedorContext extends Component{
    render(){
        return(
            <div className="contenedorContext" style={styles}>
                {this.props.children}
            </div>
        );
    }
}

export default ContenedorContext;