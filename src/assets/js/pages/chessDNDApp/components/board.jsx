import React, { Component, PropTypes } from 'react';
import _range from 'lodash/range';
import _map from 'lodash/map';
import _reverse from 'lodash/reverse';

import Square from './square.jsx';
import Knight from './knight.jsx';

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
                    <Square black={black}>
                        {piece}
                    </Square>
                </div>
            );
        });
        return squares;
    }

    _handleSquareClick(toX, toY){
        console.log(`toX: ${toX}   toY: ${toY}`);
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


export default Board;