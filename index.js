const express = require("express");
const app = express();

app.listen(() => console.log("Tax bot By Ra3d"));


const Discord = require('discord.js');
const client = new Discord.Client();
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(">| Stats :-");
  console.log(`Servers : > " ${client.guilds.cache.size} " `);
  console.log(`Users : > " ${client.users.cache.size} " `);
  console.log(`channels : > " ${client.channels.cache.size} " `);
  console.log(">| Date :");
  console.log(`> ${new Date()}`);
  console.log(">| Name :");
  console.log(`> ${client.user.username}`);
  client.user.setActivity('+help ', ({type: "WATCHING"})) //حط قيم الي تبيها
});
 
 
client.on("message", async message => {  

   
const prefix = "+";//برفكس حقك
const devs = "627241297878450218";//اي دي حقك
  let args = message.content
    .split(" ")
    .slice(1)
    .join(" "); if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.toLowerCase().startsWith(prefix + "help".toLowerCase())) { 
    let help = new Discord.MessageEmbed()
      .setColor("0x5016f3")
      .setDescription(`**( Probot Taxs . :rocket: )
      
        --------------------------------------------------
                
               Probot Commands :
                
               1-  ${prefix}tax 
               
        --------------------------------------------------
        King Of Samp Bot
            **`);
    message.channel.send(help);
  }

  if (message.content.toLowerCase().startsWith(prefix + "tax".toLowerCase())) { 
    let args2 = parseInt(args)
    let tax = Math.floor(args2 * (20) / (19) + (1))
    let errorembed3 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**It Must be a number**`)
    .setFooter(`${client.user.username}`);
    if (!args2) return message.channel.send(errorembed3);
    let errorembed2 = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must Be A Number**`)
    .setFooter(`${client.user.username}`);
    if (isNaN(args2)) return message.channel.send(errorembed2);
    let errorembed = new Discord.MessageEmbed()
    .setTitle(`**:information_source: Error**`)
    .setColor("#f04747")
    .setDescription(`**Must The Number Larger 1**`)
    .setFooter(`${client.user.username}`);
    if (args2 < 1) return message.channel.send(errorembed);
    let embed3 = new Discord.MessageEmbed()
    .setTitle(`**:money_with_wings: The Final Cost Is :**`)
    .setColor("#43b581")
    .setDescription(`1`)
    .setFooter(`${client.user.username}`);
    if (args2 == 1) return message.channel.send(embed3);
    let embed = new Discord.MessageEmbed()
    .setTitle(`**:money_with_wings: The Final Cost Is :**`)
    .setColor("#43b581")
    .setDescription(`${tax}`)
    .setFooter(`${client.user.username}`);
    message.channel.send(embed);
  }

  

 
  
let ac = ["listening", "watching", "playing", "streaming","default"];
let ac2 = ["online", "idle", "invisible", "dnd","default"];

 let args0 = message.content.split(" ");
  if (args0[0] === (prefix + 'settings')) {
   if (!devs.includes(message.author.id)) return;
    if (args0[1] === 'setname') {
      if (!args0[2]) return message.channel.send('**:x: Please input a new name.**');
      await client.user.setUsername(args0.slice(2).join(" "));
 let changedname = new Discord.MessageEmbed()
  .setTimestamp().setColor("GREEN").setAuthor(message.author.username, message.author.displayAvatarURL()).setFooter(client.user.username,client.user.displayAvatarURL()).setThumbnail(message.guild.iconURL())
  .setDescription(`**✅ Done , The bot name changed to : ${args0.slice(2).join(" ")}**`)
  message.channel.send(changedname)
       message.react('✅');
    } else if (args0[1] === 'setavatar') {
      if (!args0[2]) return message.channel.send('**:x: Please input an avatar URL.**');
      await client.user.setAvatar(args0.slice(2).join(" "));
 let changedavatar = new Discord.MessageEmbed()
  .setTimestamp().setImage(args0.slice(2).join(" ")).setColor("GREEN").setAuthor(message.author.username, message.author.displayAvatarURL()).setFooter(client.user.username,client.user.displayAvatarURL()).setThumbnail(message.guild.iconURL())
  .setDescription(`**✅ The bot avatar was changed to :**`)
  message.channel.send(changedavatar)
       message.react('✅');
    } else { 
       message.channel.send(`> **:bulb: Usage**: ${prefix}settings [ \`setname\` - \`setavatar\` - ]`);
       message.react('ℹ️');
    }
  }

  
      if (message.content === prefix + "ping") {
        const betha = new Discord.MessageEmbed()
        .setTitle('Your PING')
        .setColor("RANDOM")
        .addField([`${Date.now() - message.createdTimestamp}` + "MS"])
        .setAuthor(message.author.username, message.author.avatarURL({ format: 'png', dynamic: true }))
      message.channel.send(betha)
      }
});

const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



client.login(process.env.token); //توكن بوتك هنا
