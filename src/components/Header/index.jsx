import React from 'react'
import { withRouter } from "react-router-dom";
import './style.css'
class Me extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    valueHandle=(e)=> {
        this.setState({
            value: e.target.value
        })
    }
    searchHandle = ()=>{
        console.log(this.state.value)
    }
    valuePut = ()=>{
        this.props.valueReceive(this.state.value)
    }
    handlerRight() {
        switch (this.props.data[2]) {
            case 0:
                return <i className="iconfont icon-icon-test" onClick={this.fenLeiGo}></i>;
            case 1:
                return <i className="iconfont icon-gengduosangedian"></i>;
            case 2:
                return <i className="iconfont icon-sousuo" onClick = { this.valuePut }></i>;
            case 3:
                return <i>筛选</i>;
            default:
                return null;
        }
    }
    handlerMiddle() {
        switch (this.props.data[1]) {
            case 0:
                return (<div className="header-search" onClick={this.searchGo}>
                    <i className="iconfont icon-sousuo"></i>
            搜索商品/店铺/种类
                </div>)
            case 1:
                return (<div className="title">{this.props.data[3]}</div>)
            case 2:
                return (<div className="search-input">
                    <input type="text" placeholder="请搜索书名或作者" value={this.state.value} onChange={this.valueHandle} />
                </div>)
            default:
                return null;
        }
    }
    searchGo = () => {
        this.props.history.push("/search");
    }
    backGo = () => {
        this.props.history.go(-1);
    }
    fenLeiGo = () => {
        this.props.history.push("/fenlei");
    }
    render() {
        return (
            <div className="header">
                <div className="header-top">
                    {
                        this.props.data[0] === 0 ?
                            <i className="logo">dang</i> :
                            <i className="iconfont icon-left" onClick={this.backGo}></i>
                    }
                    {
                        this.handlerMiddle()
                    }
                    {
                        this.handlerRight()
                    }
                </div>
                <div className="header-bottom">

                </div>
            </div>
        )
    }
}
export default withRouter(Me)