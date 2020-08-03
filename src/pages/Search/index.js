import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getMovies} from '../../services/moviesService';
import styles from './styles';

const Search = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [movieList, setMoviesList] = useState([]);

  useEffect(() => {
    handleSearch(searchTitle);
  }, [searchTitle]);

  const handleSearch = async (title) => {
    try {
      if (title) {
        const moviesData = await getMovies(title);
        setMoviesList(moviesData.results);
      } else {
        setMoviesList([]);
      }
    } catch {
      return Alert.alert('Error searching movie');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.statuBarContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={'search'} size={20} color={'gray'} />
          <TextInput
            value={searchTitle}
            style={styles.input}
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
        style={{flex:1}}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{justifyContent: 'center'}}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.movieTitle} numberOfLines={1}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Search;
