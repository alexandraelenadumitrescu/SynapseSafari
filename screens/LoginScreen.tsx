
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import type { DrawerNavigationProp } from '@react-navigation/drawer';

type LoginScreenProps = {
  navigation: DrawerNavigationProp<any>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Add real authentication logic
    if (email && password) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Log In" onPress={handleLogin} />
      <Text style={styles.link} onPress={() => navigation.navigate('Sign Up')}>Don't have an account? Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2d7be5', marginBottom: 16 },
  input: { width: 250, height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, marginBottom: 16, paddingHorizontal: 8 },
  link: { color: '#2d7be5', marginTop: 16 },
});
