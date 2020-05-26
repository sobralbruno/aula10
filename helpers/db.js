import * as SQlite from 'expo-sqlite';

const db = SQlite.openDatabase ("lugares.db");

export const init = ()=>{
    const promise = new Promise ((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql('CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, telefone TEXT NOT NULL, imagemUri TEXT NOT NULL);',
                [],
                () => { resolve () },
                (_, err) => { reject (err) }
            );
        });
    });
    return promise;
}

export const inserirContato = (nome,telefone, imagemUri) =>{
    const promise = new Promise ((resolve, reject)=>{
        db.transaction((tx)=>{
            tx.executeSql(
                'INSERT INTO tb_contato (nome,telefone, imagemUri) VALUeS (?,?,?);',
                [nome,telefone, imagemUri],
                (_, resultado) => { resolve ( resultado) },
                (_, err) => { reject (err) }
            );
        });
    });
    return promise;
} 
