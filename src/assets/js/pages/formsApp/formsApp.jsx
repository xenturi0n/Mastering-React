import React, {Component} from 'react';
import Search from './components/search.jsx';
import Formulario from './components/form.jsx';


class FormsApp extends Component{
    render(){
        return(
            <div className="row">
                <Search />
                <Formulario />
            </div>
            
        );
    }
}

export default FormsApp;