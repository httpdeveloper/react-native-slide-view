'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Animated, Easing } from 'react-native';
import SlideView from 'react-native-slide-view';
import styles from './TabOneStyle';

const { width } = Dimensions.get('window');
export default class TabOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      slideAnimate: false,
      animateRotate: new Animated.Value(0),
      from: { title: 'London', code: 'LHR', terminal: 'Gatwick Arpt - T-S' },
      to: { title: 'San Francisco', code: 'SFO', terminal: 'San Francisco Intl Arpt' }
    };
  }

  _animateRotate() {
    Animated.timing(this.state.animateRotate, {
      toValue: 1,
      duration: 300,
      easing: Easing.easeInOutQuart
    }).start(() => {
      this.setState({ animateRotate: new Animated.Value(0) });
    });
  }

  _swipeView() {
    this.setState({ distance: width / 2, slideAnimate: true, from: this.state.to, to: this.state.from });
    this._animateRotate();
  }

  _rotateView = () => {
    return {
      transform: [
        {
          rotate: this.state.animateRotate.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '90deg', '180deg'],
            extrapolate: 'clamp'
          })
        }
      ]
    };
  };

  render() {
    const fontSize = this.state.animateRotate.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [22, 32, 22],
      extrapolate: 'clamp'
    });
    return (
      <View style={styles.container}>
        <SlideView style={{ flex: 1 }} {...this.props}>
          <View style={styles.center}>
            <Text>Tab One {this.props.direction === -1 ? 'Right -->' : ' <-- Left '}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <SlideView
              style={{ flex: 1 }}
              delay={50}
              from={this.state.distance}
              duration={550}
              animate={this.state.slideAnimate}
              onAfterSlide={() => {
                setTimeout(() => this.setState({ distance: 0, slideAnimate: false }), 50);
              }}
            >
              <View style={styles.destination}>
                <Text>{this.state.from.code}</Text>
                <Text style={styles.city}>{this.state.from.title}</Text>
                <Text style={styles.terminal}>{this.state.from.terminal}</Text>
              </View>
            </SlideView>
            <View style={[styles.center]}>
              <TouchableOpacity onPress={this._swipeView.bind(this)}>
                <View style={styles.rotateCircle}>
                  <Animated.Text style={[{ textAlign: 'center', fontSize }, this._rotateView()]}>{'~'}</Animated.Text>
                </View>
              </TouchableOpacity>
            </View>
            <SlideView style={{ flex: 1 }} delay={50} from={this.state.distance} direction={-1} duration={550} animate={this.state.slideAnimate}>
              <View style={styles.destination}>
                <Text>{this.state.to.code}</Text>
                <Text style={styles.city}>{this.state.to.title}</Text>
                <Text style={styles.terminal}>{this.state.to.terminal}</Text>
              </View>
            </SlideView>
          </View>
        </SlideView>
      </View>
    );
  }
}
