import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../consts/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
  },
  newMoviesContainer: {
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + 15 : 10,
  },
  title: {
    color: Colors.text,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  carouselContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  carouselImage: {
    resizeMode: 'cover',
    width: '50%',
    minHeight: 300,
    maxHeight: 400,
  },
  carouselTitle: {
    color: Colors.text,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 15,
    fontWeight: 'bold',
  },
  listTitle: {
    flex: 1,
    width: '100%',
  },
  titleCategory: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
    marginLeft: 10,
  },
  movieImg: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default styles;
