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
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover'
  },
  imageBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageText: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: 30,
    fontFamily: 'HelveticaNeue-Light'
  }
});

export default class PlantTypeSelector extends Component {

    render () {
      // <Image style={styles.image} source={require('../images/seedling_overlay.png')}>
      //     <TouchableHighlight testID={`seedling`} activeOpacity={1} underlayColor={"rgba(0, 0, 0, 0.3)"} style={styles.imageBox} onPress={this.props.selectPlantType.bind(null, { key: 'seedling', title: 'Seedlings' })}>
      //         <Text style={styles.imageText}>Seedling</Text>
      //     </TouchableHighlight>
      // </Image>
      // <Image style={styles.image} source={require('../images/flower_overlay.png')}>
      //     <TouchableHighlight testID={`flower`} activeOpacity={1} underlayColor={"rgba(0, 0, 0, 0.3)"} style={styles.imageBox} onPress={this.props.selectPlantType.bind(null, { key: 'flower', title: 'Flowers' })}>
      //         <Text style={styles.imageText}>Flower</Text>
      //     </TouchableHighlight>
      // </Image>
      return (
        <View style={{ flex: 1, marginTop: 84, overflow: 'hidden' }}>
            <ScrollView contentContainerStyle={[styles.container, { height: Dimensions.get("window").height - 84 }]}>
                <Image style={styles.image} source={require('../images/lowland_overlay.png')}>
                  <TouchableHighlight testID={`mature`} activeOpacity={1} underlayColor={"rgba(0, 0, 0, 0.3)"} style={styles.imageBox} onPress={this.props.selectPlantArea.bind(null, { key: 'lowland', title: 'Lowland' })}>
                      <Text style={styles.imageText}>Lowland</Text>
                    </TouchableHighlight>
                </Image>
                <Image style={styles.image} source={require('../images/upland_overlay.png')}>
                    <TouchableHighlight testID={`seed`} activeOpacity={1} underlayColor={"rgba(0, 0, 0, 0.3)"} style={styles.imageBox} onPress={this.props.selectPlantArea.bind(null, { key: 'upland', title: 'Upland' })}>
                        <Text style={styles.imageText}>Upland</Text>
                    </TouchableHighlight>
                </Image>
            </ScrollView>
        </View>
      )
    }
}
