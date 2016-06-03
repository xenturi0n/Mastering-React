import React, { Component, PropTypes } from 'react';


const styles = {
    width: '200px',
    height: '400px',
    border: '2px dashed #aaa',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}
const h4styles={
    textAlign: 'center'
}


class SourceContainer extends Component{    
    
    render(){
        
        return (
            <div>
                <h4 style={h4styles}>Source Container</h4>
                <div style={styles}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default SourceContainer;