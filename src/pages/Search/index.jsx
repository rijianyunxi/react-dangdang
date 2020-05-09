import React from 'react'
import Header from '../../components/Header/'
import { searchMovie } from '../../api/index'

export default class Search extends React.Component{
    valueReceive=(val)=>{
        if(val){
            searchMovie(val).then(res=>{
                console.log(res)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
    render(){
        return(
            <div>
                <Header valueReceive = { this.valueReceive } data={[1,2,2,"我的"]}/>
                search
                {/* <Footer /> */}
            </div>
        )
    }
}