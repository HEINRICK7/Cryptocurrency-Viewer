import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

import './styles.css';

const Coin = ({ name, image, symbol, price, volume, high_24h }) => {
    
    return (
        <>
        <div className="coin_container">
                <div className="coin">
                    <img src={image} className="coin_image" alt="crypto" />
                    <h1>{name}</h1>
                    <p className="coin_symbol">{symbol}</p>
                    <Row gutter={16}>
                        <Col>
                            <Statistic
                              title= {'24hrs'}
                              value={high_24h}
                              precision={2}
                              valueStyle={{ color: '#3f8600', fontSize: 16 ,marginLeft: -130, marginTop: 20, background: 'red'}}
                              prefix={<ArrowUpOutlined />}
                              suffix="%"
                            />
                        </Col>
                    </Row>
                    <div className="coin_data">
                        <p className="coin_price">$ {price.toLocaleString()}</p>
                        <p className="coin_volume">{volume.toLocaleString()}</p>
                    </div>
                </div>
        </div>
        </>
    );
}

export default Coin;
