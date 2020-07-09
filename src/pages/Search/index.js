import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../consts/colors';
import {TextInput} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

// import { Container } from './styles';

const Search = () => {
  const [searchTitle, setSearchTitle] = useState('');
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Colors.background,
      }}>
      <View style={{paddingTop: getStatusBarHeight(), marginTop: 10}}>
        <View
          style={{
            backgroundColor: 'gray',
            width: '95%',
            alignSelf: 'center',
            padding: 20,
            borderRadius: 25,
          }}>
          <TextInput
            value={searchTitle}
            style={{alignSelf: 'flex-start', color: 'white'}}
            placeholder="Busque seu filme"
            onChangeText={(value) => setSearchTitle(value)}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            selectionColor="white"
          />
        </View>
      </View>
    </View>
  );
};

export default Search;
