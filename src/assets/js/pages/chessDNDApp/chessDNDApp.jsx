import React, { Component } from 'react';

import Board from './components/board.jsx';

import { observe } from './components/game.js';

var rootEl = document.getElementById('root');

var styles = {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}



class ChessDNDApp extends Component {
    constructor(){
        super();
        this.state={
            knightPosition: [0,0]
        }
    };
    
    componentDidMount(){
        observe((knightPosition)=>{this.setState({knightPosition: knightPosition})});
    };
    
    render() {
        return (
            <div style={styles}>
                <Board knightPosition={this.state.knightPosition} />
            </div>
        );
    };
}


export default ChessDNDApp;