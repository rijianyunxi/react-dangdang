import React from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import Home from '../pages/Home/'
import Me from '../pages/Me/'
import FenLei from '../pages/Fenlei/'
import Buy from '../pages/Buy/'
import ShopCar from '../pages/ShopCar/'
import NotFound from '../pages/404/'

export default class Routers extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route path="/fenlei" component={ FenLei }></Route>
                    <Route path="/buy" component={ Buy }></Route>
                    <Route path="/shopcar" component={ ShopCar }></Route>
                    <Route path="/me" component={ Me }></Route>
                    <Route path="*" component={ NotFound }></Route>
                </Switch>
            </Router>
        )
    }
}