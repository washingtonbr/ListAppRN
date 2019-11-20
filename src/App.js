import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  Colors,
  DefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import AuthScreen from './screens/Auth';
import PanelScreen from './screens/Panel';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.lightBlue600,
    accent: Colors.lightBlue700,
  },
};

const AppNavigator = createSwitchNavigator({
  Auth: AuthScreen,
  Panel: PanelScreen,
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppContainer />
    </PaperProvider>
  );
};
