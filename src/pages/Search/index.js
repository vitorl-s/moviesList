import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../consts/colors';
import {
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getMovies} from '../../services/moviesService';

// import { Container } from './styles';

const Search = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [movieList, setMoviesList] = useState([]);

  useEffect(() => {
    handleSearch(searchTitle);
  }, [searchTitle]);

  const handleSearch = async (title) => {
    if (title) {
      const moviesData = await getMovies(title);
      setMoviesList(moviesData.results);
    } else {
      setMoviesList([]);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: Colors.background,
      }}>
      <View
        style={{
          paddingTop: getStatusBarHeight(),
          marginTop: 10,
          flex: 1,
          marginBottom: 10,
        }}>
        <View
          style={{
            backgroundColor: '#564d4d',
            width: '95%',
            alignSelf: 'center',
            padding: 15,
            justifyContent: 'space-between',
            borderRadius: 25,
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Ionicons name={'search'} size={20} color={'gray'} />
          <TextInput
            value={searchTitle}
            style={{
              alignSelf: 'center',
              color: 'white',
              width: '88%',
              alignItems: 'flex-end',
            }}
            placeholder="Busque seu filme"
            onChangeText={(value) => setSearchTitle(value)}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            selectionColor="white"
          />
        </View>
      </View>
      <FlatList
        data={movieList}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{justifyContent: 'center'}}
        renderItem={({item}) => (
          <TouchableOpacity style={{width: '100%', marginLeft: 10}}>
            <Text
              style={{color: 'white', padding: 8, width: '50%'}}
              numberOfLines={1}>
              {item.title}{' '}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Search;
