import React, {Component, PropTypes} from 'react';
import CardList from './cardList.jsx';

class KanbanBoard extends Component{
    render(){
        return(
            <div className="app">
                <CardList id="todo" title="To Do"
                          cards={
                              this.props.dataCards.filter((card)=>card.status === "todo")
                          } 
                          taskCallbacks={this.props.taskCallbacks} />
                          
                <CardList id="in-progress" title="In Progress"
                          cards={
                              this.props.dataCards.filter((card)=>card.status === "in-progress")
                          } 
                          taskCallbacks={this.props.taskCallbacks} />
                          
                <CardList id="done" title="Done"
                          cards={
                              this.props.dataCards.filter((card)=>card.status === "done")
                          } 
                          taskCallbacks={this.props.taskCallbacks}/>
            </div>
        );
    }
}

KanbanBoard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.object),
    taskCallbacks: PropTypes.object
}

export default KanbanBoard;