import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView
} from 'react-native';

import _ from 'lodash'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    flexGrow: 1
  }
});

export default class ShowLiguleHelp extends Component {

    render () {
      return (
        <View style={{ flex: 1, marginTop: 84 }}>
            <ScrollView contentContainerStyle={styles.container}>
              
            </ScrollView>
        </View>
      )
    }
}