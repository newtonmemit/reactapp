import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';
import firebase from 'firebase';
import { TRUCKS_NODE, DRIVERS_NODE, MATERIALS_NODE, TRIPS_NODE } from './Constants';
import { TripCard } from './TripCard';

const Dashboard = ({ navigation }) => {
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection(TRUCKS_NODE)
      .onSnapshot(querySnapshot => {
        const trucks = [];
        querySnapshot.forEach(doc => {
          trucks.push({ id: doc.id, ...doc.data() });
        });
        setTrucks(trucks);
      });
    return unsubscribe;
  }, []);

  return   <View style={styles.container}>
    <FlatList
      data={trucks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TripCard
          truck={item}
          onPress={() => navigation.navigate('Driver', { truckId: item.id })}
        />
      )}
    />
    <Button
      title="Add Truck"
      onPress={() => navigation.navigate('AddTruck')}
    />
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

export default Dashboard;

