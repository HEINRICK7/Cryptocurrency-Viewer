import React, {useEffect, useState} from 'react'

import axios from 'axios';

import './styles.css'
import { useParams } from 'react-router-dom';

const CoinInfo = () => {

    const {key} = useParams();

    const [ coinInfo, setCoinInfo ] = useState([])
    const [infoTranslator, setInfotranslator] = useState([]);

    const id = coinInfo.map(result => result.en);
    console.log(id)
    useEffect(() => {
        fetch(`https://google-translate20.p.rapidapi.com/translate?text=${id.toString()}&tl=pt&sl=en`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "22b1e8db5cmsheaa667000d77ccdp1ff821jsn106c21449f4d",
                "x-rapidapi-host": "google-translate20.p.rapidapi.com"
            }
        })
        .then(response => {
            setInfotranslator([response.data])
            console.log(response.data.data);
        })
        .catch(err => {
            console.error(err)
        });
    }, [id]);
    
    useEffect(() => {
        axios.get(`https://api.coingecko.com/api/v3/coins/${key}`)
        .then(res => {
            setCoinInfo([res.data.description])
        
          })
          .catch(error => console.log(error))
    
    }, [key]);
         
    return (
        <div>
           <p className="info_coin">{infoTranslator.map(res => res.data.translation)}</p>
        </div>
    )
}

export default CoinInfo
