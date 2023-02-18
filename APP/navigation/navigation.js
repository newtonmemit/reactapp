import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './loginscreen';
import Dashboard from './dashboardscreen';
import Driver from './driverscreen';
import AdminPage  from '../screens/admin';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: 'loginscreen',
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      headerTitle: 'dashboardscreen',
    },
  },
  Driver: {
    screen: Driver,
    navigationOptions: {
      headerTitle: 'driverscreens',
    },
  },
});

export default createAppContainer(AppNavigator);
