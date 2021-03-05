import React from 'react'
import { useParams } from 'react-router-dom'

import './styles.css'

const CoinNav = () => {
    const {key} = useParams();
    return (
        <div className="container_charts">
          <h1>{`${key}`}</h1>
            
        </div>
    )
}

export default CoinNav
