import Binance from "node-binance-api";

const binance = new Binance().options({
  APIKEY: process.env.B_API_KEY,
  APISECRET: process.env.B_SECRET_KEY,
  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  test: false, // If you want to use sandbox mode where orders are simulated
});
export { binance };
