import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './styles.css'
import Coin from '../../components/Coin'

const  App = () => {

  const [coins, setCoins] = useState([]);
  const [ search, setSearch ] = useState('');

  useEffect(() => {
    
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(response => {
        setCoins(response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))

  },[])
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <div className="App">
    <h1>Cryptocurrency Viewer</h1>
    <div className="coin-search">
       <form>
         <input 
         type="text" 
         placeholder="pesquizar" 
         className="coin-input"
         onChange={handleChange}
         />
       </form>
     </div>
    </div>
    <div className="coin_container_app">
      { filteredCoins.map(coin => {
        return (
          <Coin 
            id={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.market_cap}
            price={coin.current_price}
            high_24h = {coin.price_change_percentage_24h}
            
          />
        )
      })}
    </div>
    </> 
  );
}

export default App;
