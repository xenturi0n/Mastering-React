import React, { Component } from 'react';
import { render } from 'react-dom';

import {Motion, spring, presets } from 'react-motion';


var wrapperStyle = {
    borderRadius: 4,
    backgroundColor: '#ccc',
    position: 'relative',
    width: 650,
    height: 50
}

var blockStyle = {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: 'yellow'
}

var buttonStyle = {
    display: 'inline-block',
    padding: 10,
    backgroundColor: 'black',
    color: 'white',
    outline: 'none'
}

class Demo extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isOpen: false
        };
    }
    
    handleClick(){
        this.setState({open: !this.state.open});
    }
    
    render(){
        var {isOpen} = this.state;
        
        return (
            <div>
                <button style={buttonStyle} onClick={e=>this.setState({isOpen: !this.state.isOpen})}>Run Animation</button>
                
                // <p>ease-in-out</p>
    			// <CSSDemo isOpen={isOpen} transition='ease-in-out' />
                
                <p>spring motion</p>
    			<MotionDemo isOpen={isOpen} />
            </div>
        );
    }
}

class CSSDemo extends Component{
    render(){
        var translateX = this.props.isOpen ? 600 : 0;
        console.log('Renderizando CSSDemo');
        return (
            <div>
                <div style={wrapperStyle}>
                    <div style={Object.assign ({}, 
                                               blockStyle, 
                                               {transition: `all 0.5s ${this.props.transition}`}, 
                                               {transform: `translateX(${translateX}px)`})}>
                    </div>
                </div>
            </div>
        );
    }
}

class MotionDemo extends Component{
    render(){
        return(
            <div>
                <Motion style={{x: spring(this.props.isOpen ? 600 : 0, presets.wobbly)}}>
                    { ({x}) =>
                            <div style={wrapperStyle}>
                                <div style={Object.assign({},
                                                          blockStyle,
                                                          {
                                                              WebkitTransform: `translate3d(${x}px, 0, 0)`,
                                                              transfrorm: `translate3d(${x}px, 0, 0)`
                                                          }
                                                          )}>
                                </div>
                            </div>
                   }
                </Motion>
            </div>
        );
    }
}
export default Demo; 