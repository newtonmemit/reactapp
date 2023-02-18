import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './loginscreen';
import Dashboard from './dashboardscreen';
import Driver from './driverscreen';
import admin from './admin';

const AppNavigator = createStackNavigator({
  loginscreen: {
    screen: Login,
    navigationOptions: {
      header: 'driverscreen',
    },
  },
  dashboardscreen: {
    screen: Dashboard,
    navigationOptions: {
      headerTitle: 'dashboardscreen',
    },
  },
  driverscreen: {
    screen: Driver,
    navigationOptions: {
      headerTitle: 'driverscreen',
    },
    admin: {
      screen:admin,
      navigationOptions:{
        headerTitle:'admin',
      },
    },
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return <AppContainer />;
}
