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
    Platform,
    AsyncStorage
} from 'react-native';

import ReactNativeI18n from 'react-native-i18n'
ReactNativeI18n.fallbacks = true
ReactNativeI18n.translations = {
    en: {
        scientificName: 'Scientific Name',
        commonName: 'Common Name',
        khmerName: 'Khmer Name',
        familyName: 'Family Name',
        plantType: 'Plant Type',
        description: 'Description / Characteristics',
        habitat: 'Habitat',
        controlMethods: 'Control Methods',
        reference: 'Reference',
        imageCopyright: 'Image Copyright'
    },
    'km-US': {
        scientificName: 'ឈ្មោះវិទ្យាសាស្រ្ត',
        commonName: 'ឈ្មោះទូទៅ',
        khmerName: 'ឈ្មោះខ្មែរ',
        familyName: 'គ្រួសារ',
        plantType: 'ប្រភេទរុក្ខជាតិ',
        description: 'ការរៀបរាប់ /ចរិកលក្ខណៈ',
        habitat: 'ទីកនង្លែងដុះលូតលាស់',
        controlMethods: 'វិធីសាស្រ្តកំចាត់',
        reference: 'ឯកសារយោង',
        imageCopyright: 'រក្សាសិទ្ធិរូបភាព'
    },
    'km-KH': {
        scientificName: 'ឈ្មោះវិទ្យាសាស្រ្ត',
        commonName: 'ឈ្មោះទូទៅ',
        khmerName: 'ឈ្មោះខ្មែរ',
        familyName: 'គ្រួសារ',
        plantType: 'ប្រភេទរុក្ខជាតិ',
        description: 'ការរៀបរាប់ /ចរិកលក្ខណៈ',
        habitat: 'ទីកនង្លែងដុះលូតលាស់',
        controlMethods: 'វិធីសាស្រ្តកំចាត់',
        reference: 'ឯកសារយោង',
        imageCopyright: 'រក្សាសិទ្ធិរូបភាព'
    }
}

const PLANT_MATURITY_SELECTOR   = 'PLANT_MATURITY_SELECTOR'
const PLANT_AREA_SELECTOR       = 'PLANT_AREA_SELECTOR'
const SEED_TYPE_SELECTOR        = 'SEED_TYPE_SELECTOR'
const MONOCOT_DICOT_SELECTOR    = 'MONOCOT_DICOT_SELECTOR'
const PLANT_TYPE_SELECTOR       = 'PLANT_TYPE_SELECTOR'
const LEAF_AND_COLOUR_SELECTOR  = 'LEAF_AND_COLOUR_SELECTOR'
const LIGULE_SELECTOR           = 'LIGULE_SELECTOR'
const PLANT_IDENTIFIER          = 'PLANT_IDENTIFIER'
const PLANT_DATA                = 'PLANT_DATA'
const PLANT_IMAGE               = 'PLANT_IMAGE'
const MONOCOT_HELP              = 'MONOCOT_HELP'
const LIGULE_HELP               = 'LIGULE_HELP'

let plantMaturitySelected
let plantAreaSelected
let seedTypeSelected
let monocotDicotSelected
let plantTypeSelected
let leafTypeSelected
let flowerColourSelected
let liguleSelected

import PlantMaturitySelector from './plant-maturity-selector'
import PlantAreaSelector from './plant-area-selector'
import SeedTypeSelector from './seed-type-selector'
import MonocotDicotSelector from './monocot-dicot-selector'
import PlantTypeSelector from './plant-type-selector'
import LeafAndColourSelector from './leaf-and-colour-selector'
import LiguleSelector from './ligule-selector'
import PlantIdentifier from './plant-identifier'
import PlantData from './plant-data'
import PlantImage from './plant-image'
import MonocotHelp from './monocot-help'
import LiguleHelp from './ligule-help'

export default class WeedID extends Component {
    selectPlantMaturity (navigator, plantType) {
        plantMaturitySelected = plantType
        navigator.push({ scene: PLANT_AREA_SELECTOR });
    }

    showFavourites (navigator) {
        plantAreaSelected = { key: 'all', title: 'All'}
        plantMaturitySelected = { key: 'flower', title: 'Favourites'}
        navigator.push({ scene: PLANT_IDENTIFIER, favourites: true });
    }

    selectPlantArea (navigator, plantArea) {
        plantAreaSelected = plantArea
        if (plantMaturitySelected.key === 'mature') {
          navigator.push({ scene: MONOCOT_DICOT_SELECTOR });
        } else {
          navigator.push({ scene: SEED_TYPE_SELECTOR });
        }
    }

    selectSeedType (navigator, seedType) {
        seedTypeSelected = seedType
        navigator.push({ scene: PLANT_IDENTIFIER });
    }

    selectMonocotDicot (navigator, monocotDicot) {
        monocotDicotSelected = monocotDicot
        if (monocotDicotSelected === 'Monocot') {
            navigator.push({ scene: PLANT_TYPE_SELECTOR });
        } else {
            navigator.push({ scene: LEAF_AND_COLOUR_SELECTOR });
        }
    }

    selectPlantType (navigator, plantType) {
        plantTypeSelected = plantType
        navigator.push({ scene: LIGULE_SELECTOR });
    }

    selectLeafType (navigator, leafType) {
        leafTypeSelected = leafType
        navigator.push({ scene: PLANT_IDENTIFIER });
    }

    selectFlowerColour (navigator, flowerColour) {
        flowerColourSelected = flowerColour
        navigator.push({ scene: PLANT_IDENTIFIER });
    }

    selectLigule (navigator, ligule) {
        liguleSelected = ligule
        navigator.push({ scene: PLANT_IDENTIFIER });
    }

    selectPlant (navigator, plant) {
        navigator.push({ scene: PLANT_DATA, plant })
    }

    showImages (navigator, images, initialImageIndex) {
        navigator.push({ scene: PLANT_IMAGE, images, initialImageIndex })
    }

    showMonocotHelp (navigator) {
        navigator.push({ scene: MONOCOT_HELP })   
    }

    showLiguleHelp (navigator) {
        navigator.push({ scene: LIGULE_HELP })
    }

    goBack (navigator, route) {
        switch (route.scene) {
            case PLANT_MATURITY_SELECTOR:
                plantMaturitySelected = null
                break
            case PLANT_AREA_SELECTOR:
                plantAreaSelected = null
                break
            case SEED_TYPE_SELECTOR:
                seedTypeSelected = null
                break
            case MONOCOT_DICOT_SELECTOR:
                monocotDicotSelected = null
                break
            case PLANT_TYPE_SELECTOR:
                plantTypeSelected = null
                break
            case LEAF_AND_COLOUR_SELECTOR:
                leafTypeSelected = null
                flowerColourSelected = null
                break
            case LIGULE_SELECTOR:
                liguleSelected
                break
        }
        navigator.pop()
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
            <Navigator initialRoute={{ scene: PLANT_MATURITY_SELECTOR }}
            navigationBar={
                <Navigator.NavigationBar
                routeMapper={{
                    LeftButton: (route, navigator, index, navState) => {
                      if (route.scene === PLANT_MATURITY_SELECTOR) {
                        return null
                      } else {
                        return (
                          <TouchableHighlight activeOpacity={0.5} underlayColor={"rgba(0, 0, 0, 0)"} onPress={this.goBack.bind(this, navigator, route)} style={backButtonStyle}>
                            <Text style={{ fontSize: 16, color: '#00B4CC' }}>Back</Text>
                          </TouchableHighlight>
                        )
                      }
                    },
                    RightButton: (route, navigator, index, navState) => null,
                    Title: (route, navigator, index, navState) => {
                        let title = ''
                        switch (route.scene) {
                            case PLANT_MATURITY_SELECTOR:
                                title = 'Select Weed Type'
                                break
                            case PLANT_AREA_SELECTOR:
                                title = 'Select Area'
                                break
                            case SEED_TYPE_SELECTOR:
                                title = 'Select Seed Type'
                                break
                            case MONOCOT_DICOT_SELECTOR:
                                title = 'Select Monocot / Dicot'
                                break
                            case PLANT_TYPE_SELECTOR:
                                title = 'Select Plant Type'
                                break
                            case LEAF_AND_COLOUR_SELECTOR:
                                title = 'Select Leaf Type or Colour'
                                break
                            case LIGULE_SELECTOR:
                                title = 'Monocots'
                                break
                            case PLANT_IDENTIFIER:
                                title = plantAreaSelected.title + ' ' + plantMaturitySelected.title
                                break
                            case PLANT_DATA:
                                title = route.plant.scientificName
                                break
                            case PLANT_IMAGE:
                                title = 'Image'
                                break
                            case MONOCOT_HELP:
                                title = 'Monocot Help'
                                break
                            case LIGULE_HELP:
                                title = 'Ligule Help'
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
                if (route.scene === PLANT_MATURITY_SELECTOR) {
                    return <PlantMaturitySelector selectPlantMaturity={this.selectPlantMaturity.bind(this, navigator)} showFavourites={this.showFavourites.bind(this, navigator)} />
                } else if (route.scene === PLANT_AREA_SELECTOR) {
                    return <PlantAreaSelector selectPlantArea={this.selectPlantArea.bind(this, navigator)} />
                } else if (route.scene === SEED_TYPE_SELECTOR) {
                    return <SeedTypeSelector selectSeedType={this.selectSeedType.bind(this, navigator)} showImages={this.showImages.bind(this, navigator)} />
                } else if (route.scene === MONOCOT_DICOT_SELECTOR) {
                    return <MonocotDicotSelector selectMonocotDicot={this.selectMonocotDicot.bind(this, navigator)} showImages={this.showImages.bind(this, navigator)} />
                } else if (route.scene === PLANT_TYPE_SELECTOR) {
                    return <PlantTypeSelector selectPlantType={this.selectPlantType.bind(this, navigator)} showImages={this.showImages.bind(this, navigator)} showMonocotHelp={this.showMonocotHelp.bind(this, navigator)} />
                } else if (route.scene === LEAF_AND_COLOUR_SELECTOR) {
                    return <LeafAndColourSelector selectLeafType={this.selectLeafType.bind(this, navigator)} selectFlowerColour={this.selectFlowerColour.bind(this, navigator)} showImages={this.showImages.bind(this, navigator)} />
                } else if (route.scene === LIGULE_SELECTOR) {
                    return <LiguleSelector selectLigule={this.selectLigule.bind(this, navigator)} showImages={this.showImages.bind(this, navigator)} showLiguleHelp={this.showLiguleHelp.bind(this, navigator)} />
                } else if (route.scene === PLANT_IDENTIFIER) {
                    return <PlantIdentifier plantMaturitySelected={plantMaturitySelected} plantAreaSelected={plantAreaSelected} seedTypeSelected={seedTypeSelected} monocotDicotSelected={monocotDicotSelected} plantTypeSelected={plantTypeSelected} leafTypeSelected={leafTypeSelected} flowerColourSelected={flowerColourSelected} favourites={route.favourites} selectPlant={this.selectPlant.bind(this, navigator)} />
                } else if (route.scene === PLANT_DATA) {
                    return <PlantData plant={route.plant} showImages={this.showImages.bind(this, navigator)} />
                } else if (route.scene === PLANT_IMAGE) {
                    return <PlantImage images={route.images} initialImageIndex={route.initialImageIndex} />
                } else if (route.scene === MONOCOT_HELP) {
                    return <MonocotHelp showImages={this.showImages.bind(this, navigator)} />
                } else if (route.scene === LIGULE_HELP) {
                    return <LiguleHelp />
                }
            }}/>
        );
    }
}
