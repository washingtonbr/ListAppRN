import React from 'react';
import { StatusBar } from 'react-native';
import { Appbar, Colors } from 'react-native-paper';

export default function App({
  showBackButton
}) {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.lightBlue700}
        barStyle="dark-content"
      />

      <Appbar.Header>
        {showBackButton &&
          <Appbar.BackAction
            onPress={() => {}}
          />}

        <Appbar.Content
          title="ListApp.me"
        />

        <Appbar.Action icon="magnify" />
      </Appbar.Header>
    </>
  );
}