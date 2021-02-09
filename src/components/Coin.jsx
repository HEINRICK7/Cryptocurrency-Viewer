import React from 'react';

import './styles.css';

const Coin = ({ name, image, symbol, price, volume }) => {
    
    return (
        <>
        <div className="coin_container">
                <div className="coin">
                    <img src={image} className="coin_image" alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin_symbol">{symbol}</p>
                    <div className="coin_data">
                        <p className="coin_price">{price}</p>
                        <p className="coin_volume">{volume.toLocaleString()}</p>
                    </div>
                </div>
        </div>
        </>
    );
}

export default Coin;
