/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    TouchableHighlight,
    Platform
} from 'react-native';

const PLANT_TYPE_SELECTOR   = 'PLANT_TYPE_SELECTOR'
const PLANT_IDENTIFIER      = 'PLANT_IDENTIFIER'
const PLANT_DATA            = 'PLANT_DATA'
const PLANT_IMAGE           = 'PLANT_IMAGE'

import PlantTypeSelector from './plant-type-selector'
import PlantIdentifier from './plant-identifier'
import PlantData from './plant-data'
import PlantImage from './plant-image'

export default class project extends Component {
    selectPlantType (navigator, plantType) {
        navigator.push({ scene: PLANT_IDENTIFIER, plantType });
    }

    selectPlant (navigator, plant) {
        navigator.push({ scene: PLANT_DATA, plant })
    }

    showImage (navigator, image) {
        navigator.push({ scene: PLANT_IMAGE, image })
    }

    render () {
        const iosBarStyle = {
            marginTop: 20,
            backgroundColor: '#fefefe',
            borderBottomColor: '#eee',
            borderBottomWidth: 1,
            borderTopColor: '#eee',
            borderTopWidth: 1
        }

        const androidBarStyle = {
            paddingTop: 24,
            backgroundColor: '#fefefe',
            borderBottomColor: '#eee',
            borderBottomWidth: 1,
            borderTopColor: '#eee',
            borderTopWidth: 1,
            height: 84,
        }

        const barStyle = Platform.OS === 'ios' ? iosBarStyle : androidBarStyle

        const iosBackButtonStyle = {
            paddingLeft: 10
        }

        const androidBackButtonStyle = {
            paddingLeft: 10,
            marginTop: 27
        }

        const backButtonStyle = Platform.OS === 'ios' ? iosBackButtonStyle : androidBackButtonStyle

        return (
            <Navigator initialRoute={{ scene: PLANT_TYPE_SELECTOR }}
            navigationBar={
                <Navigator.NavigationBar
                routeMapper={{
                    LeftButton: (route, navigator, index, navState) => {
                        if (route.scene === PLANT_TYPE_SELECTOR) {
                          return null
                        } else {
                          return (
                            <TouchableHighlight activeOpacity={0.5} underlayColor={"rgba(0, 0, 0, 0)"} onPress={() => navigator.pop()} style={backButtonStyle}>
                              <Text style={{ fontSize: 16, color: '#00B4CC' }}>Back</Text>
                            </TouchableHighlight>

                          )
                        }
                    },
                    RightButton: (route, navigator, index, navState) => null,
                    Title: (route, navigator, index, navState) => {
                        let title = ''
                        switch (route.scene) {
                            case PLANT_TYPE_SELECTOR:
                                title = 'Select Weed Type'
                                break
                            case PLANT_IDENTIFIER:
                                title = route.plantType.title
                                break
                            case PLANT_DATA:
                                title = route.plant.scientificName
                                break
                            case PLANT_IMAGE:
                                title = 'Image'
                                break
                        }
                        return (
                            <Text style={{ fontSize: 16, textAlign: 'center' }}>{title}</Text>
                        )
                    },
                    }}
                style={barStyle}
                />
            }
            renderScene={(route, navigator) => {
                if (route.scene === PLANT_TYPE_SELECTOR) {
                    return <PlantTypeSelector selectPlantType={this.selectPlantType.bind(this, navigator)} />
                } else if (route.scene === PLANT_IDENTIFIER) {
                    return <PlantIdentifier plantType={route.plantType} selectPlant={this.selectPlant.bind(this, navigator)} />
                } else if (route.scene === PLANT_DATA) {
                    return <PlantData plant={route.plant} showImage={this.showImage.bind(this, navigator)} />
                } else if (route.scene === PLANT_IMAGE) {
                    return <PlantImage image={route.image} />
                }
            }}/>
        );
    }
}