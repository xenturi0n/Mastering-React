import React, {Component} from 'react';
import ContactsApp from './components/contactsApp.jsx';


import 'whatwg-fetch';

class ContactsAppContainer extends Component{
    constructor(){
        super();
        this.state={
            contacts: []
        };
    }
    
    componentDidMount(){
        fetch('contacts.json')
        .then((response)=>response.json())
        .then((responseData)=>{
            this.setState({contacts: responseData});  
        }).catch((err)=>{
            console.log('Error Fetching and Pharsing Data: ', err);
        });
    }
    
    render(){
        console.log("render ejecutado");
        return(
            <ContactsApp contacts={this.state.contacts} />
        );
    }
}

export default ContactsAppContainer;