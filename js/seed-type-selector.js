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

const seedShapes = [
  {
    key: 'clavate',
    title: 'Clavate',
    image: require('../images/seed-types/Clavate.png')
  },
  {
    key: 'cuneate',
    title: 'Cuneate',
    image: require('../images/seed-types/Cuneate.png')
  },
  {
    key: 'cylindric',
    title: 'Cylindric',
    image: require('../images/seed-types/Cylindric.png')
  },
  {
    key: 'deltoid',
    title: 'Deltoid',
    image: require('../images/seed-types/Deltoid.png')
  },
  {
    key: 'elliptic',
    title: 'Elliptic',
    image: require('../images/seed-types/Elliptic.png')
  },
  {
    key: 'lenticulate',
    title: 'Lenticulate',
    image: require('../images/seed-types/Lenticulate.png')
  },
  {
    key: 'linear',
    title: 'Linear',
    image: require('../images/seed-types/Linear.png')
  },
  {
    key: 'obconic',
    title: 'Obconic',
    image: require('../images/seed-types/Obconic.png')
  },
  {
    key: 'obcordate',
    title: 'Obcordate',
    image: require('../images/seed-types/Obcordate.png')
  },
  {
    key: 'oblong',
    title: 'Oblong',
    image: require('../images/seed-types/Oblong.png')
  },
  {
    key: 'obovoid',
    title: 'Obovoid',
    image: require('../images/seed-types/Obovoid.png')
  },
  {
    key: 'orbicular',
    title: 'Orbicular',
    image: require('../images/seed-types/Orbicular.png')
  },
  {
    key: 'ovoid',
    title: 'Ovoid',
    image: require('../images/seed-types/Ovoid.png')
  },
  {
    key: 'reniform',
    title: 'Reniform',
    image: require('../images/seed-types/Reniform.png')
  },
  {
    key: 'triquetrous',
    title: 'Triquetrous',
    image: require('../images/seed-types/Triquetrous.png')
  }
]

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  seedTypeRow: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  seedTypeText: {
    flexGrow: 1,
    fontSize: 18
  },
  seedTypeImage: {
      resizeMode: 'contain',
      height: 90,
      width: 90
  }
});

export default class SeedTypeSelector extends Component {

    render () {
      const seedButtons = seedShapes.map((seed) => {
        return (
          <TouchableHighlight key={seed.title} onPress={this.props.selectSeedType.bind(null, seed)}>
            <View style={styles.seedTypeRow}>
              <Text style={styles.seedTypeText}>{seed.title}</Text>
              <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: seed.image }])} key={seed.title}><Image source={seed.image} style={styles.seedTypeImage} /></TouchableHighlight>
            </View>
          </TouchableHighlight>
        )
      })
      return (
        <View style={{ flex: 1, marginTop: 84 }}>
            <ScrollView contentContainerStyle={styles.container}>
              {seedButtons}
            </ScrollView>
        </View>
      )
    }
}
