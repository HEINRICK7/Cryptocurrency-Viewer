import React, {useEffect, useState} from 'react'

import axios from 'axios';

import './styles.css'
import { useParams } from 'react-router-dom';

const CoinInfo = () => {

    const {key} = useParams();
    console.log(key)

    const [ coinInfo, setCoinInfo ] = useState([])

    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${key}`)
        .then(response => {
            setCoinInfo([response.data])
        
          })
          .catch(error => console.log(error))
    
    }, [key]);
         
    return (
        <div className="info_coin"> 
            <h1 style={{textAlign:'center'}}> {key} </h1>
           <div className="description">
              
               {coinInfo.map(res =>res.description.pt)}
            </div>
        </div>
    )
}

export default CoinInfo
