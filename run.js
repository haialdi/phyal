const tele = require("node-telegram-bot-api");
const token = "963828742:AAGw4M8ldb4IJ6CLpOm0rAOF9jhjy-zFmks";
Telegram = require("node-telegram-bot-api");
const dbot = require("dbot-js");
const bot = new Telegram(token, { polling: true });

bot.on("message", msg => {
  const chatId = msg.chat.id;
  var message = msg.text.toString();
  dbot.get_response(message, function(err, result) {
    if (!err) {
      bot.sendMessage(chatId, result);
    } else {
      console.log(err);
    }
  });
});
