import React from 'react';

import { View, StyleSheet, Text, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';
import BotaoCabecalho from '../componentes/BotaoCabecalho';

import ContatoItem from '../componentes/ContatoItem'

const ListaDeContatosTela = (props) => {
    const lugares = useSelector(estado => estado.lugares.lugares)
    return (
        <FlatList
            data={lugares}
            keyExtractor={contato => contato.id}
            renderItem={contato =>
                <ContatoItem
                    nome={contato.item.nome}
                    onSelect={() => {
                        props.navigation.navigate('DetalheDoContato',
                            { nome: contato.item.nome, telefone: contato.item.telefone, idLugar: contato.id })
                    }}
                    imagem={contato.item.imagemURI}
                    endereco={null}
                />
            }
        />
    )
}

ListaDeContatosTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: 'Lista de Contatos',
        headerRight:
            <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate("NovoContato") }}
                />
            </HeaderButtons>
    }
}


const estilos = StyleSheet.create({});

export default ListaDeContatosTela;