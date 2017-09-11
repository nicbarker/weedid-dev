import React, { Component } from 'react'
import _ from 'lodash'
import ReactNativeI18n from 'react-native-i18n'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Dimensions,
  AsyncStorage
} from 'react-native'

import plantData from './plantData'

const plantDataKhmer = []

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 84
    },
    scrollView: {
        paddingTop: 5,
        flexDirection: 'column',
        padding: 5
    },
    imageRow: {
        flexWrap: 'nowrap',
        flexDirection: 'row'
    },
    imageBox: {
        padding: 5,
        flex: 1
    },
    image: {
        flex: 1,
        width: null,
        height: Dimensions.get("window").height / 4,
        resizeMode: 'cover'
    }
}

export default class PlantIdentifier extends Component {

    constructor (props) {
        super(props)
        this.state = {
            favourites: []
        }
    }

    componentDidMount () {
        AsyncStorage.getItem('@WeedIDCambodian:favourites').then((value) => {
            if (!value) {
                this.setState({
                    favourites: []
                })
                AsyncStorage.setItem('@WeedIDCambodian:favourites', this.state.favourites.join(',') )
            } else {
                this.setState({
                    favourites: value.split(',')
                })
            }
        }).done();
    }

    render () {
        console.log(this.props)
        const dataToUse = ReactNativeI18n.locale === 'km' || ReactNativeI18n.locale === 'km-US' || ReactNativeI18n.locale === 'km-KH' ? plantDataKhmer : plantData
        // If we're looking at favourites, grab those instead
        let filteredPlantImages = dataToUse
        if (this.props.favourites === true) {
            filteredPlantImages = _.filter(filteredPlantImages, (plant) => {
                if (_.findIndex(this.state.favourites, (p) => { return p === plant.identifier.toString() }) > -1) {
                    return plant.images['mature'] || plant.images['flower'] || plant.images['seed']
                }
            });
        } else {
            // Filter for plant area
            if (this.props.plantArea) {
              filteredPlantImages = _.filter(filteredPlantImages, (plant) => {
                  return (plant.upland && this.props.plantArea.key === 'upland') || (plant.lowland && this.props.plantArea.key === 'lowland')
              });
            }

            // Filter for seed type
            if (this.props.seedType) {
              filteredPlantImages = _.filter(filteredPlantImages, (plant) => {
                  return plant.seedType === this.props.seedType
              });
            }

            // Only use plants that actually have an image for the type that we're looking for (seed vs mature)
            filteredPlantImages = _.filter(filteredPlantImages, (plant) => {
                return plant.images[this.props.plantType.key]
            });
        }1

        const plantImagesSingle = filteredPlantImages.map((plant) => {
            return (
                <TouchableHighlight style={styles.imageBox} onPress={this.props.selectPlant.bind(null, plant)} key={plant.identifier} testID={`plant-detail-${plant.identifier}`}><Image style={styles.image} source={plant.images[this.props.plantType.key]}/></TouchableHighlight>
            )
        })
        // Put the images into rows of two
        const plantImagesRows = [];
        for (i = 0; i < plantImagesSingle.length; i += 2) {
            const firstImage = plantImagesSingle[i]
            const secondImage = i + 1 < plantImagesSingle.length ? plantImagesSingle[i + 1] : <View style={styles.imageBox} key={i + 2}><Image style={styles.image} /></View>
            plantImagesRows.push((
                <View style={styles.imageRow} key={i}>{firstImage}{secondImage}</View>
            ))
        }

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {plantImagesRows}
                </ScrollView>
            </View>
        )
    }
}
