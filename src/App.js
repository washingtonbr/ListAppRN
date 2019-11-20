import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello World!</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
