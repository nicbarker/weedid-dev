import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  Dimensions
} from 'react-native';

import _ from 'lodash'

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        marginTop: 84,
        flexDirection: 'column',
        alignItems: 'stretch',
    },
    container: {
        flexDirection: 'column',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    imageBox: {
        height: Dimensions.get("window").height / 4,
        width: Dimensions.get("window").width / 3,
    },
    image: {
        flex: 1,
        height: Dimensions.get("window").height / 4,
        width: Dimensions.get("window").width / 3,
        resizeMode: 'cover'
    },
    body: {
        padding: 15
    },
    data: {
        marginBottom: 20
    },
    label: {
        color: '#888',
        fontWeight: 'bold',
        marginBottom: 5
    }
})

export default class PlantData extends Component {

    render () {
        const images = _.map(this.props.plant.images, (image, key) => {
            return (
                <TouchableHighlight activeOpacity={1} underlayColor={"rgba(0, 0, 0, 0.3)"} style={styles.imageBox} onPress={this.props.showImage.bind(null, image)} key={key}>
                    <Image style={styles.image} source={image} />
                </TouchableHighlight>
            )
        })
        return (
            <View style={styles.outerContainer}>
                <ScrollView contentContainerStyle={styles.container}>
                    <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
                        {images}
                    </ScrollView>
                    <View style={styles.body}>
                        <Text style={styles.label}>Scientific Name</Text>
                        <Text style={styles.data}>{this.props.plant.scientificName}</Text>
                        <Text style={styles.label}>Common Name</Text>
                        <Text style={styles.data}>{this.props.plant.commonName}</Text>
                        <Text style={styles.label}>Khmer Name</Text>
                        <Text style={styles.data}>{this.props.plant.khmerName || 'None Available'}</Text>
                        <Text style={styles.label}>Family Name</Text>
                        <Text style={styles.data}>{this.props.plant.familyName}</Text>
                        <Text style={styles.label}>Plant Type</Text>
                        <Text style={styles.data}>{this.props.plant.plantType}</Text>
                        <Text style={styles.label}>Description / Characteristics</Text>
                        <Text style={styles.data}>{this.props.plant.description}</Text>
                        <Text style={styles.label}>Habitat</Text>
                        <Text style={styles.data}>{this.props.plant.habitat}</Text>
                        <Text style={styles.label}>Control Methods</Text>
                        <Text style={styles.data}>{this.props.plant.controlMethods}</Text>
                        <Text style={styles.label}>Reference</Text>
                        <Text style={styles.data}>{this.props.plant.reference}</Text>
                        <Text style={styles.label}>Image Copyright</Text>
                        <Text style={styles.data}>{this.props.plant.imageCopyright}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}