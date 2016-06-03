import React, { Component } from 'react';

import ContenedorContext from './components/contenedorContext.jsx';
import BasuraList from './components/basuraList.jsx';
import BoteList from './components/boteList.jsx';

import update from 'react-addons-update';

const data = {
    basuras: [
        {
            tipo: 'organica',
            descripcion: 'cascara de platano',
            id: 1,
            enBote: false
        },
        {
            tipo: 'organica',
            descripcion: 'papel',
            id: 2,
            enBote: false
        },
        {
            tipo: 'inorganica',
            descripcion: 'vidrio',
            id: 3,
            enBote: false
        },
        {
            tipo: 'inorganica',
            descripcion: 'bote de plastico',
            id: 4,
            enBote: false
        }
    ],
    botes: [{
        tipo: 'organica',
        contenido: [],
        id: 1
    }, {
            tipo: 'inorganica',
            contenido: [],
            id: 2
        }]
};


class DustbinApp extends Component {
    constructor(props) {
        super(...props);
        this.state = data;
    }

    render() {
        const callbacks = {
            delBasuraFromBote: this._delBasuraFromBote.bind(this),
            delBasuraFromBasuras: this._delBasuraFromBasuras.bind(this),
            delBasuraFromBasurasAddBasuraToBote: this._delBasuraFromBasurasAddBasuraToBote.bind(this),
            delBasuraFromBoteAddBasuraToBasuras: this._delBasuraFromBoteAddBasuraToBasuras.bind(this)
        };
        return (
            <ContenedorContext>
                <BasuraList basuras={this.state.basuras} callbacks={callbacks}/>
                <BoteList botes={this.state.botes} callbacks={callbacks}/>
            </ContenedorContext>
        );
    }

    _delBasuraFromBote(e, indexBote, indexBasura) {
        let newConenido = update(this.state, {
            botes: {
                [indexBote]: {
                    contenido: {
                        $splice: [[indexBasura, 1]]
                    }
                }
            }
        }
        );
        this.setState(newConenido);
    }

    _delBasuraFromBasuras(e, indexBasura) {

        let newState = update(this.state, {
            basuras: { $splice: [[indexBasura, 1]] }
        });
        console.log("newState: ", newState);

        this.setState(newState, () => { console.log("this.state Inside: ", this.state) });

        console.log("this.state: ", this.state);
    }

    _delBasuraFromBasurasAddBasuraToBote(e, indexBasura) {
        const basura = this.state.basuras[indexBasura];
        const indexBote = this.state.botes.map((bote) => bote.tipo).indexOf(basura.tipo);

        let newState = update(this.state, {
            basuras: {
                [indexBasura]: {
                    enBote: {
                        $set: true
                    }
                }
            }
        });
        
        newState.botes[indexBote].contenido.push(newState.basuras[indexBasura]);
        newState.basuras.splice(indexBasura, 1);
        
        this.setState(newState);
    }

    _delBasuraFromBoteAddBasuraToBasuras(e, indexBasura, indexBote) {
        
        let newState = update(this.state, {
            botes: {
                [indexBote]: {
                    contenido: {
                        [indexBasura]: {
                            enBote: {
                                $set: false
                            }
                        }
                    }
                }
            }
        });
        
        newState.basuras.push(newState.botes[indexBote].contenido[indexBasura]);
        newState.botes[indexBote].contenido.splice(indexBasura,1);
        
        this.setState(newState);
        
    }
};


export default DustbinApp;