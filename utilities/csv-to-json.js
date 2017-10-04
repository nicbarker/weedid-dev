const fs = require('fs')
const csv = require('csv-parse')
const _ = require('lodash')

var stream = fs.createReadStream("./files/test.csv");

let properties;
let output = []
var csvStream = csv().on("data", function(data){
    if (data[0] === 'identifier') {
        properties = data
        return
    }
    const outputObject = {}
    // console.log(data[0])
    data.map(function(property, index) {
        outputObject[properties[index]] = property
    })
    output.push(outputObject)
}).on('error', function (e) { console.log(e) }).on("end", function(){
    output = _.sortBy(output, [d => parseInt(d['identifier'])])
    fs.writeFile("./files/output.js", JSON.stringify(output, null, 2), function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
});

stream.pipe(csvStream);
