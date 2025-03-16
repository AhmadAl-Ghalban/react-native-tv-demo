import { useNavigation } from '@react-navigation/native';
import React, { use, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  useTVEventHandler,
  Alert
} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [focusedButton, setFocusedButton] = useState('username'); // Track focus
  const navigation= useNavigation();
  // Handle TV Remote Up/Down Navigation
  useTVEventHandler((event) => {
    if (event.eventType === 'up') {
      setFocusedButton((prev) => (prev === 'password' ? 'username' : 'password'));
    } else if (event.eventType === 'down') {
      setFocusedButton((prev) => (prev === 'username' ? 'password' : 'login'));
    } else if (event.eventType === 'select') {
      if (focusedButton === 'login') handleLogin();
    }
  });

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Video'); // Navigate to video screen after login
    } else {
      Alert.alert('Please enter valid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TV Login</Text>

      {/* Username Input */}
      <TextInput
        style={[styles.input, focusedButton === 'username' ? styles.focused : {}]}
        placeholder="Username"
        placeholderTextColor="#ccc"
        onChangeText={setUsername}
        showSoftInputOnFocus={true} // Ensures keyboard appears on focus
        autoFocus
      />

      {/* Password Input */}
      <TextInput
        style={[styles.input, focusedButton === 'password' ? styles.focused : {}]}
        placeholder="Password"
        placeholderTextColor="#ccc"
        secureTextEntry
        onChangeText={setPassword}
        showSoftInputOnFocus={true} // Ensures keyboard appears on focus

      />

      {/* Login Button */}
      <TouchableOpacity
        onPress={handleLogin}
        style={[styles.button, focusedButton === 'login' ? styles.focusedButton : {}]}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  title: { fontSize: 24, color: 'white', marginBottom: 20 },
  input: {
    width: '80%',
    padding: 15,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  focused: { borderColor: 'yellow', borderWidth: 2 }, // Highlight the focused input
  button: { backgroundColor: 'blue', padding: 15, borderRadius: 10, marginTop: 10 },
  buttonText: { color: 'white', fontSize: 18 },
  focusedButton: { borderColor: 'yellow', borderWidth: 2 }, // Highlight focused button
});

export default LoginScreen;
