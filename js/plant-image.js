import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  Platform
} from 'react-native';

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

import PhotoView from 'react-native-photo-view';

export default class PlantData extends Component {

    render () {
        let plantImage;
        if (Platform.OS === 'ios') {
            plantImage = (
                <PhotoView style={styles.image} maximumZoomScale={10} source={this.props.image} />
            )
        } else {
            plantImage = (
                <Image style={styles.image} source={this.props.image} />
            )
        }
        return (
            <View style={styles.container}>
                {plantImage}
            </View>
        )
    }
}