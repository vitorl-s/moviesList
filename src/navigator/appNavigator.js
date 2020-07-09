import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../pages/Search';

Icon.loadFont();

const Stack = createStackNavigator();
const TabStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTab = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;
    if (route.name === 'Início') {
      iconName = 'home';
    } else if (route.name === 'Busca') {
      iconName = 'search';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
});

const SearchRoutes = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Search"
        component={Search}
        options={() => ({
          headerShown: false,
        })}
      />
    </TabStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={CustomTab}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        style: {backgroundColor: 'black'},
      }}>
      <Tab.Screen name="Início" component={Home} />
      <Tab.Screen name="Busca" component={SearchRoutes} />
    </Tab.Navigator>
  );
};

const MoviesApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MoviesApp;
