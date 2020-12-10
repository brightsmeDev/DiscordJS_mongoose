const mongoose = require('mongoose');


const ÖrnekSchema = new mongoose.Schema({
    sunucuID: String,
    kullanıcıID: String,
    codeming: String
})

module.exports = mongoose.model('örnek_data', ÖrnekSchema)