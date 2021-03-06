const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTc4NzI2MzMyMzAxODM2Mjkx.XQay9g.W0masFn4NdAK0LRyPMdIqo9_iwY';

const PREFIX = 'k!';

var version = 'Pre-Alpha'

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.find(channel => channel.name === "🔰guild-portal");
    if(!channel) return;

    channel.send(`Ooo, shiny! ${member} Welcome to Unruly Origins, Nyaah! :heart_eyes_cat: There’s play to be done. Please view the pinned messages from this channel to learn general information about this guild. Let’s run faster! If you're looking to apply, it says how to do so there. Let’s play! :smiley_cat: Tag! You’re it.  `)
});

bot.on('guildMemberRemove', member =>{
    const channel = member.guild.channels.find(channel => channel.name === "🔰guild-portal");
    if(!channel) return;

    channel.send(`Goodbye ${member}. May the OZO gods follow you forever.  `)
});

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);
            }else{
                message.channel.sendMessage('Invalid Args')
            }
        break;
        
    }
})

bot.login(token);
