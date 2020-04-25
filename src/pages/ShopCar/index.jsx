import React from 'react'
import Footer from '../../components/Footer/'
import Header from '../../components/Header/'

export default class ShopCar extends React.Component{
    render(){
        return(
            <div>
                <Header data={[1,1,1,"购物车"]}/>
                ShopCar
                <Footer />
            </div>
        )
    }
}