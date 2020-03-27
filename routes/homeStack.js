import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../shared/header';
import Feed from '../screens/home';
import Account from '../screens/account';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#ff6c70',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} title="Feed" />,
          };
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{title: 'Account'}}
      />
    </Stack.Navigator>
  );
}
