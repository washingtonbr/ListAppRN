import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import Header from '../../components/Header'

export default function PanelScreen({
  navigation
}) {
  return (
    <>
      <Header />
      <Text>Panel</Text>
      <Button mode="contained" onPress={() => navigation.navigate('Auth')}>
        Back to Auth
      </Button>
    </>
  );
}