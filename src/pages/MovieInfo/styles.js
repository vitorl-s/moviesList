import {StyleSheet} from 'react-native';
import {Colors} from '../../consts/colors';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
  },
  movieImg: {
    width: '100%',
    height: '60%',
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
