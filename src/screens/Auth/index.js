import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../../components/Header'

export default function AuthScreen({
  navigation
}) {
  return (
    <>
      <Header />
      <Text>Auth</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Panel')}>
        Go to Panel
      </Button>
    </>
  );
}