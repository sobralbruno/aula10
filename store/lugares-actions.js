export const ADD_LUGAR = 'ADD_LUGAR';
import * as FileSystem from 'expo-file-system';
import {inserirContato} from '../helpers/db';

export const addContato = (nome,telefone, imagem) => {
    return async dispatch =>{
        //file://diretorio/outrodiretorio/nome.png
        const nomeArquivo = imagem.split("/").pop();
        const novoPath =  FileSystem.documentDirectory + nomeArquivo;
        try{    
            FileSystem.moveAsync({
                from: imagem,
                to: novoPath
            });
            const resultadoBD =  await inserirContato(
                nome,
                telefone,
                novoPath,
            );
            console.log(JSON.stringify(resultadoBD));
            dispatch({type: ADD_LUGAR, dadosContato: {id: resultadoBD.insertId, nome: nome, telefone:telefone, imagem: novoPath} });
        }
        catch{
            console.log(err);
            throw err;
        }
        
    }
}


