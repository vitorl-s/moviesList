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
          style={{resizeMode: 'contain', width: '100%', height: 300}}
          source={{uri: BaseImageUrl + item.poster_path}}
        />
        <Text style={{color: Colors.text, alignSelf: 'center', textAlign:'center'}}>
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
      <View style={{marginTop: 100}}>
        <Text style={{color: Colors.text}}>Lançamentos</Text>
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
