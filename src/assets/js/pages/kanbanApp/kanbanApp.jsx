import React, {Component} from 'react';
import KanbanBoard from './components/kanbanBoard.jsx'
import update from 'react-addons-update';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Autorization: 'zdsdkfyw23425zxcvjh342542kjh'
};

class KanbanApp extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            cards: []
        }
    }
    
    _addTask(cardId, taskName){
        console.log(`_addTask carId: ${cardId} taskName: ${taskName}`);
        let prevState = this.state;
        
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        
        let newTask = {id:Date.now(), name: taskName, done: false};
        
        let nextState = update(this.state.cards, {
                            [cardIndex]: {
                                tasks: {$push: [newTask]}
                            }
                        });
                        
        this.setState({cards: nextState});
        
        fetch(`${API_URL}/cards/${cardId}/tasks`,{
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newTask)
        })
        .then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Server response wasn'n OK")
            }
        })
        .then((responseData) => {
            newTask.id = responseData.id;
            this.setState({cards:nextState});
        })
        .catch((err) => {
            this.setState(prevState);
        });
    }
    
    _deleteTask(cardId, taskId, taskIndex){
        console.log(`_deleteTask carId: ${cardId} taskId: ${taskId} taskIndex: ${taskIndex}`);
        
        let prevState = this.state
        
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$splice: [[taskIndex, 1]]}
            }
        });
        
        this.setState({cards: nextState});
        
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`,{
           method: 'delete',
           header: API_HEADERS 
        })
        .then((response) => {
            if(!response.ok){
                throw new Error("Server response wasn't OK")
            }
        })
        .catch((error) => {
            console.log('Fetch error:', error);
            this.setState(prevState);
        });
    }
    
    _toggleTask(cardId, taskId, taskIndex){
        console.log(`_toggleTask carId: ${cardId} taskId: ${taskId} taskIndex: ${taskIndex}`);
        
        let prevState = this.state;
        
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);
        
        let newDoneValue;
        
        let nextState = update(this.state.cards, {
                            [cardIndex]: {
                                tasks: {
                                    [taskIndex]: {
                                        done: {
                                            $apply: (done) => {
                                                newDoneValue = !done
                                                return newDoneValue;
                                            }
                                        }
                                    }
                                }
                            }
                        });
                        
        this.setState({cards: nextState});
        
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`,{
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify({done: newDoneValue})
        })
        .then((response) => {
            if(!response.ok){
                throw new Error("Server response wasn't OK");
            }
        })
        .catch((error) => {
            console.error("Fetch error:", error);
            this.setState(prevState);
        })
    }
    
    componentDidMount(){
        fetch(API_URL + '/cards', {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            this.setState({cards: responseData});
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error)
        });
    }
    
    render(){
        console.log('Renderizando KanbanApp');
        return(
            <KanbanBoard dataCards={this.state.cards} 
                         taskCallbacks={{
                             toggle: this._toggleTask.bind(this),
                             delete: this._deleteTask.bind(this),
                             add: this._addTask.bind(this)
                         }}></KanbanBoard>
        );
    }
}

export default KanbanApp;