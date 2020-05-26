import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { View, StyleSheet, Text, Button, ScrollView, TextInput } from 'react-native';
import Cores from '../constantes/Cores';
import * as lugaresActions from '../store/lugares-actions';
import TiraFoto from '../componentes/TiraFoto';


const NovoContatoTela = (props) => {
    const [novoNome, setNovoNome] = useState('');
    const [novoTelefone, setNovoTelefone] = useState('');

    const dispatch = useDispatch();
    const novoNomeAlterado = (texto) => {
        setNovoNome(texto);
    }
    const novoTelefoneAlterado = (texto) => {
        setNovoTelefone(texto);
    }

    const [imagemURI, setImagemURI] = useState();

    const fotoTirada = (imagemURI) => {
        setImagemURI(imagemURI);
    }

    const adicionarContato = () => {
        dispatch(lugaresActions.addContato(novoNome,novoTelefone, imagemURI));
        props.navigation.goBack();
    }
    return (
        <ScrollView>
            <View style={estilos.form}>
                <Text style={estilos.contato}>Nome</Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={novoNomeAlterado}
                    value={novoNome}
                />
                <Text style={estilos.contato}>Telefone</Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={novoTelefoneAlterado}
                    value={novoTelefone}
                />
                <TiraFoto onFotoTirada={fotoTirada} />
                <Button
                    title="Salvar Contato"
                    color={Cores.primary}
                    onPress={adicionarContato}
                />
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
    form: {
        margin: 30
    },
    contato: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: "#DDD",
        borderBottomWidth: 2,
        marginBottom: 15,
        paddingVertical: 4
    }

});

export default NovoContatoTela;