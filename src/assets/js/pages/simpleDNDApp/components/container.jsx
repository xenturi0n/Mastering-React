import React, { Component, PropTypes } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';


const styles = {
    width: '700px',
    height: '500px',
    border: '2px dashed #aaa',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

class Container extends Component{
    render(){
        return(
            <div>
                <h3>Drag Context</h3>
                <div style={styles}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Container);