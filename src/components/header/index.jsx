import React, {Component} from 'react'
import './index.less'

/*
左侧导航的组件
 */
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-top">
          <span>欢迎, admin</span>
          <a href="javascript:">退出</a>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">首页</div>
          <div className="header-bottom-right">
            <span>2019-5-16 10:12:36</span>
            <img src="http://api.map.baidu.com/images/weather/day/qing.png" alt="weather"/>
            <span>晴</span>
          </div>
        </div>
      </div>
    )
  }
}