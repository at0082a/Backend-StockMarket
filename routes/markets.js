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
    let candledata = response.data;
      for (let i = 0 ; i < candledata.length; i++) {
        candledata[i] = {
          date : new Date(candledata[i][0]),
          open : candledata[i][1],
          high : candledata[i][2],
          low : candledata[i][3],
          close : candledata[i][4],
          volume : candledata[i][5]
        };
      }
      console.log(candledata);
    return candledata;
  });
  
  return grabApi;
};

router.get("/market", (req, res) => {
  let interval = '1m';
  let market = 'BTCUSD';
  let url = `https://api-pub.bitfinex.com/v2/candles/trade:${interval}:t${market}/hist`
  var getData = async function() {
    const market = await getApiData(url);  
    res.json(market);
  };
  getData();
});

// for (i=0; i < str.length; i++) {
//   console.log(str[i])
// }

module.exports = router;