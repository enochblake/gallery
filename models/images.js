const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for our database
var imageSchema = new Schema({
    name: String,
    path: String,
    size: Number,
    date: {type: Date, default: Date() }

});

// convert the schema into a Model
let Image = mongoose.model('Image', imageSchema);

module.exports = Image;

// QJssyGrKQFeZCdwR
// mongodb+srv://<db_username>:<db_password>@cluster0.0ira5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0