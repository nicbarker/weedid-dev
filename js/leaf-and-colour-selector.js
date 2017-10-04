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
  },
  headerRow: {
    padding: 10,
    backgroundColor: '#CDF0FC'
  },
  LeafTypeRow: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  LeafTypeText: {
    flexGrow: 1,
    fontSize: 18
  },
  LeafTypeImage: {
      resizeMode: 'contain',
      height: 90,
      width: 90
  },
  flowerColourSelector: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 5,
    flexGrow: 1
  },
  flowerColourBox: {
    width: 70,
    height: 70,
    margin: 5
  }
});

export default class LeafAndColourSelector extends Component {

    render () {
      return (
        <View style={{ flex: 1, marginTop: 84 }}>
            <ScrollView contentContainerStyle={styles.container}>
              <Text style={styles.headerRow}>{'Leaf Type'}</Text>
              <TouchableHighlight key={'simple'} onPress={this.props.selectLeafType.bind(null, 'Simple')}>
                <View style={styles.LeafTypeRow}>
                  <Text style={styles.LeafTypeText}>{'Simple'}</Text>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/leaf-types/Simple.png') }])} key={1}><Image source={require('../images/leaf-types/Simple.png')} style={styles.LeafTypeImage} /></TouchableHighlight>
                </View>
              </TouchableHighlight>
              <TouchableHighlight key={'compound'} onPress={this.props.selectLeafType.bind(null, 'Compound')}>
                <View style={styles.LeafTypeRow}>
                  <Text style={styles.LeafTypeText}>{'Compound'}</Text>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/leaf-types/Compound.png') }])} key={1}><Image source={require('../images/leaf-types/Compound.png')} style={styles.LeafTypeImage} /></TouchableHighlight>
                </View>
              </TouchableHighlight>
              <Text style={styles.headerRow}>{'Flower Colour'}</Text>
              <View style={styles.flowerColourSelector}>
                <TouchableHighlight onPress={this.props.selectFlowerColour.bind(null, 'white')} key='white' ><View style={[styles.flowerColourBox, { backgroundColor: '#ffffff', borderWidth: 3, borderColor: '#000000' }]} /></TouchableHighlight>
                <TouchableHighlight onPress={this.props.selectFlowerColour.bind(null, 'red')} key='red' ><View style={[styles.flowerColourBox, { backgroundColor: '#ff0000' }]} /></TouchableHighlight>
                <TouchableHighlight onPress={this.props.selectFlowerColour.bind(null, 'green')} key='green' ><View style={[styles.flowerColourBox, { backgroundColor: '#00ff00' }]} /></TouchableHighlight>
                <TouchableHighlight onPress={this.props.selectFlowerColour.bind(null, 'blue')} key='blue' ><View style={[styles.flowerColourBox, { backgroundColor: '#0000ff' }]} /></TouchableHighlight>
                <TouchableHighlight onPress={this.props.selectFlowerColour.bind(null, 'yellow')} key='yellow' ><View style={[styles.flowerColourBox, { backgroundColor: 'yellow' }]} /></TouchableHighlight>
                <TouchableHighlight onPress={this.props.selectFlowerColour.bind(null, 'purple')} key='purple' ><View style={[styles.flowerColourBox, { backgroundColor: 'purple' }]} /></TouchableHighlight>
                <TouchableHighlight onPress={this.props.selectFlowerColour.bind(null, 'pink')} key='pink' ><View style={[styles.flowerColourBox, { backgroundColor: 'pink' }]} /></TouchableHighlight>
              </View>
            </ScrollView>
        </View>
      )
    }
}
