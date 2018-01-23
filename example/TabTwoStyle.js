import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  row0: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    width: 40,
    height: 40,
    marginVertical: 5,
    borderRadius: 20,
    borderColor: '#ddd',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  row1: {
    flex: 0.4,
    flexDirection: 'row',
    backgroundColor: '#eee'
  },
  row2: {
    flex: 0.4,
    flexDirection: 'row'
  },
  col11: {
    backgroundColor: '#eee'
  },
  col12: {
    backgroundColor: '#f5f5f5'
  },
  col21: {
    backgroundColor: '#f5f5f5'
  },
  col22: {
    backgroundColor: '#eee'
  }
});

export default styles;
