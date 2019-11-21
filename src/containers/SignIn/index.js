import React from 'react';
import { StyleSheet } from 'react-native';
import { Title, TextInput, Button, Colors } from 'react-native-paper';

export default function SignInContainer({
  email,
  setEmail,
  password,
  setPassword,
  signIn,
}) {
  return (
    <>
    <Title>Get organized now!</Title>

    <TextInput
        style={styles.formInput}
        mode="outlined"
        label='Email'
        value={email}
        onChangeText={val => setEmail(val)}
    />

    <TextInput
        style={styles.formInput}
        mode="outlined"
        label='Password'
        value={password}
        onChangeText={val => setPassword(val)}
    />

    <Button
        style={styles.formButton}
        mode="contained"
        onPress={signIn}>
        Sign In
    </Button>
    </>
  );
}

const styles = StyleSheet.create({
  formInput: {
    backgroundColor: Colors.white,
    marginVertical: 8,
  },
  formButton: {
    marginVertical: 8,
  },
});