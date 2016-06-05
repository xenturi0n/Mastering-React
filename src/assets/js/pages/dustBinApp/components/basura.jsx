import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import update from 'react-addons-update';


const styles_basura = {
    border: '2px dashed black',
    padding: '5px'
}

const specBasuraSource = {
   
    beginDrag(props, monitor, component) {
        const item = {
            id: props.id,
            indexBote: props.indexBote,
            indexBasura: props.indexBasura,
            enBote: props.enBote,
            tipo: props.tipo
        };
        return item;
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return;
        }


        if (props.enBote) {
            console.log("en bote");
        } else {
            const tipoBote = monitor.getDropResult().tipo;
            const tipoBasura = props.tipo;
            
            if(tipoBote === tipoBasura){
                props.callbacks.delBasuraFromBasurasAddBasuraToBote(null, props.indexBasura);
            }else{
                console.log("no se puede depositar aqui ese tipo de basura");
            }
        }
    }
}

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
        didDrop: monitor.didDrop()
    };
}


class Basura extends Component {
    _handleClick(e) {
        const {callbacks, id, tipo, enBote, indexBote, indexBasura, descripcion} = this.props
        if (callbacks && enBote) {
            console.log(`indexBote: ${indexBote}   indexBasura: ${indexBasura}`);
            callbacks.delBasuraFromBoteAddBasuraToBasuras(e, indexBasura, indexBote); e, indexBasura, indexBote
        } else if (callbacks && !enBote) {
            callbacks.delBasuraFromBasurasAddBasuraToBote(e, indexBasura);
        }
    }

    render() {
        const {connectDragSource, isDragging} = this.props;
        const opacity = isDragging ? 0.1 : 1;
        const newStyle = update(styles_basura, {$merge: {opacity: opacity}});
        return connectDragSource(
            <div className="basura" style={newStyle} onClick={this._handleClick.bind(this) }>
                {this.props.descripcion}
            </div>
        );
    }
}

Basura.propTypes = {
    id: PropTypes.number,
    descripcion: PropTypes.string,
    tipo: PropTypes.string,
    descripcion: PropTypes.string,
    callbacks: PropTypes.object,
    indexBote: PropTypes.number
}

export default DragSource("BASURA", specBasuraSource, collect)(Basura);