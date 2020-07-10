import React, {useState, useEffect} from 'react';
import {View, Text, Image, Dimensions, Alert} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  getTrendingMovies,
  discoverPopularMovies,
} from '../../services/moviesService';
import {BaseImageUrl} from '../../consts/baseImageUrl';
import styles from './styles';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {getGenres} from '../../services/genresService';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [discover, setDiscover] = useState([]);
  const [genres, setGenres] = useState([]);

  const _renderItem = ({item}) => {
    return (
      <View style={styles.carouselContainer}>
        <Image
          style={styles.carouselImage}
          source={{uri: BaseImageUrl + item.poster_path}}
        />
        <Text style={styles.carouselTitle}>{item.title}</Text>
      </View>
    );
  };

  useEffect(() => {
    getTrending();
    getDiscoverMovies();
    getGenresData();
  }, []);

  const getTrending = async () => {
    try {
      const trendingData = await getTrendingMovies();
      setTrending(trendingData.results);
    } catch {
      Alert.alert('error trending movies');
    }
  };

  const getGenresData = async () => {
    try {
      const genresData = await getGenres();
      setGenres(genresData.genres);
    } catch {
      Alert.alert('Erro get genres');
    }
  };

  const getDiscoverMovies = async () => {
    try {
      const discoverData = await discoverPopularMovies();
      setDiscover(discoverData.results);
    } catch {
      Alert.alert('error discover movies');
    }
  };

  return (
    <View style={styles.container}>
      <View style={{marginTop: 50}}>
        <Text style={styles.title}>Lançamentos</Text>
      </View>
      <Carousel
        enableSnap
        data={trending}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width - 10}
      />
      <FlatList
        data={genres}
        style={{flex: 1, padding: 10, width: '100%'}}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{justifyContent: 'center'}}
        renderItem={({item}) => (
          <TouchableOpacity style={{padding: 10}}>
            <Text style={{color:'white'}} numberOfLines={1}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
