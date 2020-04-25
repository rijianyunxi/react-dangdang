import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { footerData } from '../../config/config'
import './style.css'

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                    {footerData.map((r,i)=>{
                        return(
                            <li key={i}>
                                <NavLink exact to={r.path}>
                                    <i className={"iconfont "+r.icon}></i>
                                    {r.title}
                                </NavLink>
                            </li>
                        )
                    })}
            </div>
        )
    }
}