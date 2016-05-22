import React, {Component, PropTypes} from 'react';
import Card from './card.jsx';


class CardList extends Component{
    render(){
        var cards = this.props.cards.map((card)=>{
            return (<Card id={card.id}
                          key={card.id}
                          description = {card.description}
                          title = {card.title}
                          tasks = {card.tasks} 
                          color = {card.color} />);
            });
        return(
            <div className="cardList">
                <h1>{this.props.title}</h1>
                {cards}
            </div>
        );
    }
}

CardList.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(PropTypes.object)
}
export default CardList;