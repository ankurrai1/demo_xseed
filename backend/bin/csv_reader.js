const csvFilePath = './bin/army.csv'
const troops = require("../models/troops")
const csv = require('csvtojson')
const upload = function () {
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            try {
                for (let index = 0; index < jsonObj.length; index++) {
                    const trp = new troops(jsonObj[index]);
                    const save = trp.save();
                }
            } catch (error) {
        
                console.log("some error to check")
            }
            console.log("uploaded sucessfully");
        })
}
module.exports={
    upload
}