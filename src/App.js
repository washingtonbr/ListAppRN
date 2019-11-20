import React from 'react';
import { Text } from 'react-native';
import {
  Colors,
  DefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import Header from './components/Header';

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
      <Header />
      <Text>Hello World!</Text>
    </PaperProvider>
  );
};