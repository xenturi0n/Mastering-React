import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    }
}

const spec = {   
    drop(props, monitor) {
      console.log(monitor.getItem());
    }
}


class Target extends Component {
    render() {
        const { isOver, canDrop, connectDropTarget } = this.props;
        let backgroundColor='';
        
        if (isOver && canDrop){
            backgroundColor='green';
        }else if (!isOver && canDrop){
            backgroundColor='yellow';
        }else if(isOver && !canDrop){
            backgroundColor='red';
        }else{
            backgroundColor='#eee';
        }
        
        
        const styles = {
            width: '300px',
            height: '400px',
            border: '2px dashed #aaa',
            margin: '10px',
            backgroundColor: backgroundColor
        }

        const h4styles = {
            textAlign: 'center'
        }
        
        return connectDropTarget(
            <div>
                <h4 style={h4styles}>Dropp Target</h4>
                <div style={styles}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DropTarget("SOURCE", spec, collect)(Target);