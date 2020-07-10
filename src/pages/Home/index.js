import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Colors} from '../../consts/colors';
import {getTrendingMovies} from '../../services/moviesService';
import {BaseImageUrl} from '../../consts/baseImageUrl';

const Home = () => {
  const carousel = useRef(null);
  const [trending, setTrending] = useState([]);
  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
        }}>
        <Image
          style={{
            resizeMode: 'cover',
            width: '50%',
            minHeight: 300,
            maxHeight: 400,
          }}
          source={{uri: BaseImageUrl + item.poster_path}}
        />
        <Text
          style={{
            color: Colors.text,
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 18,
            marginTop: 15,
            fontWeight: 'bold',
          }}>
          {item.title}
        </Text>
      </View>
    );
  };

  useEffect(() => {
    getTrending();
  }, []);

  useEffect(() => {
    console.log('valor do trending', trending);
  }, [trending]);

  const getTrending = async () => {
    const trendingData = await getTrendingMovies();
    setTrending(trendingData.results);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background,
      }}>
      <View style={{marginTop: 50}}>
        <Text
          style={{
            color: Colors.text,
            marginBottom: 20,
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          Lançamentos
        </Text>
      </View>
      <Carousel
        enableSnap
        data={trending}
        renderItem={_renderItem}
        sliderWidth={Dimensions.get('screen').width}
        itemWidth={Dimensions.get('screen').width}
      />
    </View>
  );
};

export default Home;
