'use strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './TabsStyle';

import TabOne from './TabOne';
import TabTwo from './TabTwo';
import TabThree from './TabThree';
import TabFour from './TabFour';

const SLIDE_LEFT = 1;
const SLIDE_RIGHT = -1;
const TAB_ITEM_1 = 1;
const TAB_ITEM_2 = 2;
const TAB_ITEM_3 = 3;
const TAB_ITEM_4 = 4;

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this._itemRef = {};

    this.state = {
      currentTab: 1
    };

    this.currentTabIndex = 1;
  }

  _onPressTab(currentTab) {
    if (currentTab === this.state.currentTab) return;

    this.setState({ currentTab }, () => {
      this.currentTabIndex = currentTab;
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tabContent}>
          <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              {this.state.currentTab === TAB_ITEM_1 && <TabOne direction={this.currentTabIndex <= TAB_ITEM_1 ? SLIDE_LEFT : SLIDE_RIGHT} />}
              {this.state.currentTab === TAB_ITEM_2 && <TabTwo direction={this.currentTabIndex <= TAB_ITEM_2 ? SLIDE_LEFT : SLIDE_RIGHT} />}
              {this.state.currentTab === TAB_ITEM_3 && <TabThree direction={this.currentTabIndex <= TAB_ITEM_3 ? SLIDE_LEFT : SLIDE_RIGHT} />}
              {this.state.currentTab === TAB_ITEM_4 && <TabFour direction={this.currentTabIndex <= TAB_ITEM_4 ? SLIDE_LEFT : SLIDE_RIGHT} />}
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabList}>
          <TouchableOpacity style={this.state.currentTab === TAB_ITEM_1 ? styles.active : ''} onPress={() => this._onPressTab(1)}>
            <View>
              <Text>Tab 1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.currentTab === TAB_ITEM_2 ? styles.active : ''} onPress={() => this._onPressTab(2)}>
            <View>
              <Text>Tab 2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.currentTab === TAB_ITEM_3 ? styles.active : ''} onPress={() => this._onPressTab(3)}>
            <View>
              <Text>Tab 3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={this.state.currentTab === TAB_ITEM_4 ? styles.active : ''} onPress={() => this._onPressTab(4)}>
            <View>
              <Text>Tab 4</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
