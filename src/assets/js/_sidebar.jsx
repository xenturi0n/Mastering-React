import React from 'react';

const links = [
    {
        text: "link1",
        url: "#/pagina1"
    },
    {
        text: "link2",
        url: "#/pagina2"
    },
    {
        text: "link4",
        url: "#/pagina4"
    },
    {
        text: "link5",
        url: "#/pagina5"
    },
    {
        text: "link6",
        url: "#/pagina6"
    }
];

const LinkItem = React.createClass({
    render: function(){
        return(
            <li>
                <a href={this.props.url}>{this.props.text}</a>
            </li>
        );
    }
});


const SideBar = React.createClass({
    _linkItems: function(){
        var linkItems = [];
        links.map(function(linkItem){
            linkItems.push(<LinkItem url={linkItem.url} text={linkItem.text}/>);
        });
        return linkItems;
    },    
    render: function(){
        return(
            <ul className="small-12 columns menu vertical">
                {this._linkItems()}
            </ul>            
        );
    }
});


export default SideBar;