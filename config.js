const config = {};

config.API_KEY = process.env.API_KEY;
config.API_SECRET = process.env.API_SECRET;

config.currency = "BTC"; //for now only BTC is working properly

config.TAKE_PROFIT = 5; // max % to take profit (don't get greedy)
config.PARTIAL_TP = 2.2; // minimum take profit
config.STOP_LIMIT = 2.5; // stop limit
config.TRAILING_SL = 0.4; // once you're in profit (PARTIAL_TP) bot activates a sell if price drops this %
config.MAX_BALANCE = 0; // in %, 0 to disable ex: 50, use only 50% off account balance

config.strategy = "microtradesV3";

config.interval = 60000; //bot console update in milliseconds (seconds * 1000)

config.telegram = false;
config.telegramAPI = process.env.TELEGRAM_API;
config.telegramUserID = 311268748; // Get ID from @get_id_bot on Telegram

module.exports = config;
