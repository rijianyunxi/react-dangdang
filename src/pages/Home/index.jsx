import React from 'react'
import Header from '../../components/Header/'
import Footer from '../../components/Footer/'
import {src , tab} from '../../config/config'
import './style.css'
import { Carousel } from 'antd'
import {login} from '../../api/index'

export default class Home extends React.Component {
    login = ()=>{
        login("songjintao","biubiul.1234").then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        });
    }
    render() {        
        return (
            <div>
                <Header data={[0, 0, 0, "首页"]} />
                <div className="home">
                    <Carousel autoplay>
                        {
                            src.map((r, i) => {
                                return (
                                    <div key={i}>
                                        <img src={r} alt="" />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                    <div className="tab">
                        {
                            tab.map((r, i) => {
                                return (
                                    <li key={i}>
                                        <img src={r.src} alt="" />
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div className="miaosha">
                    <img src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg" alt=""/>
                    </div>
                    <div onClick = {this.login}>click me!</div>
                </div>
                <Footer />
            </div>
        )
    }
}