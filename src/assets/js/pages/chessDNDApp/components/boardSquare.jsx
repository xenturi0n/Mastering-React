import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';

import { canMoveKnight, moveKnight } from './game';
import {ItemTypes } from './Constants';
import Square from './square.jsx';

const squareTarget = {
    drop( props ){
        moveKnight(props.x, props.y);
    }
};

function collect(connect, monitor){
    return{
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
}


class BoardSquare extends Component{
    render(){
        const { x, y, connectDropTarget, isOver } = this.props;
        const black = ( x + y ) % 2 === 1;
        const styles={
            position: 'relative',
            width: '100%',
            height: '100%'
        };
        // console.log(isOver ? "Is Over" : '');
        return connectDropTarget(
            <div style={styles}>
                <Square black={black}>
                    {this.props.children}
                </Square>                
                {isOver && <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: '100%',
                    zIndex: 1,
                    opacity: 0.5,
                    backgroundColor: 'yellow'
                    
                }}></div>}
            </div>
        );
    }
}


BoardSquare.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    isOver: PropTypes.bool.isRequired
}
//ItemTypes.KNIGHT tipo de Drag Source que sera arrastrado a este contenedor
//squareTarget callback que sera ejecutado cuando se suelte el elemento source
//collect

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);