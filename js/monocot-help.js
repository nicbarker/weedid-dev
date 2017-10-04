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

const helpImageStyle = {
  resizeMode: 'cover',
  height: 150,
  marginRight: 10,
  width: (Dimensions.get("window").width / 2) - 15,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    flexGrow: 1
  },
  headerRow: {
    padding: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  helpImageRow: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  helpImageText: {
    flexGrow: 1,
    fontSize: 18
  },
  helpImageOuter: {
    flex: 0.5,
    alignItems: 'flex-start'
  },
  helpImage: helpImageStyle,
  helpImageLast: _.extend({ marginRight: 0 }, helpImageStyle)
});

export default class ShowMonocotHelp extends Component {

    render () {
      return (
        <View style={{ flex: 1, marginTop: 84 }}>
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.headerRow}><Text style={{ fontWeight: 'bold'}}>{'How to distinguish grass from sedge'}</Text></View>
              <View style={styles.helpImageRow}>
                <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/monocot-help/Cross_section_grass.jpg') }])} key={1}><Image source={require('../images/monocot-help/Cross_section_grass.jpg')} style={styles.helpImage} /></TouchableHighlight>
                <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/monocot-help/Cross_section_grass_2.jpg') }])} key={2}><Image source={require('../images/monocot-help/Cross_section_grass_2.jpg')} style={styles.helpImageLast} /></TouchableHighlight>
              </View>
              <View style={styles.headerRow}><Text>{'The cross section of grass\' stem is circular and hollow.'}</Text></View>
              <View style={styles.helpImageRow}>
                <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/monocot-help/Cross_section_sedge.jpg') }])} key={1}><Image source={require('../images/monocot-help/Cross_section_sedge.jpg')} style={styles.helpImage} /></TouchableHighlight>
                <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/monocot-help/Cross_section_sedge_2.jpg') }])} key={2}><Image source={require('../images/monocot-help/Cross_section_sedge_2.jpg')} style={styles.helpImageLast} /></TouchableHighlight>
              </View>
              <View style={styles.headerRow}><Text>{'The cross section of sedge\'s stem is edgy (usually triangular) and solid / full.'}</Text></View>
            </ScrollView>
        </View>
      )
    }
}
