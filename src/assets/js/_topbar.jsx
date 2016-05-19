import React from 'react';



const TopBar = React.createClass({
    render: function(){
        return(
            <div className="small-8 columns small-offset-4">
                <h4 className="text-center">{this.props.title}</h4>
            </div>            
        );
    }
});


export default TopBar;