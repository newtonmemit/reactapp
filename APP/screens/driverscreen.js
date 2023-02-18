import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, ScrollView } from 'react-native';

const DriverPage = () => {
  const [trips, setTrips] = useState([]);
  const [salesOrders, setSalesOrders] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [trip, setTrip] = useState('');
  const [salesOrder, setSalesOrder] = useState('');
  const [material, setMaterial] = useState('');

  const handleAddTrip = () => {
    if(trip) {
      setTrips([...trips, {destination: trip}]);
    }
    setTrip('');
  };

  const handleAddSalesOrder = () => {
    if(salesOrder) {
      setSalesOrders([...salesOrders, {customer: salesOrder}]);
    }
    setSalesOrder('');
  };

  const handleAddMaterial = () => {
    if(material) {
      setMaterials([...materials, {name: material}]);
    }
    setMaterial('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Driver Page</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter trip destination"
          value={trip}
          onChangeText={(text) => setTrip(text)}
        />
        <Button
          onPress={handleAddTrip}
          title="Add Trip"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Sales Order customer"
          value={salesOrder}
          onChangeText={(text) => setSalesOrder(text)}
        />
       
<Button
       onPress={handleAddSalesOrder}
       title="Add Sales Order"
     />
<TextInput
style={styles.textInput}
placeholder="Enter Material Name"
value={material}
onChangeText={(text) => setMaterial(text)}
/>
<Button
       onPress={handleAddMaterial}
       title="Add Material"
     />
</View>
<View style={styles.listContainer}>
<View>
<Text style={styles.listTitle}>Trips</Text>
{trips.map((trip) => (
<Text key={trip.destination} style={styles.listItem}>{trip.destination}</Text>
))}
</View>
<View>
<Text style={styles.listTitle}>Sales Orders</Text>
{salesOrders.map((salesOrder) => (
<Text key={salesOrder.customer} style={styles.listItem}>{salesOrder.customer}</Text>
))}
</View>
<View>
<Text style={styles.listTitle}>Materials</Text>
{materials.map((material) => (
<Text key={material.name} style={styles.listItem}>{material.name}</Text>
))}
</View>
</View>
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5',
padding: 20,
},
header: {
alignItems: 'center',
marginVertical: 20,
},
title: {
fontSize: 22,
fontWeight: 'bold',
},
formContainer: {
marginVertical: 20,
},
textInput: {
borderWidth: 1,
borderColor: '#ccc',
padding: 10,
marginVertical: 10,
},
listContainer: {
marginVertical: 20,
},
listTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
listItem: {
marginVertical: 5,
},
});

export default DriverPage;
