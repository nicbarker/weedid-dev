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
  plantTypeRow: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  plantTypeText: {
    flexGrow: 1,
    fontSize: 18
  },
  plantTypeImage: {
      resizeMode: 'contain',
      height: 90,
      width: 90
  },
  helpRow: {
    flexDirection: 'row-reverse',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 10
  },
  helpButton: {
    padding: 5,
    paddingLeft: 8,
    paddingRight: 8,
    backgroundColor: '#CDF0FC'
  }
});

export default class PlantTypeSelector extends Component {

    render () {
      return (
        <View style={{ flex: 1, marginTop: 84 }}>
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.helpRow}>
                <TouchableHighlight style={styles.helpButton} onPress={this.props.showMonocotHelp}>
                  <Text>{'Help'}</Text>
                </TouchableHighlight>
              </View>
              <TouchableHighlight key={'Grass'} onPress={this.props.selectPlantType.bind(null, 'Grass')}>
                <View style={styles.plantTypeRow}>
                  <Text style={styles.plantTypeText}>{'Grass'}</Text>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/plant-types/Grass.jpg') }])} key={1}><Image source={require('../images/plant-types/Grass.jpg')} style={styles.plantTypeImage} /></TouchableHighlight>
                </View>
              </TouchableHighlight>
              <TouchableHighlight key={'Sedge'} onPress={this.props.selectPlantType.bind(null, 'Sedge')}>
                <View style={styles.plantTypeRow}>
                  <Text style={styles.plantTypeText}>{'Sedge'}</Text>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/plant-types/Sedge.jpg') }])} key={1}><Image source={require('../images/plant-types/Sedge.jpg')} style={styles.plantTypeImage} /></TouchableHighlight>
                </View>
              </TouchableHighlight>
              <TouchableHighlight key={'Broadleaf'} onPress={this.props.selectPlantType.bind(null, 'Broadleaf')}>
                <View style={styles.plantTypeRow}>
                  <Text style={styles.plantTypeText}>{'Broadleaf-like'}</Text>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/plant-types/Broadleaf-like.jpg') }])} key={1}><Image source={require('../images/plant-types/Broadleaf-like.jpg')} style={styles.plantTypeImage} /></TouchableHighlight>
                </View>
              </TouchableHighlight>
            </ScrollView>
        </View>
      )
    }
}
