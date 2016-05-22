import React, {Component} from 'react';
import KanbanBoard from './components/kanbanBoard.jsx'

let dataCards = [
    {
        id: 1,
        title: "Read The Book Pro React",
        description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
        color: '#BD8D31',
        status: "todo",
        tasks: [
            { id: 1, name: "Contact List Example", done: true },
            { id: 2, name: "Kanban Example", done: false },
            { id: 3, name: "My own experiments", done: false }
        ]
    },
    {
        id: 2,
        title: "Card Two title",
        description: "Card detailed description",
        color: '#3A7E28',
        status: "in-progress",
        tasks: []
    },
    {
        id: 3,
        title: "Card Three title",
        description: "Card detailed description",
        color: '#BC8DA1',
        status: "done",
        tasks: []
    },
];

class KanbanApp extends Component{
    render(){
        return(
            <KanbanBoard dataCards={dataCards}></KanbanBoard>
        );
    }
}

export default KanbanApp;