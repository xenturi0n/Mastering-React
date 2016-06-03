import React, { Component } from 'react';
import Container from './components/container.jsx';
import Target from './components/target.jsx';
import SourceContainer from './components/sourceContainer.jsx';
import Source from './components/source.jsx';

class SimpleDNDApp extends Component{
    constructor(props){
        super();
        this.state={
            id:''
        }
    }
    render(){
        return (
            <Container>
                <SourceContainer>
                    <Source />
                </SourceContainer>
                <Target onDrop={(id)=>this._handleOndrop}>
                    { this.state.id==1 && "id=1"}
                </Target>
            </ Container>
        );
    }
    
    _handleOnDrop(id){
        this.setState({id: id});
    }
}

export default SimpleDNDApp;