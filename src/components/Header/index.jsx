import React from 'react'
import './style.css'
export default class Me extends React.Component {
    handler(){
        switch (this.props.data[2]) {
            case 0:
                return <i className="iconfont icon-icon-test"></i> ;
                //break;
            case 1:
                return <i className="iconfont icon-gengduosangedian"></i> ;
                //break;
            case 2:
                return <i>搜索</i> ;
                //break;
            case 3:
                return <i>筛选</i> ;
                //break;
            default:
                return null;
                //break;
        }
    }
    render() {
        return (
            <div className="header">
                <div className="header-top">
                    {
                        this.props.data[0] === 0 ?
                            <i className="logo">dang</i> :
                            <i className="iconfont icon-left"></i>
                    }
                    {
                        this.props.data[1] === 0 ?
                            <div className="header-search">
                                <i className="iconfont icon-sousuo"></i>
                            搜索商品/店铺/种类
                        </div> :
                            <div className="title">{this.props.data[3]}</div>
                    }
                    {
                        this.handler()
                    }
                </div>
                <div className="header-bottom">

                </div>
            </div>
        )
    }
}