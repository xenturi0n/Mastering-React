import React, { Component, PropTypes }from 'react';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const knightSource={
    beginDrag(props){
        return {};
    }
}

function collect(connect, monitor){
    return{
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}


class Knight extends Component{
    render(){
        const styles={
            opacity: isDragging ? 0.5 : 1,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '4em',
            cursor: 'move',
            fontWeight: 'bold'
        }
        const { connectDragSource, isDragging } = this.props;
        
        return connectDragSource(
            <div style={styles} className="knight">&#9816;</div>
        );
        
    }
}

Knight.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);