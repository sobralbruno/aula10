import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Cores from '../constantes/Cores'



const ContatoItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onSelect} style={estilos.contatoItem}>
            <Image
                style={estilos.imagem}
                source={{ uri: props.imagem }}
            />
            <View style={estilos.infoContainer}>
                <Text style={estilos.contato}>{props.nome}</Text>
                <Text style={estilos.contato}>{props.telefone}</Text>
            </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    contatoItem: {
        flexDirection: 'row',
        borderBottomColor: '#green',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: 'center'
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    imagem: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#CCC',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    contato: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    

});

export default ContatoItem;