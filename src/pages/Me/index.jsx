import React from 'react'
import Footer from '../../components/Footer/'
import Header from '../../components/Header/'

export default class Me extends React.Component{
    render(){
        return(
            <div>
                <Header data={[1,1,1,"我的"]}/>
                me
                <Footer />
            </div>
        )
    }
}