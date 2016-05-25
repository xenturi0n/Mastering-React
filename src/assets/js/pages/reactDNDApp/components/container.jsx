import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ShoppingCart from './ShoppingCart';
import Snack from './Snack';

const snacksData=[
    {name: 'Chips'},
    {name: 'Cupcake'},
    {name: 'Donut'},
    {name: 'Doritos'},
    {name: 'Popcorn'}  
];


class Container extends Component{
    
    render(){
        let snacks = snacksData.map((snack)=><Snack name={snack}/>);
        return(
            <div className="dnd-container">
                {snacks}
                <ShoppingCart />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Container);