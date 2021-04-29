import React from  'react-icons'
import { Route, BrowserRouter, Switch} from 'react-router-dom'

import Home from './pages/Home';

const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
        </BrowserRouter>
    )
}

export default  Router;
