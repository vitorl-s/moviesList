import * as React from 'react';
import {NativeModules, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../pages/Search';
import MovieInfo from '../pages/MovieInfo';
import {Colors} from '../consts/colors';
import {useDispatch} from 'react-redux';
import {SaveLanguage} from '../redux/actions/saveLaguage';

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

const HomeRoutes = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />
      <TabStack.Screen
        name="MovieInfo"
        component={MovieInfo}
        options={() => ({
          title: '',
          headerStyle: {backgroundColor: Colors.background},
          headerTitleStyle: {color: Colors.text},
          headerBackTitleStyle: {
            color: Colors.text,
            fontSize: 20,
            marginLeft: 10,
          },
          headerTintColor: Colors.text,
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
      <Tab.Screen name="Início" component={HomeRoutes} />
      <Tab.Screen name="Busca" component={SearchRoutes} />
    </Tab.Navigator>
  );
};

const MoviesApp = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    handleLocale();
  });
  const handleLocale = () => {
    const locale =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0]
        : NativeModules.I18nManager.localeIdentifier;
    dispatch(SaveLanguage(locale));
  };
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
