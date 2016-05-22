import React, {Component} from 'react';
import KanbanBoard from './components/kanbanBoard.jsx'

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
    
    componentDidMount(){
        fetch(API_URL + '/cards', {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({cards: responseData});
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error)
        });
    }
    
    render(){
        return(
            <KanbanBoard dataCards={this.state.cards}></KanbanBoard>
        );
    }
}

export default KanbanApp;