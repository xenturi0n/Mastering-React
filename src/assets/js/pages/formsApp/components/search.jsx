import React, {Component} from 'react';


class Search extends Component{
    constructor(){
        super();
        this.state = {
            searchTerm: "React"
        }
    }
    
    handleChange(event){
        this.setState({searchTerm: event.target.value});
    }
    
    render(){
        console.log('Rendering Search input <<<<<<<<<');
        return(
            <div className="row">
                <label className="small-2 columns text-right middle">Search Term:</label>
                <div className="small-8 columns end">
                    <input type="search" value={this.state.searchTerm} 
                           onChange={this.handleChange.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Search;