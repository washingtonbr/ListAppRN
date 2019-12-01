import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Title, TextInput, Button, Colors } from 'react-native-paper';

export default function SignUpContainer({
  email,
  setEmail,
  password,
  setPassword,
  signUp,
}) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Title>Create your account</Title>

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
          onPress={signUp}>
          Sign Up
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  content: {
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  formInput: {
    backgroundColor: Colors.white,
    marginVertical: 8,
  },
  formButton: {
    marginVertical: 8,
  },
});