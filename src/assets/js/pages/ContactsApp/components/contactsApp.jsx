import React, {Component, PropTypes} from 'react';
import SearchBar from './searchBar.jsx';
import ContactList from './contactList.jsx';




// let contacts = [
//     { name: "Cassio Zen", email: "cassiozen@gmail.com" },
//     { name: "Dan Abramov", email: "gaearon@somewhere.com" },
//     { name: "Pete Hunt", email: "floydophone@somewhere.com" },
//     { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
//     { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
//     { name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
// ]


class ContactsApp extends Component {
    constructor(){
        super();
        this.state={
            filterText: ''
        }
    };
    
    handleUserInput(searTerm){
        this.setState({filterText: searTerm});  
    };
    
    render() {
        return (
            <div className="row">
                <div className="small-6 columns callout">
                    <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
                    {
                        this.props.contacts
                        ?
                        <ContactList contacts={this.props.contacts} filterText={this.state.filterText}/>
                        :
                        "Loading ...."                        
                    }
                    
                </div>
            </div>
        );
    }
}

ContactsApp.PropTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsApp;