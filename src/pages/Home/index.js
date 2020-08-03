import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  getTrendingMovies,
  discoverPopularMovies,
} from '../../services/moviesService';
import {BaseImageUrl} from '../../consts/baseImageUrl';
import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getGenres} from '../../services/genresService';

const Home = ({navigation}) => {
  const [trending, setTrending] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isSorted, setSorted] = useState(false);
  const isMountedRef = useRef(null);
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
    getGenresData();
    getTrending();
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    if (genres.length > 0 && isMountedRef.current) {
      sortMovies();
    }
  }, [genres]);

  const sortMovies = async () => {
    await Promise.all(
      genres.map(async (item, index) => {
        const data = await getDiscoverMovies(item.id);
        if (index === genres.length - 1) {
          setSorted(true);
        }
        return (item.movies = data);
      }),
    );
    return () => {
      isMountedRef.current = false;
    };
  };

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
      Alert.alert('error get genres');
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Text style={styles.titleCategory} numberOfLines={1}>
          {item.name}
        </Text>
        {item.movies ? (
          <FlatList
            data={genres}
            horizontal
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MovieInfo', {
                    movieInfo: item.movies[index],
                  });
                }}>
                <Image
                  style={styles.movieImg}
                  source={{
                    uri: BaseImageUrl + item.movies[index].poster_path,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        ) : (
          <ActivityIndicator color="white" />
        )}
      </View>
    );
  };

  const getDiscoverMovies = async (categoryId) => {
    try {
      const discoverData = await discoverPopularMovies(categoryId.toString());
      return discoverData.results;
    } catch {
      Alert.alert('error discover movies');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.newMoviesContainer}>
        <Text style={styles.title}>Lançamentos</Text>
      </View>
      <Carousel
        enableSnap
        data={trending}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width - 10}
      />
      {isSorted && (
        <FlatList
          data={genres}
          nestedScrollEnabled
          style={styles.listTitle}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default Home;
