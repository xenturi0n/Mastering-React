import React, {Component} from 'react';

class Formulario extends Component {
    handleSubmit(event){
        console.log("Submitted values are: ", 
                    event.target.name.value, 
                    event.target.email.value);
        
        event.preventDefault();
    }
    handleReset(event){
        this.refs.name.value="";
        this.refs.email.value="";
        event.preventDefault();
    }
    
    render() {
        return (
            <form action="" className="small-12 columns" onSubmit={this.handleSubmit}>
                <fieldset className="fieldset small-8 columns">
                    <legend>Uncontrolled Components</legend>
                    <div className="row">
                        <div className="small-6 columns">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" ref="name"/>
                        </div>
                        <div className="small-6 columns end">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" ref="email"/>
                        </div>
                    </div>
                    <div className="row column">
                        <button type ="submit" className="button">Submit</button>{" "}
                        <button className="button alert" onClick={this.handleReset.bind(this)}>Reset</button>
                    </div>
                </fieldset>
                
            </form>
        );
    }
}

export default Formulario;