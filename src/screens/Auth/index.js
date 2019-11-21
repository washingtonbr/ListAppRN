import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import Header from '../../components/Header'
import SignInContainer from '../../containers/SignIn';
import SignUpContainer from '../../containers/SignUp';

export default function AuthScreen({
  navigation
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signIn() {
    navigation.navigate('Panel');
  }

  function signUp() {
    navigation.navigate('Panel');
  }

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <SignInContainer
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          signIn={signIn}
        />

        <SignUpContainer
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          signUp={signUp}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    paddingVertical: 18,
    paddingHorizontal: 10,
  },
});