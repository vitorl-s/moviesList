import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../consts/colors';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    paddingBottom: 25,
  },
  movieImg: {
    alignSelf: 'center',
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 2,
    resizeMode: 'contain',
  },
  textContainer: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
  },
  movieOverview: {
    marginTop: 10,
    fontSize: 16,
    color: Colors.text,
  },
});

export default styles;
