class Acao {
  constructor({
    currency = "",
    shortName = "",
    longName = "",
    regularMarketChange = "",
    regularMarketChangePercent = "",
    regularMarketTime = "",
    regularMarketPrice = "",
    regularMarketDayHigh = "",
    regularMarketDayRange = "",
    regularMarketDayLow = "",
    regularMarketVolume = "",
    regularMarketPreviousClose = "",
    regularMarketOpen = "",
    fiftyTwoWeekRange = "",
    fiftyTwoWeekLow = "",
    fiftyTwoWeekHigh = "",
    symbol = "",
    priceEarnings = "",
    earningsPerShare = "",
    logourl = "",
  }) {
    this.currency = currency;
    this.shortName = shortName;
    this.longName = longName;
    this.regularMarketChange = regularMarketChange;
    this.regularMarketChangePercent = regularMarketChangePercent;
    this.regularMarketTime = regularMarketTime;
    this.regularMarketPrice = regularMarketPrice;
    this.regularMarketDayHigh = regularMarketDayHigh;
    this.regularMarketDayRange = regularMarketDayRange;
    this.regularMarketDayLow = regularMarketDayLow;
    this.regularMarketVolume = regularMarketVolume;
    this.regularMarketPreviousClose = regularMarketPreviousClose;
    this.regularMarketOpen = regularMarketOpen;
    this.fiftyTwoWeekRange = fiftyTwoWeekRange;
    this.fiftyTwoWeekLow = fiftyTwoWeekLow;
    this.fiftyTwoWeekHigh = fiftyTwoWeekHigh;
    this.symbol = symbol;
    this.priceEarnings = priceEarnings;
    this.earningsPerShare = earningsPerShare;
    this.logourl = logourl;
  }
}

export default Acao;
