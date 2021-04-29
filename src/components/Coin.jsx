import React from 'react';
import { Statistic, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import './styles.css';

const Coin = ({ id ,name, image, symbol, price, volume, high_24h, chart }) => {

    return (
        <>
        <div className="coin_container">
            <div className="coin">
                <img src={image} className="coin_image" alt="crypto" />
                <h1 className="coin_name">{name}</h1>
                <p className="coin_symbol">{symbol}</p>
                <Row>
                <p className="price_high_24">24hrs</p>
                    <Col className="high_42">
                        <Statistic
                          value={high_24h}
                          precision={2}
                          valueStyle={ 
                              high_24h >= 0 ? { color: '#3f8600', fontSize: 16 ,marginLeft: 180, marginTop: -25, marginBottom: 50}
                               :
                               { color: 'red', fontSize: 16 ,marginLeft: 180, marginTop: -25, marginBottom: 50}}
                          prefix={ high_24h >= 0 ? <ArrowUpOutlined /> : < ArrowDownOutlined />}
                          suffix="%"
                        />
                    </Col>
                </Row>
                <p>{chart}</p>
                <div className="coin_data">
                    
                    <p className="price_span"> preço</p>
                    <p className="coin_price">$ {price.toLocaleString()}</p>
                    <p className="volume_span">volume</p>
                    <p className="coin_volume">$ {volume.toLocaleString()}</p>
                </div>
            </div>              
        </div>
        </>
    );
}

export default Coin;
