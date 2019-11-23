import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Header from '../../components/Header'
import SignInContainer from '../../containers/SignIn';
import SignUpContainer from '../../containers/SignUp';

export default function AuthScreen({
  navigation
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tabsState, setTabsState] = useState({
    index: 0,
    routes: [
      { key: 'SignInTab', title: 'Sign In' },
      { key: 'SignUpTab', title: 'Sign Up' },
    ],
  });

  function signIn() {
    navigation.navigate('Panel');
  }

  function signUp() {
    navigation.navigate('Panel');
  }

  const SignInTab = () => <SignInContainer
    email={email}
    setEmail={setEmail}
    password={password}
    setPassword={setPassword}
    signIn={signIn}
  />;

  const SignUpTab = () => <SignUpContainer
    email={email}
    setEmail={setEmail}
    password={password}
    setPassword={setPassword}
    signUp={signUp}
  />;

  return (
    <>
      <Header
        hiddenSearchButton={true}
      />
      <TabView
        navigationState={tabsState}
        renderScene={SceneMap({
          SignInTab,
          SignUpTab,
        })}
        onIndexChange={index => setTabsState({ ...tabsState, index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    </>
  );
}