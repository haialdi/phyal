const tele = require("node-telegram-bot-api");
const dbot = require("dbot-js");

const token = "963828742:AAGw4M8ldb4IJ6CLpOm0rAOF9jhjy-zFmks";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", function(msg) {
  const chatid = msg.chat.id;
  var message = msg.text.toString();

  dbot.get_response(message, function(err, result) {
    if (!err) {
      bot.sendMessage(chatid, result);
    } else {
      console.log(err);
    }
  });
});
