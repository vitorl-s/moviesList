import React from 'react';
import {View, Image, Text} from 'react-native';
import {BaseImageUrl} from '../../consts/baseImageUrl';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

const MovieInfo = ({route}) => {
  const movieInfo = route.params.movieInfo;
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.movieImg}
        source={{
          uri: BaseImageUrl + movieInfo.poster_path,
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.movieTitle}>{movieInfo.title}</Text>
        <Text style={styles.movieOverview}>{movieInfo.overview}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieInfo;
