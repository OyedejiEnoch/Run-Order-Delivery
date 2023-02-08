const mongoose = require("mongoose")


const connectDatabase = () => {
    mongoose.connect("mongodb://localhost:27017/RunOrderDb", { useNewUrlParser: true }).then(con => {
        console.log(`MongoDB database connected`);
    })
}


module.exports = connectDatabase