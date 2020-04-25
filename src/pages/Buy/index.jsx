import React from 'react'
import Footer from '../../components/Footer/'
import Header from '../../components/Header/'

export default class Buy extends React.Component{
    render(){
        return(
            <div>
                <Header data={[1,1,1,"值得买"]}/>
                ShopCar
                <Footer />
            </div>
        )
    }
}