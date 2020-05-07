import React from 'react'
import Footer from '../../components/Footer/'
import Header from '../../components/Header/'

export default class Search extends React.Component{
    render(){
        return(
            <div>
                <Header data={[1,0,2,"我的"]}/>
                search
                {/* <Footer /> */}
            </div>
        )
    }
}