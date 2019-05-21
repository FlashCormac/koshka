const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTc4NzI2MzMyMzAxODM2Mjkx.XN4BMQ.pnUWLUjqQpl3A1hfriQaraJp42I';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.name === "guild-portal");
    if(!channel) return;

    channel.send(`Ooo, shiny! ${member} Welcome to Unruly Origins, Nyaah! :heart_eyes_cat: There’s play to be done. Please view the pinned messages from this channel to learn general information about this guild. Let’s run faster! If you're looking to apply, it says how to do so there. Let’s play! :smiley_cat: Tag! You’re it.  `)
});

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!');
    }
})

bot.login(process.env.BOT_TOKEN);
