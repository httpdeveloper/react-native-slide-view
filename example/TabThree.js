'use strict';

import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SlideView from 'react-native-slide-view';

export default class TabThree extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SlideView {...this.props}>
          <View style={styles.slide}>
            <Text>Tab Three {this.props.direction === -1 ? 'Right -->' : ' <-- Left '}</Text>
          </View>
        </SlideView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
