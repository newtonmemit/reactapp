import firebase from 'firebase';

const firebaseConfig = {
  // Your Firebase configuration details
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const addDriver = (username, password) => {
  db.collection('drivers')
    .add({
      username,
      password,
    })
    .then(() => {
      console.log('Driver added successfully');
    })
    .catch(error => {
      console.error('Error adding driver: ', error);
    });
};

export const getDrivers = () => {
  return db.collection('drivers').get();
};

export const updateDriver = (driverId, username, password) => {
  db.collection('drivers')
    .doc(driverId)
    .update({
      username,
      password,
    })
    .then(() => {
      console.log('Driver updated successfully');
    })
    .catch(error => {
      console.error('Error updating driver: ', error);
    });
};

export const deleteDriver = driverId => {
  db.collection('drivers')
    .doc(driverId)
    .delete()
    .then(() => {
      console.log('Driver deleted successfully');
    })
    .catch(error => {
      console.error('Error deleting driver: ', error);
    });
};

export const addTrip = (driverId, materials) => {
  db.collection('trips')
    .add({
      driverId,
      materials,
    })
    .then(() => {
      console.log('Trip added successfully');
    })
    .catch(error => {
      console.error('Error adding trip: ', error);
    });
};

export const getTrips = () => {
  return db.collection('trips').get();
};

export const updateTrip = (tripId, materials) => {
  db.collection('trips')
    .doc(tripId)
    .update({
      materials,
    })
    .then(() => {
      console.log('Trip updated successfully');
    })
    .catch(error => {
      console.error('Error updating trip: ', error);
    });
};

export const deleteTrip = tripId => {
  db.collection('trips')
    .doc(tripId)
    .delete()
    .then(() => {
      console.log('Trip deleted successfully');
    })
    .catch(error => {
      console.error('Error deleting trip: ', error);
    });
};
