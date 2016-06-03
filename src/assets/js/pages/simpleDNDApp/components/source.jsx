import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

const styles = {
    width: '100px',
    height: '100px',
    border: '2px dashed #aaa',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: '50%',
    cursor: 'move'
}

function collect(connect, monitor){
    return{
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        frase: "Una Frase"
    }
}

const spec ={
    beginDrag(props, monitor, component){
        const item= {id: 1};
        return item;
    }
}
class Source extends Component{
    render(){
        const { isDragging, connectDragSource } = this.props;
        return connectDragSource(
                <div style={styles}>
                    DragSource
                </div>
        );
    }
}

export default DragSource("SOURCE", spec, collect)(Source);