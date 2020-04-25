import React from 'react'
import Footer from '../../components/Footer/'
import Header from '../../components/Header/'

export default class Fenlei extends React.Component{
    render(){
        return(
            <div>
                <Header data={[1,0,1]}/>
                fenlei
                <Footer />
            </div>
        )
    }
}