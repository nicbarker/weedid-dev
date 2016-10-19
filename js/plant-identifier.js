import React, { Component } from 'react'
import _ from 'lodash'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Dimensions
} from 'react-native'

const plantData = [
    { 
        identifier: 1,
        scientificName: 'Cyperus difformis',
        commonName: 'Small flower umbrella plant',
        khmerName: '',
        familyName: 'Cyperacee',
        plantType: 'Sedge',
        description: 'Annual with fibrous and reddish roots; up to 100 cm tall. Stems are tufted, smooth and erect, triangular and 2−3 mm thick; slightly winged. Three to 4 basal leaves; sheaths united at base, lower ones straw-colored to brown; blades flaccid and linear, 15−45 cm long. Inflorescence is umbellate and subtended by two leaf-like bracts; rays 1−5 cm long, some with long peduncle, some without stalk; spikelets numerous, crowded in masses about 2−5 mm long, each spikelet composed of 10−30 flowers. Fruit is a brownish nut, elliptical to slightly obovate, about 0.6 mm long and lightly pitted.',
        habitat: 'The plant grows well in flooded or moist fertile soils and common in lowland rice. Also found on poorer sandy or clay soils in fallow lands but cannot tolerate deep flooding. It has a short life span; propagates by seeds and produces seeds throughout the year.',
        controlMethods: 'Hand and mechanical weeding. Pre-sowing and post-emergence herbicide e.g. 2,4-D. Pre-emergence herbicide e.g. Butachlor. http://www.knowledgebank.irri.org/training/fact-sheets/item/cyperus-difformis',
        reference: 'http://www.knowledgebank.irri.org/training/fact-sheets/item/cyperus-difformis',
        imageCopyright: 'Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com',
        images: {
            seed: require('../images/cyperus-difformis/seed.jpg'),
            mature: require('../images/cyperus-difformis/mature.jpg'),
            flower: require('../images/cyperus-difformis/flower.jpg')
        },
    },
    { 
        identifier: 2,
        scientificName: 'Cyperus iria',
        commonName: 'Rice flatsedge; Umbrella sedge',
        khmerName: '',
        familyName: 'Cyperacee',
        plantType: 'Sedge',
        description: 'Tufted annual herb, or occasionally perennial, with fibrous roots, 15−75 yellowish red roots; 10−70 cm tall. Stems sharply 3 angled, tufted, smooth, 5−80 cm high. Leaves basal, rough to touch in upper part, linear, flaccid, with gradually tapering point and 3−8 mm wide; sheath reddish or purplish brown, enveloping the stem at base. Inflorescence simple or compound umbel composed of numerous erect-spreading 3−10 mm long flattened spikelets. Fruit a three-angled, 1.0−1.5 mm nut with slightly concave sides, and shiny dark brown to black.',
        habitat: 'Thrives in wetland rice, dryland annual crops, and plantation crops. Multiplies rapidly, can produce 3,000−5,000 seeds per plant, seedlings emerge immediately after rice is sown; flowers month later and can establish second generation in the same season. It flowers throughout the year.',
        controlMethods: 'Hand weeding at earlier stage of growth. Pre-emergence and post-emergence herbicides http://www.knowledgebank.irri.org/training/fact-sheets/item/cyperus-iria',
        reference: 'http://www.knowledgebank.irri.org/training/fact-sheets/item/cyperus-iria',
        imageCopyright: 'Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com',
        images: {
            seed: require('../images/cyperus-iria/seed.jpg'),
            mature: require('../images/cyperus-iria/mature.jpg'),
            flower: require('../images/cyperus-iria/flower.jpg')
        },
    },
    { 
        identifier: 3,
        scientificName: 'Echinochloa colona',
        commonName: 'Awnless barnyard grass',
        khmerName: 'Smao Bek Kbal',
        familyName: 'Poaceae',
        plantType: 'Grass',
        description: 'A tufted annual grass, up to 60 cm tall. Stems are reddish purple or green, ascending to erect, without hairs. Leaf is linear, 10−15 cm long, basal portion often tinged with red or purple; ligule absent. Inflorescence is simple, ascending racemes, green to purple, about 5−15 cm long; spikelets subsessile 1−3 mm long.',
        habitat: 'Flowers throughout the year and is propagated by seeds. Seeds have a short dormancy period. It can be present in large numbers and responsive to nutrients. Prefers moist but unflooded conditions and is a problem mainly in upland and rainfed lowland rice fields rather than in flooded fields.',
        controlMethods: 'Flooding Hand weeding or use of hoe Pre-emergence & post-emergence herbicides application http://www.knowledgebank.irri.org/training/fact-sheets/item/echinochloa-colona',
        reference: 'http://www.knowledgebank.irri.org/training/fact-sheets/item/echinochloa-colona',
        imageCopyright: 'Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com',
        images: {
            seed: require('../images/echinochloa-colona/seed.jpg'),
            mature: require('../images/echinochloa-colona/mature.jpg'),
            flower: require('../images/echinochloa-colona/flower.jpg')
        },
    },
    { 
        identifier: 4,
        scientificName: 'Ecinochloa crus galli',
        commonName: 'Common barnyard grass',
        khmerName: '',
        familyName: 'Poaceae',
        plantType: 'Grass',
        description: 'Annual, erect, tufted or reclining at base; up to 200 cm tall. Stems is rooting at lower nodes, cylindrical, without hairs, and filled with white spongy pith. Leaf is linear with a broad round base and narrow top; blade 10−40 cm long; ligule absent. Inflorescence is loose green to purplish, 10−25 cm long comprising compound racemes; spikelets are more or less elliptical and pointed, usually slightly hairy; awns, if present, green to purplish, 2−5 mm long.',
        habitat: 'Propagates by seed. Flowers throughout the year and can produce seeds within 60 days. Prefers moist to wet land; easily grows in direct-seeded rice fields and wastelands. It is a common weed in swamps and aquatic places.',
        controlMethods: 'Thorough land preparation for rice under wet or dry conditions. The fungal pathogen, Exserohilum monoceras. Pre-emergence & post-emergence herbicide http://www.knowledgebank.irri.org/training/fact-sheets/item/echinochloa-crus-galli',
        reference: 'http://www.knowledgebank.irri.org/training/fact-sheets/item/echinochloa-crus-galli',
        imageCopyright: 'Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com',
        images: {
            seed: require('../images/echinochloa-crus-galli/seed.jpg'),
            mature: require('../images/echinochloa-crus-galli/mature.jpg'),
            flower: require('../images/echinochloa-crus-galli/flower.jpg')
        },
    },
    { 
        identifier: 5,
        scientificName: 'Fimbristylis miliacea',
        commonName: 'Lesser fimbrystylis',
        khmerName: '',
        familyName: 'Cyperacee',
        plantType: 'Sedge',
        description: 'Annual or perennial, without hairs, strongly tillering, with fibrous roots and up to 80−90 cm high. Stem: slender, erect, densely tufted, compressed, and smooth; strongly angled at the top and flattened at the base; 20−70 cm tall. Leaf: stiff and thread-like; on flowerless stems: in 2 rows and with flattened sheaths; no prominent midribs; on flowering stems: only linear leaf sheaths; basal leaves have overlapping leaf sheaths; ligule absent. Inflorescence: 6−10 cm long, compound umbel with 6−50 spikelets; spikelets reddish brown, 2−4 mm long and either round or acute at apex. Fruit: straw-colored or pale ivory nut, 0.2−0.3 mm long.',
        habitat: 'Propagates by seeds; flowers year-round and produces 10,000 seeds per plant; seeds can germinate immediately after reaching maturity. In rice fields, seedlings appear soon after rice is sown; flowers in about one month and capable of producing a second generation in the same season. Germinates where flood water is shallow or absent and seedlings may emerge throughout the entire growing period of rice.',
        controlMethods: 'Hand cultivation Post-emergence herbicide e.g. 2,4-D http://www.knowledgebank.irri.org/training/fact-sheets/item/fimbristylis-miliacea',
        reference: 'http://www.knowledgebank.irri.org/training/fact-sheets/item/fimbristylis-miliacea',
        imageCopyright: 'Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com',
        images: {
            seed: require('../images/fimbristylis-miliacea/seed.jpg'),
            mature: require('../images/fimbristylis-miliacea/mature.jpg'),
            flower: require('../images/fimbristylis-miliacea/flower.jpg')
        },
    },
    { 
        identifier: 6,
        scientificName: 'Ischaemum rugosum',
        commonName: 'Wrinkle duck beak',
        khmerName: '',
        familyName: 'Poaceae',
        plantType: 'Grass',
        description: 'An erect or ascending annual or perennial; up to 100 cm tall. Stem: often purplish, usually has hairs at nodes, cylindrical. Leaf: blades 10−30 cm long, glabrous or with scattered hairs on both surfaces; compressed sheaths rather loose and green or purplish, with hairs on margins; ligule membranous and fused with auricles. Inflorescence: paired terminal spikes that are often strongly pressed against one another, thus appearing like a single spike. At maturity, it separates into two spike-like racemes. Spikelets: paired, one is sessile, the other pedicelled; sessile spikelet yellowish green, up to 6 mm long, first glume prominently transversely wrinkled; awns spiral at base, dark colored.',
        habitat: 'Propagates by seeds. Seeds do not germinate while submerged though, after emergence, they can grow easily under flooded conditions. Ischaemum rugosum is found in wet conditions, especially in direct-seeded rice fields.',
        controlMethods: 'Hand weeding or hoeing. Pre-emergence herbicide application e.g. Butachlor or pendimethalin http://www.knowledgebank.irri.org/training/fact-sheets/item/ischaemum-rugosum-salisb',
        reference: 'http://www.knowledgebank.irri.org/training/fact-sheets/item/ischaemum-rugosum-salisb',
        imageCopyright: 'Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com',
        images: {
            seed: require('../images/ischaemum-rugosum/seed.jpg'),
            seedling: require('../images/ischaemum-rugosum/seedling.jpg'),
            mature: require('../images/ischaemum-rugosum/mature.jpg'),
            flower: require('../images/ischaemum-rugosum/flower.jpg')
        },
    },
    { 
        identifier: 7,
        scientificName: 'Oryza sativa',
        commonName: 'Weedy rice',
        khmerName: '',
        familyName: 'Poaceae',
        plantType: 'Grass',
        description: 'A variable, erect, stout or slender annual rice with varying height and form. Stem: tufted, erect, hollow and slender or stout, smooth and hairless, 80−120 cm tall. Leaf: blade flat with parallel veins, 15−30 cm long; ligule and auricle present; ligule: usually 10−20 mm long. Inflorescence: an erect or nodding loose panicle, spikelet: about 7 mm long, flat, one-flowered, with or without awns of varying length.',
        habitat: 'Weedy rice is highly variable and thought to originate from outcrosses to wild species (O. nivara, O. rufipogon) or as a result of outcrossing within domestic rice. It is distinguished by the key weedy traits of ready panicle shattering and variable secondary dormancy. It is highly adapted to a wide range of environmental conditions, dry land to deepwater culture. It commonly possesses red pericarp, which requires additional milling, thereby reducing the quality of milled rice.',
        controlMethods: 'The use of crop seed free from wild rice, crop rotation, soil puddling, hand weeding of initial infestations, and water management. Pre-sowing herbicide application. http://www.knowledgebank.irri.org/training/fact-sheets/item/oryza-sativa',
        reference: 'http://www.knowledgebank.irri.org/training/fact-sheets/item/oryza-sativa',
        imageCopyright: 'Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com',
        images: {
            seed: require('../images/oryza-sativa/seed.jpg'),
            mature: require('../images/oryza-sativa/mature.jpg'),
            flower: require('../images/oryza-sativa/flower.jpg')
        },
    },
    { 
        identifier: 8,
        scientificName: 'Leptochloa chinensis',
        commonName: 'Red sprangletop',
        khmerName: '',
        familyName: 'Poaceae',
        plantType: 'Grass',
        description: 'A tufted and smooth annual or perennial; up to 120 cm tall. Stem: slender, hollow, erect or ascending from a branching base, rooting at lower nodes, smooth and without hair, typically 10−20 nodes, and can reach as high as 50−100 cm. Leaf: smooth, linear, 10−30 cm long; ligule an inconspicuous membrane 1−2 mm long and deeply divided into hairlike segments. Inflorescence: narrowly ovate, loose panicle, main axis 10−40 cm long, and with many spike-like slender branches; racemes slender, each with two rows of spikelets, spikelets 2−3.2 mm long, purplish or green and 4−6 flowered.',
        habitat: 'Red sprangletop propagates by seeds or vegetatively by rootstocks. Germination does not occur when seeds are submerged in water.',
        controlMethods: 'TRotovating & puddling; Hand weeding during early stage Pre-emergence herbicide e.g. pendimethalin Post-emergence herbicide e.g. quinclorac http://www.knowledgebank.irri.org/training/fact-sheets/item/leptochloa-chinensis',
        reference: 'http://www.knowledgebank.irri.org/training/fact-sheets/item/leptochloa-chinensis',
        imageCopyright: 'Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com',
        images: {
            seed: require('../images/leptochloa-chinensis/seed.jpg'),
            seedling: require('../images/leptochloa-chinensis/seedling.jpg'),
            mature: require('../images/leptochloa-chinensis/mature.jpg'),
            flower: require('../images/leptochloa-chinensis/flower.jpg')
        },
    },
    { 
        identifier: 9,
        scientificName: 'Panicum repens',
        commonName: 'Torpedo grass',
        khmerName: '',
        familyName: 'Poaceae',
        plantType: 'Grass',
        description: 'Perennial. Rhizomes elongated. Stolons absent, or present. Culms erect, or geniculately ascending; 30–100 cm long. Leaves distichous. Ligule: a ciliate membrane. Leaf-blades erect; flat, or convolute; 7–25 cm long; 2–8 mm wide; coriaceous; stiff; glaucous. Leaf-blade apex acuminate, or attenuate; muticous, or pungent.',
        habitat: 'Natural habitats are often sandy, but it is able to persist in heavy soils that remain moist due to high rainfall, poor drainage or irrigation.',
        controlMethods: 'Pre-sowing herbicide application e.g. Glyshopate Post-emergence herbicide application e.g. Quinclorac http://www.cabi.org/isc/datasheet/38670',
        reference: 'http://www.cabi.org/isc/datasheet/38670',
        imageCopyright: 'Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com',
        images: {
            seed: require('../images/panicum-repens/seed.jpg'),
            mature: require('../images/panicum-repens/mature.jpg'),
            flower: require('../images/panicum-repens/flower.jpg')
        },
    },
    { 
        identifier: 10,
        scientificName: 'Ipomoea aquatica',
        commonName: 'Swamp morning-glory',
        khmerName: 'Trakoeun (ត្រកួន)',
        familyName: 'Convolvulaceae',
        plantType: 'Broadleaf',
        description: 'I. aquatica is a sprawling vine, annual or perennial, creeping on mud or floating on water; stems: teeter, branched, hollow and succulent when floating, otherwise solid and firm, up to 3 m long, to 1 cm in diameter.',
        habitat: 'I. aquatica occurs in moist, marshy, or inundated localities, in shallow pools, ditches, or wet ricefields, from sea level to 1000 m. It forms dense masses and is easily propagated from cuttings. It is also cultivated as a vegetable in different parts of Asia.',
        controlMethods: 'Hand weeding; (For culinary use as vegetable)',
        reference: 'https://plants.ifas.ufl.edu/plant-directory/ipomoea-aquatica/ https://worldcrops.org/crops/water-spinach',
        imageCopyright: 'Prof Robert J. Martin ASR/University of Sydney bobmartin@asrcambodia.com',
        images: {
            seed: require('../images/ipomoea-aquatica/seed.png'),
            seedling: require('../images/ipomoea-aquatica/seedling.jpg'),
            mature: require('../images/ipomoea-aquatica/mature.jpg'),
            flower: require('../images/ipomoea-aquatica/flower.jpg')
        },
    }
]

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

    render () {
        // Only grab images of this particular type (i.e. seed, seedling, flower)
        const filteredPlantImages = _.filter(plantData, (plant) => {
            return plant.images[this.props.plantType.key]
        });
        const plantImagesSingle = filteredPlantImages.map((plant) => {
            return (
                <TouchableHighlight style={styles.imageBox} onPress={this.props.selectPlant.bind(null, plant)} key={plant.identifier}><Image style={styles.image} source={plant.images[this.props.plantType.key]}/></TouchableHighlight>
            )
        })
        // Put the images into rows of two
        const plantImagesRows = [];
        for (i = 0; i < plantImagesSingle.length; i += 2) {
            const firstImage = plantImagesSingle[i]
            const secondImage = i + 1 < plantImagesSingle.length ? plantImagesSingle[i + 1] : null
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