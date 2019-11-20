import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Icon name="rocket" size={30} color="#900" />
        <Text>Hello World!</Text>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
