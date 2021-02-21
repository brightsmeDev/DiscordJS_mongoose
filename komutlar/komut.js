module.exports = {
    help:{
        name: "help",
        aliases: ["yardım"]
    }
}


const ornekmodel = require('../models/SchemaÖrnek.js');
exports.run = async (msg) => {

// Yeni Veri Kaydı;

let DataYeni = new ornekmodel({
    sunucuID: msg.guild.id,
    kullanıcıID: msg.author.id,
})
DataYeni.save().then(cıktı => {
    console.log('Veri kayıt edildi, işte sonuç \n '+cıktı+' ')
})


// Veri Çekme;
const veri = await ornekmodel.findOne({ 
    sunucuID: msg.guild.id 
 })

 // 2. yol

await ornekmodel.findOne({ 
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
