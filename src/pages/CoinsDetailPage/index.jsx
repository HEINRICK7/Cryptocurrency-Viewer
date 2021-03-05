import React from 'react'
import ChartArea from '../../components/CoinCharts'
import CoinNav from '../../components/CoinNav'
import CoinInfo from '../../components/CoinInfo';
import './styles.css'
const CoinDetail = () => {
    return (
        <>
        <CoinNav />
        < CoinInfo />
        <div className="chartsArea">
            <ChartArea />
        </div>
        </>
    )
}

export default CoinDetail;