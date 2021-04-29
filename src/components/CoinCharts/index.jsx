import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import './styles.css'

import { AreaChart, Area, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CoinDetail = () => {

    let {key} = useParams();

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
    axios.get(`https://api.coingecko.com/api/v3/coins/${key}/market_chart?vs_currency=usd&days=360`)
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
            <ResponsiveContainer width="100%" height={500}>
              <AreaChart 
              width={500}
              height={60}
              data={chartDay.map(result =>({
                  price: result[1].toFixed(2)
              }))}
              margin={{
                top: 5,
                right: 2,
                left: 2,
                bottom: 5,
              }}
              >
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
          <div className="info">
              <h5>Week</h5>
            </div>
            <ResponsiveContainer width="100%" height={500}>
              <AreaChart 
              width={200}
              height={60}
              data={chartWeek.map(result =>({
                  price: result[1].toFixed(2)
              }))}
              margin={{
                top: 5,
                right: 2,
                left: 2,
                bottom: 5,
              }}
              >
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
            <div className="info">
              <h5>Year</h5>
            </div>
            <ResponsiveContainer width="100%" height={500}>
              <AreaChart 
              width={200}
              height={60}
              data={chartYear.map(result =>({
                  price: result[1].toFixed(2)
              }))}
              margin={{
                top: 400,
                right: 2,
                left: 2,
                bottom: 5,
              }}
              >
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
                <Legend />
              </AreaChart>
            </ResponsiveContainer>
            </div>
          </div>
        
    )
}

export default CoinDetail