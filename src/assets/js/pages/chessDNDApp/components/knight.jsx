import React, { Component }from 'react';

class Knight extends Component{
    render(){
        const styles={
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4em'
        }
        return(
            <span style={styles} className="knight">&#9816;</span>
        );
    }
}


export default Knight;