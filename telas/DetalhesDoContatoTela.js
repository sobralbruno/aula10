import React from 'react';

import { View, StyleSheet, Text } from 'react-native';


const DetalhesDoContatosTela = (props) => {
    return (
        <View>
            {DetalhesDoContatosTela}
        </View>
    )
}

DetalhesDoContatosTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam("tituloLugar")
    }
}


const estilos = StyleSheet.create({});

export default DetalhesDoContatosTela;
