import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function Price (props) {
    const API_KEY = import.meta.env.VITE_API_KEY
    const params = useParams()
    const symbol = params.symbol
    const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${API_KEY}`;

    const [coin, setCoin] = useState(null)

     // Function to fetch coin data.
  const getCoin = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data
      setCoin(data);
    } catch(e) {
      console.error(e)
    }
  };

    // useEffect to run getCoin when component mounts.
    useEffect(() => {
        getCoin();
      }, []);

        // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

     // If coin has data, run the loaded function; otherwise, run loading.
  return coin && coin.rate ? loaded() : loading();
  }