const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const logger = require("morgan");


router.use(logger("dev"));
router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const getApiData = async url => {
  const grabApi = await axios.get(url).then(function (response) {

    let askdata = response.data.asks;
    let biddata = response.data.bids;

    for (let i = 0; i < askdata.length; i++) {
      askdata[i] = {
        value : Number(askdata[i][0]),
        volume : askdata[i][1]
      };
    }

    for (let i = 0; i < biddata.length; i++) {
      biddata[i] = {
        value : Number(biddata[i][0]),
        volume : biddata[i][1]
      };
    }
    console.log(biddata);
    return [biddata, askdata];
  });
  return grabApi;
};

router.get("/orderbook", (req, res) => {
  let url = "https://poloniex.com/public?command=returnOrderBook&currencyPair=BTC_ETH&depth=20";
  var getData = async function() {
    const market = await getApiData(url);  
    res.json(market);
  };
  getData();
});

module.exports = router;