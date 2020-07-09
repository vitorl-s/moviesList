import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../consts/colors';

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background,
      }}>
      <Text style={{color: Colors.text}}>Home Screen</Text>
    </View>
  );
};

export default Home;
