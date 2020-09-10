var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var open = require('open')
var port = 3000;
const Discord = require('discord.js')
const client = new Discord.Client()
const auth = require('./discordtoken.json')
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/DiscordChat.html');
});

var selectedChannel = "751797116271198228"
var allch = false;
try {
    client.on("message", async (message) => {
        var splitMessage = message.content.split(" ")
        if (splitMessage[0] == "&channel") {
            if (splitMessage[1] == "all") {
                allch = true
                message.channel.send("Changed Selected Channel to All Channels")
            } else {
                allch = false
                selectedChannel = message.channel.id.toString()
                message.channel.send("Changed Selected Channel to " + message.channel.toString())
            }
        }
        if (splitMessage[0] == "&duration") {
            if (!isNaN(splitMessage[1])) {
                try {
                    io.emit("duration", parseInt(splitMessage[1]))
                    message.channel.send("Changing Message Duration to " + splitMessage[1] + " milliseconds")
                } catch (e) {
                    message.channel.send("Something went wrong :/")
                }
            } else {
                message.channel.send("Please Provide a Valid Number!")
            }
        }
        if (message.channel.id == selectedChannel || allch) {
            var string = message.content;

            string = string.replace(/[a-z]:[^:\s]+:|:[^:\s]+:/g, "img height = '25' src= 'http://cdn.discordapp.com/emojis/")
            string = string.split(/>/g)
            for (i = 0; i < string.length; i++) {
                if (string[i].includes("cdn.discordapp.com/emojis/")) {
                    string[i] = string[i] + "'>"
                }
                else if (string[i].includes("<")) {
                    string[i] += ">"
                }


            }
            string = string.join("")
            string = string.split(/[<>]/g)
            for (i = 0; i < string.length; i++) {
                if (string[i].startsWith("#")) {

                    string[i] = "<span style='color:#7286d5'>#" + client.channels.cache.get(string[i].replace("#", "")).name + "</span>"
                }
                if (string[i].startsWith("@")) {
                    string[i] = string[i].replace("!", "")
                    string[i] = "<span style='color:#7286d5'>@" + client.users.cache.get(string[i].replace("@", "")).username + "</span>"
                }
                if (string[i].startsWith("img height = '25'")) {
                    string[i] = "<" + string[i] + ">"
                }
            }

            string = string.join("")
            io.emit("discordmessage", message.member.displayHexColor, message.author.username, string)

        }
    })
}
catch (err) {}

http.listen(port, function () {
    console.log('listening on *:' + port);
});
client.login(auth.token)
