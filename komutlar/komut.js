module.exports = {
    help:{
        name: "help",
        aliases: ["yardım"]
    }
}


const ornekmodel = require('../models/SchemaÖrnek.js');
exports.run = async (msg) => {

let CodEming = 'https://discord.gg/NvjVQCb'

// Yeni Veri Kaydı;

let DataYeni = new ornekmodel({
    sunucuID: msg.guild.id,
    kullanıcıID: msg.author.id,
    codeming: CodEming
})
DataYeni.save().then(cıktı => {
    console.log('Veri kayıt edildi, işte sonuç \n '+cıktı+' ')
})


// Veri Çekme;
const veri = ornekmodel.findOne({ 
    sunucuID: msg.guild.id 
 })

 // 2. yol

ornekmodel.findOne({ 
    sunucuID: msg.guild.id 
 }, (err, data) => {
     if (err) console.error(err);
     if(!data)
     msg.channel.send(data.codeming)
 })

 // Veri silme

 ornekmodel.findOneAndDelete({ 
    sunucuID: msg.guild.id 
 }, (err, data) => {
     if (err) console.error(err);
     if(!data)
     msg.channel.send('Veri silindi')
 })

} 
