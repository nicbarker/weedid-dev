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
  monocotDicotRow: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  monocotDicotText: {
    flexGrow: 1,
    fontSize: 18
  },
  monocotDicotImage: {
      resizeMode: 'contain',
      height: 90,
      width: 90
  }
});

export default class MonocotDicotSelector extends Component {

    render () {
      return (
        <View style={{ flex: 1, marginTop: 84 }}>
            <ScrollView contentContainerStyle={styles.container}>
              <TouchableHighlight key={'monocot'} onPress={this.props.selectMonocotDicot.bind(null, 'monocot')}>
                <View style={styles.monocotDicotRow}>
                  <Text style={styles.monocotDicotText}>{'Monocot'}</Text>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/monocot-dicot/Leafvein-monocot1.png') }])} key={1}><Image source={require('../images/monocot-dicot/Leafvein-monocot1.png')} style={styles.monocotDicotImage} /></TouchableHighlight>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/monocot-dicot/Leafvein-monocot2.png') }])} key={2}><Image source={require('../images/monocot-dicot/Leafvein-monocot2.png')} style={styles.monocotDicotImage} /></TouchableHighlight>
                </View>
              </TouchableHighlight>
              <TouchableHighlight key={'dicot'} onPress={this.props.selectMonocotDicot.bind(null, 'dicot')}>
                <View style={styles.monocotDicotRow}>
                  <Text style={styles.monocotDicotText}>{'Dicot'}</Text>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/monocot-dicot/Leafvein-dicot1.png') }])} key={1}><Image source={require('../images/monocot-dicot/Leafvein-dicot1.png')} style={styles.monocotDicotImage} /></TouchableHighlight>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/monocot-dicot/Leafvein-dicot2.png') }])} key={2}><Image source={require('../images/monocot-dicot/Leafvein-dicot2.png')} style={styles.monocotDicotImage} /></TouchableHighlight>
                </View>
              </TouchableHighlight>
            </ScrollView>
        </View>
      )
    }
}
