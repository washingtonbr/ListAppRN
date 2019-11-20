import React from 'react';
import {
  StatusBar,
  SafeAreaView,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  Colors,
  DefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.lightBlue600,
    accent: Colors.lightBlue700,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Icon name="rocket" size={30} color="#900" />
        <Text>Hello World!</Text>
      </SafeAreaView>
    </PaperProvider>
  );
};