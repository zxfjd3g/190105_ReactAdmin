/*
入口js
 */
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './redux/store'

console.log('state', store.getState())

ReactDOM.render(<App store={store}/>, document.getElementById('root'))

// 给store绑定状态更新的监听
store.subscribe(() => { // store内部的状态数据发生改变时回调
  console.log('state改变了, 更新组件')
  // 重新渲染App组件标签
  ReactDOM.render(<App store={store}/>, document.getElementById('root'))
})