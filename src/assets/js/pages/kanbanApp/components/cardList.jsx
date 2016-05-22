import React, {Component, PropTypes} from 'react';
import Card from './card.jsx';


class CardList extends Component{
    render(){
        var cards = this.props.cards.map((card)=>{
            return (<Card key={card.id} taskCallbacks={this.props.taskCallbacks} {...card}/>);
            });
        return(
            <div className="cardList">
                <h3>{this.props.title}</h3>
                {cards}
            </div>
        );
    }
}

CardList.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
}
export default CardList;