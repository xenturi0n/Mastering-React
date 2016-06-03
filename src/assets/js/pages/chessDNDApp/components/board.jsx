import React, { Component, PropTypes } from 'react';
import _range from 'lodash/range';
import _map from 'lodash/map';
import _reverse from 'lodash/reverse';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';



import Square from './square.jsx';
import Knight from './knight.jsx';
import BoardSquare from './boardSquare.jsx';


import { moveKnight, canMoveKnight } from './game.js';
 
class Board extends Component {
    _renderSquares() {
        var squares = _map(_range(64), (i) => {
            var x = i % 8;
            var y = Math.floor(i / 8);
            var black = (x + y) % 2 === 1;

            var knightX = this.props.knightPosition[0];
            var knightY = this.props.knightPosition[1];

            var piece = (x === knightX && y === knightY) ?
                <Knight /> :
                null;
            return (
                <div key={i} 
                     style={{width:'80px', height:'80px'}} 
                     onClick={()=> this._handleSquareClick(x, y)}>
                    <BoardSquare x={x} y={y}>
                        {this._renderPiece(x, y)}
                    </BoardSquare>
                </div>
            );
        });
        return squares;
    }
    
    _renderPiece(x,y){
        const[knightX, knightY] = this.props.knightPosition;
        return (x === knightX && y === knightY) ? <Knight /> : null;
    }
    
    _handleSquareClick(toX, toY){
        // console.log(`toX: ${toX}   toY: ${toY}`);
        canMoveKnight(toX, toY) ? moveKnight(toX, toY) : null;
    }
    
    render() {
        let squares = this._renderSquares();
        const styles = {
            display: 'flex',
            width: '640px',
            minWidth: '640px',
            flexWrap: 'wrap'
        }
        return (
            <div style={styles}>
                {squares}
            </div>
        );
    }
}

Board.propTypes = {
    knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
}


export default DragDropContext(HTML5Backend)(Board);