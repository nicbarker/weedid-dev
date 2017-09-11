const fs = require('fs')
const cap = require('lodash.capitalize')
const species = require('./files/output.js')

for (let i = 0; i < species.length; i++) {
  const s = species[i]
  if (s.scientificName) {
    let fixedName = cap(s.scientificName.toLowerCase().split(' ').slice(0, 2).join('_'))
    let images = {}
    // seed
    for (let j = 1; j < 10; j++) {
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_seed_' + j + '.jpg')) {
          images['seed'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_seed_' + j + '.jpg'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_seed_' + j + '.JPG')) {
          images['seed'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_seed_' + j + '.JPG'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_seed_' + j + '.jpeg')) {
          images['seed'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_seed_' + j + '.jpeg'
      }
    }
    // mature
    for (let j = 1; j < 10; j++) {
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_mature_' + j + '.jpg')) {
          images['mature'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_mature_' + j + '.jpg'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_mature_' + j + '.JPG')) {
          images['mature'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_mature_' + j + '.JPG'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_mature_' + j + '.jpeg')) {
          images['mature'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_mature_' + j + '.jpeg'
      }
    }
    // flower
    for (let j = 1; j < 10; j++) {
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_flower_' + j + '.jpg')) {
          images['flower'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_flower_' + j + '.jpg'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_flower_' + j + '.JPG')) {
          images['flower'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_flower_' + j + '.JPG'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_flower_' + j + '.jpeg')) {
          images['flower'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_flower_' + j + '.jpeg'
      }
    }
    // fruit
    for (let j = 1; j < 10; j++) {
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_fruit_' + j + '.jpg')) {
          images['fruit'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_fruit_' + j + '.jpg'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_fruit_' + j + '.JPG')) {
          images['fruit'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_fruit_' + j + '.JPG'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_fruit_' + j + '.jpeg')) {
          images['fruit'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_fruit_' + j + '.jpeg'
      }
    }
    // spikelet
    for (let j = 1; j < 10; j++) {
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_spikelet_' + j + '.jpg')) {
          images['spikelet'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_spikelet_' + j + '.jpg'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_spikelet_' + j + '.JPG')) {
          images['spikelet'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_spikelet_' + j + '.JPG'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_spikelet_' + j + '.jpeg')) {
          images['spikelet'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_spikelet_' + j + '.jpeg'
      }
    }
    // inflorescence
    for (let j = 1; j < 10; j++) {
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_inflorescence_' + j + '.jpg')) {
          images['inflorescence'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_inflorescence_' + j + '.jpg'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_inflorescence_' + j + '.JPG')) {
          images['inflorescence'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_inflorescence_' + j + '.JPG'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_inflorescence_' + j + '.jpeg')) {
          images['inflorescence'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_inflorescence_' + j + '.jpeg'
      }
    }
    // ligule
    for (let j = 1; j < 10; j++) {
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_ligule_' + j + '.jpg')) {
          images['ligule'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_ligule_' + j + '.jpg'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_ligule_' + j + '.JPG')) {
          images['ligule'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_ligule_' + j + '.JPG'
      }
      if (fs.existsSync('../images/plant-images/' + fixedName + '/' + fixedName + '_ligule_' + j + '.jpeg')) {
          images['ligule'] = '../images/plant-images/' + fixedName + '/' + fixedName + '_ligule_' + j + '.jpeg'
      }
    }
    console.log(images)
  }
}
