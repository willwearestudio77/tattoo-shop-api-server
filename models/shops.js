const mongoose = require('mongoose');
const {Schema} = mongoose

const shopSchema = new Schema({
    name:{
        type:String,
        // required:true
    },
    location:{
        type:String,
        // required:true
    }
})

const Shop = mongoose.model("Shop",shopSchema);
module.exports = Shop