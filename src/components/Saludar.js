import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

export default function Saludar (props) {

    const {nombre} = props;
    return (
        <Text>Hola {nombre}!!!</Text>
    )
}


// Default props
Saludar.defaultProps = {
    nombre: 'Desconocido'
}


// PropTypes
Saludar.propTypes = {
    nombre: PropTypes.string.isRequired
}