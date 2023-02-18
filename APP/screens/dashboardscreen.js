import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import constants from './constants';

const Dashboard = () => {
  const [materials, setMaterials] = useState([]);

  const handleAddMaterial = () => {
    // Code for adding a new material to the materials list
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Material name"
          onChangeText={text => setMaterialName(text)}
          value={materialName}
        />
        <TextInput
          style={styles.input}
          placeholder="Units"
          onChangeText={text => setUnits(text)}
          value={units}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddMaterial}>
          <Text style={styles.buttonText}>Add Material</Text>
        </TouchableOpacity>
        <View style={styles.materialsContainer}>
          {materials.map(material => (
            <View style={styles.material} key={material.id}>
              <Text>{material.name}</Text>
              <Text>{material.units} units</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={}>
          <Text style={styles.buttonText}>submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  formContainer: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  materialsContainer: {
    marginTop: 20,
  },
  material: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginVertical: 10,
  },
});

export default Dashboard;
