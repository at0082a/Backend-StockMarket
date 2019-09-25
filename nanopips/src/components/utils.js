
import axios from 'axios';
export function getData() {
  const cryptodata = axios.get("http://localhost:3001/market").then(function (response) {
    let candlestickData = response.data;
    console.log(candlestickData);
    return candlestickData; 
  }); 
  return cryptodata;
}