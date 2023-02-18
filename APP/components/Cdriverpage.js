import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Picker, TextInput, Button } from 'react-native';
import firebase from 'firebase';
import { DRIVERS_NODE, MATERIALS_NODE, TRIPS_NODE } from './Constants';

const Driver = ({ navigation, route }) => {
  const [driver, setDriver] = useState(null);
  const [material, setMaterial] = useState('');
  const [units, setUnits] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(DRIVERS_NODE)
      .doc(route.params.driverId)
      .onSnapshot(doc => {
        setDriver({ id: doc.id, ...doc.data() });
      });
    return unsubscribe;
  }, [route.params.driverId]);

  const handleAddTrip = async () => {
    try {
      await firebase
        .firestore()
        .collection(TRIPS_NODE)
        .add({
          driverId: driver.id,
          truckId: driver.truckId,
          material,
          units,
          date: firebase.firestore.FieldValue.serverTimestamp()
        });
      navigation.goBack();
    } catch (e) {
      setError(e.message);
    }
  };

  if (!driver) return null;

  return (
    <View style={styles.container}>
      <Text>Driver: {driver.name}</Text>
      <Text>Truck: {driver.truckId}</Text>
      <Picker
        selectedValue={material}
        onValueChange={value => setMaterial(value)}
      >
        <Picker.Item label="Select Material" value="" />
        <Picker.Item label="Ballast" value="ballast" />
        <Picker.Item label="Murram" value="murram" />
        <Picker.Item label="Coral Blocks Grade 1" value="coral-blocks-grade-1" />
        <Picker.Item label="Coral Blocks Grade 2" value="coral-blocks-grade-2" />
        <Picker.Item label="Boulders" value="boulders" />
        <
