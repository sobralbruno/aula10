import { ADD_LUGAR } from "./lugares-actions";
import Lugar from '../modelo/Contato'
const estadoInicial = {
    lugares: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_LUGAR:
            const l = new Lugar(action.dadosContato.id.toString, action.dadosContato.nome,action.dadosContato.telefone, action.dadosContato.imagem);
            return {
                lugares: estado.lugares.concat(l)
            };
        default:
            return estado;
    }
}