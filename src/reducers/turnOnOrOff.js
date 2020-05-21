import Interruptor from '../action/actionType'

export default (state = {ligado:false}, action) => {
    switch (action.type) {
        case Interruptor.alternar:
            return {
                ligado: action.ligado   
            }
        default:
            return state
    }
}