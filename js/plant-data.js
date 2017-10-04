import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView,
  Dimensions,
  AsyncStorage
} from 'react-native';
import ReactNativeI18n from 'react-native-i18n'

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
    },
    favouriteOuter: {
        backgroundColor: '#fff',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    favouriteButton: {
        backgroundColor: '#53877A',
        padding: 10,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center'
    }
})

export default class PlantData extends Component {

    constructor (props) {
        super(props)
        this.state = {
            favourited: false
        }
    }

    componentDidMount () {
        AsyncStorage.getItem('@WeedIDCambodian:favourites').then((value) => {
            if (value) {
                const favourites = value.split(',')
                this.setState({
                    favourited: _.findIndex(favourites, p => p === this.props.plant.identifier.toString()) > -1
                })
            }
        })
    }

    toggleFavourite () {
        AsyncStorage.getItem('@WeedIDCambodian:favourites').then((value) => {
            value = value || ''
            const favourites = value.split(',')
            // If it's already favourited, remove it
            let favourited
            const index = _.findIndex(favourites, p => p === this.props.plant.identifier.toString())
            if (index > -1) {
                favourites.splice(index, 1)
                favourited = false
            } else {
                favourites.push(this.props.plant.identifier)
                favourited = true
            }
            AsyncStorage.setItem('@WeedIDCambodian:favourites', favourites.join(',')).then(() => {
                this.setState({ favourited })
            })
        })
    }

    render () {
        const images = _.keys(this.props.plant.images).map((key, index) => {
            let image = this.props.plant.images[key]
            return (
                <TouchableHighlight activeOpacity={1} underlayColor={"rgba(0, 0, 0, 0.3)"} style={styles.imageBox} onPress={this.props.showImages.bind(null, _.map(this.props.plant.images, (i) => { return { source: i } }), index)} key={key} testID={`plant-${this.props.plant.identifier}-image-${key}`}>
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
                        <Text style={styles.label}>{ReactNativeI18n.t('scientificName')}</Text>
                        <Text style={styles.data}>{this.props.plant.scientificName}</Text>
                        <Text style={styles.label}>{ReactNativeI18n.t('commonName')}</Text>
                        <Text style={styles.data}>{this.props.plant.commonName}</Text>
                        <Text style={styles.label}>{ReactNativeI18n.t('khmerName')}</Text>
                        <Text style={styles.data}>{this.props.plant.khmerName || 'None Available'}</Text>
                        <Text style={styles.label}>{ReactNativeI18n.t('familyName')}</Text>
                        <Text style={styles.data}>{this.props.plant.familyName}</Text>
                        <Text style={styles.label}>{ReactNativeI18n.t('plantType')}</Text>
                        <Text style={styles.data}>{this.props.plant.plantType}</Text>
                        <Text style={styles.label}>{ReactNativeI18n.t('description')}</Text>
                        <Text style={styles.data}>{this.props.plant.description}</Text>
                        <Text style={styles.label}>{ReactNativeI18n.t('habitat')}</Text>
                        <Text style={styles.data}>{this.props.plant.habitat}</Text>
                        <Text style={styles.label}>{ReactNativeI18n.t('controlMethods')}</Text>
                        <Text style={styles.data}>{this.props.plant.controlMethods}</Text>
                        <Text style={styles.label}>{ReactNativeI18n.t('reference')}</Text>
                        <Text style={styles.data}>{this.props.plant.reference}</Text>
                        <Text style={styles.label}>{ReactNativeI18n.t('imageCopyright')}</Text>
                        <Text style={styles.data}>{this.props.plant.imageCopyright}</Text>
                    </View>
                </ScrollView>
                <View style={styles.favouriteOuter}>
                    <Text style={styles.favouriteButton} onPress={this.toggleFavourite.bind(this)}>{this.state.favourited ? '- Unfavourite' : '+ Favourite'}</Text>
                </View>
            </View>
        )
    }
}
