import React, { Component, PropTypes } from 'react';

const styles_basura = {
    border: '2px dashed black',
    padding: '5px'
}

class Basura extends Component {
    _handleClick(e) {
        const {callbacks, id, tipo, enBote, indexBote, indexBasura, descripcion} = this.props
        if (callbacks && enBote) {
            console.log(`indexBote: ${indexBote}   indexBasura: ${indexBasura}`);
            callbacks.delBasuraFromBoteAddBasuraToBasuras(e, indexBasura, indexBote);e, indexBasura, indexBote
        } else if (callbacks && !enBote) {
            callbacks.delBasuraFromBasurasAddBasuraToBote(e, indexBasura);
        }
    }

    render() {
        return (
            <div className="basura" style={styles_basura} onClick={this._handleClick.bind(this) }>
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

export default Basura;