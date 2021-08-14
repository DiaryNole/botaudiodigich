const Discord = require('discord.js');
const client = new Discord.Client();
client.login("ODc2MTE4NzMwNzQzMDk5NDI0.YRfbJg.ZrixHyl2Mwbthn2RbwMz7vLDYl0");

const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(':)');
});
server.listen(3000);

client.on("ready", () => {
    console.log(`INFO: ${client.user.username}!`);
    client.user.setActivity('RADIO', {
      type: 'PLAYING'
    });
});

client.on("message", (message) => {
    if (message.content == "-audio") {
        const canaleVocale = message.member.voice.channel;
        if (canaleVocale) {
            canaleVocale.join()
                .then(connection => {
                    connection.play('audio.mp3');
                });
        }
        else {
            message.channel.send("No voice channel.");
        }
    }
})