import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import './styles.css'

import * as Recharts from "recharts/umd/Recharts";

const CoinDetail = () => {

    let {key} = useParams();

    const AreaChart = Recharts.AreaChart;
    const Area = Recharts.Area;
   
    const Tooltip = Recharts.Tooltip;
    const ResponsiveContainer = Recharts.ResponsiveContainer;
    const [chartDay, setChartDay] = useState([]);
    const [chartWeek, setChartWeek] = useState([]);
    const [chartYear, setChartYear] = useState([]);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${key}/market_chart?vs_currency=usd&days=1`)
      .then(response => {
        setChartDay(response.data.prices)
  
      })
      .catch(error => console.log(error))

  },[key]);

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${key}/market_chart?vs_currency=usd&days=30`)
      .then(response => {
        setChartWeek(response.data.prices)
  
      })
      .catch(error => console.log(error))

  },[key])

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${key}/market_chart?vs_currency=usd&days=30`)
      .then(response => {
        setChartYear(response.data.prices)
  
      })
      .catch(error => console.log(error))

  },[key])

    return (
          <div className="container_coin">
          <div className="chart">
          <div className="info">
              <h5>Day</h5>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartDay.map(result =>({
            volume: result[0],
            price: result[1].toFixed(2)
        }))}
        margin={{top: 100}}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <Tooltip />
         
        <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
       
      </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
          <div className="info">
              <h5>Week</h5>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartWeek.map(result =>({
            volume: result[0],
            price: result[1].toFixed(2)
        }))}
        margin={{top: 100}}
       >
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
         </defs>
       
        <Tooltip />
        <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
       
      </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
            <div className="info">
              <h5>Year</h5>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartYear.map(result =>({
            volume: result[0],
            price: result[1].toFixed(2)
        }))}
        margin={{top: 100}}
        >
        <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
         </defs>
        <Tooltip />
        <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
       
      </AreaChart>
            </ResponsiveContainer>
          </div>  
          </div>
        
    )
}

export default CoinDetail