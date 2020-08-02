const {Schema,model} = require('mongoose');
const CalenderSchema = new Schema({
    date : {
        type: String,
        trim: true,
        required: true
    },
    title:{
        type: String,
        trim: true,
        required: true
    },
    detail: {
        type: String,
        trim: true,
        required: true
    }
}, {timestamps: true})
module.exports = model("Calender", CalenderSchema);