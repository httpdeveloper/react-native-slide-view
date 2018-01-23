'use strict';

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SlideView from 'react-native-slide-view';
import styles from './TabTwoStyle';

export default class TabTwo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SlideView style={{ flex: 1 }} {...this.props}>
          <View style={styles.row0}>
            <Text>Tab Two {this.props.direction === -1 ? 'Right -->' : ' <-- Left '}</Text>
          </View>
          <View style={styles.row1}>
            <View style={[styles.center, styles.col11]}>
              <SlideView delay={50} translateAxis="y" duration={3000} direction={-1}>
                <View style={styles.circle}>
                  <Text>1</Text>
                </View>
              </SlideView>
              <SlideView delay={1000} translateAxis="y" duration={3000} direction={-1}>
                <View style={styles.circle}>
                  <Text>2</Text>
                </View>
              </SlideView>
              <SlideView delay={1500} translateAxis="y" duration={3000} direction={-1}>
                <View style={styles.circle}>
                  <Text>3</Text>
                </View>
              </SlideView>
            </View>
            <View style={[styles.center, styles.col12]}>
              <SlideView from={10} delay={50} translateAxis="y" duration={3000}>
                <View style={styles.circle}>
                  <Text>1</Text>
                </View>
              </SlideView>
              <SlideView from={10} delay={1000} translateAxis="y" duration={3000}>
                <View style={styles.circle}>
                  <Text>2</Text>
                </View>
              </SlideView>
              <SlideView from={10} delay={1500} translateAxis="y" duration={3000}>
                <View style={styles.circle}>
                  <Text>3</Text>
                </View>
              </SlideView>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={[styles.center, styles.col21]}>
              <SlideView delay={50} duration={3000}>
                <View style={styles.circle}>
                  <Text>1</Text>
                </View>
              </SlideView>
              <SlideView delay={1000} duration={3000}>
                <View style={styles.circle}>
                  <Text>2</Text>
                </View>
              </SlideView>
              <SlideView delay={1500} duration={3000}>
                <View style={styles.circle}>
                  <Text>3</Text>
                </View>
              </SlideView>
            </View>
            <View style={[styles.center, styles.col22]}>
              <SlideView delay={50} duration={3000} direction={-1}>
                <View style={styles.circle}>
                  <Text>1</Text>
                </View>
              </SlideView>
              <SlideView delay={1000} duration={3000} direction={-1}>
                <View style={styles.circle}>
                  <Text>2</Text>
                </View>
              </SlideView>
              <SlideView delay={1500} duration={3000} direction={-1}>
                <View style={styles.circle}>
                  <Text>3</Text>
                </View>
              </SlideView>
            </View>
          </View>
        </SlideView>
      </View>
    );
  }
}
