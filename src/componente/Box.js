import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import turnOnOrOff from '../action/turnOnOrOff'

const Box = ({ color, dispatch, ligado }) => {
    const { on, setOn } = useState(true)
    return (
        <View style={{ alignSelf: 'center', flex: 1 }}>
            <Text>REDUX</Text>
            <Text>Exemplo:</Text>
            <Button title="Ligar/Desligar" onPress={() => setOn(!on)} />
            <Button title="Ligar/Desligar TODAS CAIXAS" onPress={() => dispatch(turnOnOrOff(!ligado))} />
            <View style={[styles.box, { backgroundColor: color }]}>
                {ligado ? <Text>Ligado</Text> : <Text>Desligado</Text>}
            </View>
        </View>
    );
};

const mapStoreToProps = (store) => {
    return {
        ligado: store.ligado
    }
}

const styles = {
    box: { flex: 1 },
};

export default connect(mapStoreToProps)(Box)