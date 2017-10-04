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
  liguleRow: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  liguleText: {
    flexGrow: 1,
    fontSize: 18,
    flexWrap: 'wrap'
  },
  liguleImage: {
      flexShrink: 0,
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

export default class LiguleSelector extends Component {

    render () {
      return (
        <View style={{ flex: 1, marginTop: 84 }}>
            <ScrollView contentContainerStyle={styles.container}>
              <View style={styles.helpRow}>
                <TouchableHighlight style={styles.helpButton} onPress={this.props.showLiguleHelp}>
                  <Text>{'Help'}</Text>
                </TouchableHighlight>
              </View>
              <TouchableHighlight key={'Absent'} onPress={this.props.selectLigule.bind(null, 'Absent')}>
                <View style={styles.liguleRow}>
                  <Text style={styles.liguleText}>{'Absent'}</Text>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/ligules/Absent.jpg') }])} key={1}><Image source={require('../images/ligules/Absent.jpg')} style={styles.liguleImage} /></TouchableHighlight>
                </View>
              </TouchableHighlight>
              <TouchableHighlight key={'Eliciate'} onPress={this.props.selectLigule.bind(null, 'Eliciate')}>
                <View style={styles.liguleRow}>
                  <Text style={styles.liguleText}>{'Eliciate Membrane'}</Text>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/ligules/Eliciate.jpg') }])} key={1}><Image source={require('../images/ligules/Eliciate.jpg')} style={styles.liguleImage} /></TouchableHighlight>
                </View>
              </TouchableHighlight>
              <TouchableHighlight key={'Ciliate'} onPress={this.props.selectLigule.bind(null, 'Ciliate')}>
                <View style={styles.liguleRow}>
                  <Text style={styles.liguleText}>{'Ciliolate /\nCiliate /\nHairy Membrane'}</Text>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/ligules/Ciliate.jpg') }])} key={1}><Image source={require('../images/ligules/Ciliate.jpg')} style={styles.liguleImage} /></TouchableHighlight>
                  <TouchableHighlight onPress={this.props.showImages.bind(null, [{ source: require('../images/ligules/Ciliate_2.jpg') }])} key={2}><Image source={require('../images/ligules/Ciliate_2.jpg')} style={styles.liguleImage} /></TouchableHighlight>
                </View>
              </TouchableHighlight>
            </ScrollView>
        </View>
      )
    }
}
