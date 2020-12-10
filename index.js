const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose = require('mongoose')
const fs  = require('fs')
const ayarlar = require('./ayarlar.json')
client.login(ayarlar.token)
// KOMUT
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

fs.readdir("./komutlar", (err, files) => {
    if (err) console.error(err)
    files.forEach(file => {
        const command = require(`./komutlar/${file}`)
        client.commands.set(command.help.name, command)
        
        command.help.aliases.forEach(a => {
            client.aliases.set(a, command.help.name)
        })
    })
})







// EVENTS
client.on("message", async msg => {
    const prefix = ayarlar.prefix;
    const messages = msg.content.split(" ");
    const cmd = messgaes[0].toLowerCase();
    const args = messages.slice(1);
    const Cmdrun =  client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
    if(Cmdrun){

        Cmdrun.run(client, msg, args)
    }
})

client.on("ready", () => {
    console.info('Bot hazır!')
})



// MONGOOSE
mongoose.connect(ayarlar.mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Mongoose Bağlandı!')
})

.catch((err) => console.log(err));
