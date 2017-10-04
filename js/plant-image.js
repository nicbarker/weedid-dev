import React, { Component } from 'react'
import {
  View,
  Image,
  Dimensions,
  Platform
} from 'react-native'

import Gallery from 'react-native-image-gallery'

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 84,
        marginTop: 84,
        backgroundColor: '#000'
    },

    image: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 84,
        resizeMode: 'contain',
        zIndex: -1
    }
}

export default class PlantData extends Component {

    render () {
        let plantImage;
        plantImage = (
          <Gallery
            style={{flex: 1, backgroundColor: 'black'}}
            images={this.props.images}
            initialPage={isNaN(this.props.initialImageIndex) ? 0 : this.props.initialImageIndex}
          />
        )
        return (
            <View style={styles.container}>
                {plantImage}
            </View>
        )
    }
}
