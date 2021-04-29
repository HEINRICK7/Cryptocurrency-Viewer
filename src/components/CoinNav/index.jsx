import React from 'react'
import { FiArrowLeft } from "react-icons/fi"
import { useParams, Link} from 'react-router-dom'

import './styles.css'

const CoinNav = () => {
    const {key} = useParams();
    return (
        <div className="container_charts">
          <div className="icon">
            <Link to="/">
              < FiArrowLeft style={{color: "#FFFF"}}/>
            </Link>
            
          </div>
          <h1>{`${key}`}</h1>
            
        </div>
    )
}

export default CoinNav
