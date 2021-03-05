import React from  'react-icons'
import { Route, BrowserRouter, Switch} from 'react-router-dom'

import Home from './pages/Home';
import Coins from './pages/CoinsDetailPage'

const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/coins/:key" component={Coins}/>
        </Switch>
        </BrowserRouter>
    )
}

export default  Router;
