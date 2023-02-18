import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, FlatList } from 'react-native';

const AdminPage = () => {
  const [trucks, setTrucks] = useState([
    { id: 1, driver: 'John Doe', trips: [{ destination: 'Los Angeles' }, { destination: 'New York' }], salesOrders: [{ customer: 'Amazon' }, { customer: 'Walmart' }], materials: [{ name: 'Murrum' }, { name: 'Ballast' }] },
    { id: 2, driver: 'Jane Smith', trips: [{ destination: 'Chicago' }, { destination: 'Houston' }], salesOrders: [{ customer: 'Target' }, { customer: 'Best Buy' }], materials: [{ name: 'Gravel' }, { name: 'Sand' }] },
  ]);

  const handleViewReport = (id) => {
    const truck = trucks.find((truck) => truck.id === id);
    console.log(`Driver: ${truck.driver}`);
    console.log('Trips:');
    truck.trips.forEach((trip) => console.log(`- ${trip.destination}`));
    console.log('Sales Orders:');
    truck.salesOrders.forEach((salesOrder) => console.log(`- ${salesOrder.customer}`));
    console.log('Materials:');
    truck.materials.forEach((material) => console.log(`- ${material.name}`));
  };

  const handleGenerateReport = () => {
    console.log('All Trucks Report:');
    trucks.forEach((truck) => {
      console.log(`Driver: ${truck.driver}`);
      console.log('Trips:');
      truck.trips.forEach((trip) => console.log(`- ${trip.destination}`));
      console.log('Sales Orders:');
      truck.salesOrders.forEach((salesOrder) => console.log(`- ${salesOrder.customer}`));
      console.log('Materials:');
      truck.materials.forEach((material) => console.log(`- ${material.name}`));
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Admin Page</Text>
      </View>
      <FlatList
        style={styles.listContainer}
        data={trucks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>Driver: {item.driver}</Text>
<Button
onPress={() => handleViewReport(item.id)}
title="View Report"
/>
</View>
)}
/>
<Button
     onPress={handleGenerateReport}
     title="Generate Report for All Trucks"
   />
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
listContainer: {
marginVertical: 20,
},
listItem: {
marginVertical: 5,
padding: 10,
borderWidth: 1,
borderColor: '#ccc',
},
});

export default AdminPage;

