import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Icon name="rocket" size={30} color="#900" />
        <Text>Hello World!</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
