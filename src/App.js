import React, {useEffect, useState} from 'react';

import { List, Card, Statistic, Row, Col } from 'antd';

import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';

import Pagination from './components/Pagination'

import './App.css';

import CriptoCurrency from './assets/crypto.svg'
import Usd from './assets/usd.png'

const  App = () => {

  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [criptoPerPage] = useState(10)
  
  const apikey = {
    key: 'dcd7b227-51fc-4a3f-8667-8fad93784194'
  }

  useEffect(() => {
    
    fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apikey.key}`)
    .then((response) => {
    if(!response.ok) throw new Error(`Erro ao executar a requisicao, status ${response.status}`)

      return response.json();

    })
    .then((api)  => { 
        setResults(api.data)

    })
    .catch((error) => {
    console.log(error.message);
    })

   
 },[apikey.key])


//useEffect(()=>{
//  fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=${1}&CMC_PRO_API_KEY=${apikey.key}`)
//  .then((response) => {
//  if(!response.ok) throw new Error(`Erro ao executar a requisicao, status ${response.status}`)
//
//    return response.json();
//
//  })
//  .then((res)  => { 
//      setResults(res.data)
//      console.log(res.data)
//      
//  })
//  .catch((error) => {
//  console.log(error.message);
//  })

 
//},[])

 const indexOfLastCripto = currentPage * criptoPerPage;
 const indexOfFirstCripto = indexOfLastCripto - criptoPerPage;
 const currentPages = results.slice(indexOfFirstCripto, indexOfLastCripto)


 const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="App">

    <h1>Cryptocurrency Viewer</h1>  
      
      <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}

    dataSource={currentPages}
    renderItem={item => (
      <List.Item>
        <Card title={item.name}>
        <div className="icon_inline">
            
                <img src={CriptoCurrency} width={50} alt="coin"/> 
          
                        
            <h3>{item.symbol}</h3>
        </div>  
         <h3> <img src={Usd} width={30} alt="coin"/> {(item.quote.USD.price).toFixed(2)}</h3>
        
        <Row gutter={16}>
      <Col span={12}>
        <Card>
          <Statistic
            title="24hrs"
            value={item.quote.USD.percent_change_24h}
            precision={2}
            valueStyle={item.quote.USD.percent_change_24h > 0 ?  { color: '#3f8600' } : { color: '#cf1322' }}
            prefix={item.quote.USD.percent_change_24h > 0 ? < AiOutlineArrowUp />  : < AiOutlineArrowDown />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="7d"
            value={item.quote.USD.percent_change_7d}
            precision={2}
            valueStyle={item.quote.USD.percent_change_7d > 0 ? { color: '#3f8600' } : { color: '#cf1322' }}
            prefix={item.quote.USD.percent_change_7d > 0 ? < AiOutlineArrowUp />  : < AiOutlineArrowDown />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
        </Card>
      </List.Item>
    )}
    
  />
  <Pagination
  criptoPerPage={criptoPerPage} 
  totalCripto={results.length}
  paginate={paginate} 
  />
    </div>
    
  );
}

export default App;
