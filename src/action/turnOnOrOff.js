import Interruptor from './action/actionType'
export default turnOnOrOff = (ligado) => {
    return {type: Interruptor.alternar, ligado: ligado}
}