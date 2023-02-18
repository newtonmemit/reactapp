import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

function LoginPage({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // perform login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>BOTMS</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>BOTMS</Text>
      <Text>This is the dashboard for the truck driver</Text>
    </View>
  );
}

function Admin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>BOTMS</Text>
      <Text>This is the admin page for tracking truck movements</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  button: {
    width: '80%',
    padding: 10,
    backgroundColor: '#0099ff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export { Login, Dashboard, driver };
