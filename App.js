import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Box from './src/componente/Box'
import turnOnOrOf from './src/reducers/turnOnOrOff'

const store = createStore(turnOnOrOf)


const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.box}>
        <Box color="orange" />
        <Box color="blue" />
      </SafeAreaView>
    </Provider>
  );
};

const styles = {
  box: { flex: 1 },
};

export default App;
