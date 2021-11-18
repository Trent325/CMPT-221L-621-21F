const mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose"); 

const StudentSchema = mongoose.Schema({
    FirstName: String,
    LastName: String
})



module.exports = mongoose.model("Student", StudentSchema);
