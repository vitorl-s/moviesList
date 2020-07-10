import {StyleSheet} from 'react-native';
import {Colors} from '../../consts/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.background,
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
});

export default styles;
