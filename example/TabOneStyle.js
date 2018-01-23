import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  terminal: {
    fontSize: 10
  },
  city: {
    fontSize: 13
  },

  rotateCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#0072bc',
    alignItems: 'center',
    justifyContent: 'center'
  },
  destination: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5
  }
});

export default styles;
