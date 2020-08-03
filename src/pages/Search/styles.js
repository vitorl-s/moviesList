import {StyleSheet} from 'react-native';
import {Colors} from '../../consts/colors';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.background,
  },
  statuBarContainer: {
    paddingTop: getStatusBarHeight(),
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: '#564d4d',
    width: '95%',
    alignSelf: 'center',
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    alignSelf: 'center',
    color: 'white',
    width: '88%',
    alignItems: 'flex-end',
  },
  button: {
    width: '100%',
    marginLeft: 10,
  },
  movieTitle: {
    color: 'white',
    padding: 8,
    width: '50%',
  },
});

export default styles;
