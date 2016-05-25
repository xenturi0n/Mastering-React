import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimatedShoppingList extends Component{
    constructor(){
        super(...arguments);
        this.state={
            items: [
                {id:1, name: 'Milk'},
                {id:2, name: 'Yogurt'},
                {id:3, name: 'Orange juice'},
            ]
        }
    }
    
    handleChange(e){
        if(e.key === 'Enter'){
            let newItem = {id:Date.now(), name: e.target.value};
            let newItems = this.state.items.concat(newItem);
            e.target.value= '';
            this.setState({items: newItems});
        }
    }
    
    handleRemove(i){
        let newItems = this.state.items;
        newItems.splice(i,1);
        
        this.setState({items: newItems});
    }
    
    render(){
        
        var shoppingItems = this.state.items.map((item, i) =>(
            <div key = {item.id}
                 className = "item" 
                 onClick = {this.handleRemove.bind(this,i)} >                 
                {item.name}  
            </div>
        ));
        
        return(
            <div className="animatedShoppingList">
                <ReactCSSTransitionGroup transitionName = "example" 
                                         transitionEnterTimeout = {300}
                                         transitionLeaveTimeout = {300}
                                         transitionAppear = {true}
                                         transitionAppearTimeout = {300}>
                {shoppingItems}
                </ReactCSSTransitionGroup>
                <input type="text" value={this.state.newItem} onKeyDown={this.handleChange.bind(this)}/>
            </div>
        );
    }
};

export default AnimatedShoppingList;