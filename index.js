require('./secrets');

async function getData() {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&apikey=${process.env.API_KEY}`
  );
}
