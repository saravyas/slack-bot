var SlackBot = require('slackbots');
var cron = require('node-cron');
 

 
 
console.log('bot started');

var sara = '0 0 0 15 10 *';
cron.schedule(sara, function(){
console.log('sara birthday excitement');
// create a bot
var bot = new SlackBot({
    token: 'your bot token please', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'My lovely bot'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':birthday:'
    };
    console.log('message will come within a second');
    console.log(params)
    var datetime = new Date();
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services 
    bot.postMessageToChannel('random', 'Happy birthday Mr.Sathisharavind as Saravyas at '+ datetime, params);
}); 
});

