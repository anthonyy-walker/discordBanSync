const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'bansync',
    description: '',
    execute: async function (client, message, user) {
        let banned = 0;
        const bans = await client.guilds.cache
            .get('512047226059620354')
            .fetchBans();
        const members = bans.array();
        const banmsg = await message.channel.send(
            new Discord.MessageEmbed().setColor('GREEN').setTitle(`SYNCING ALL BANS`)
                .setDescription(`
**MEMBERS BANNED**: ${banned}
**MEMBERS LEFT**: ${members.length - banned}
                `)
        );
let reason = 'This is a Gobal Ban.'
        for (let i = 0; i < members.length; i++) {
            setTimeout(() => {
                const guild = client.guilds.cache.get('718622454293200926') 
                var members_to_ban = guild.members.cache.find(member => member.id)
                 guild.members.ban(members_to_ban, { reason });
                banned++;
                banmsg.edit(
                   new Discord.MessageEmbed().setColor('GREEN').setTitle(`SYNCING ALL BANS`)
                        .setDescription(`
**MEMBERS BANNED**: ${banned}
**MEMBERS LEFT**: ${members.length - banned}
                `)
                );
            }, 5000);
        }
    }
}