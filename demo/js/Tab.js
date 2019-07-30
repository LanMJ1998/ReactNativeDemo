import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import DisposeIndex from './DisposeIndex';

import FacebookTabBar from './TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default () => {
  return <ScrollableTabView
    initialPage={0}
    renderTabBar={() => <FacebookTabBar  tabNames ={ ['故障工单', '请求支撑', '指挥任务', '现场验收','现场验收','现场验收']} />}
  >
    <DisposeIndex tabLabel="first"/>
    <DisposeIndex tabLabel="second"/>
    <DisposeIndex tabLabel="third"/>
    <DisposeIndex tabLabel="four"/>
    <DisposeIndex tabLabel="five"/>
    <DisposeIndex tabLabel="six"/>
  </ScrollableTabView>;
}


