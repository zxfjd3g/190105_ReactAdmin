import React, {Component} from 'react'
import PropTypes from 'prop-types'

/*
UI组件
  主要做显示与与用户交互
  代码中没有任何redux相关的代码
 */
export default class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
  }


  constructor(props) {
    super(props)

    this.numberRef = React.createRef()
  }

  increment = () => {
    const number = this.numberRef.current.value * 1
    this.props.increment(number)
  }

  decrement = () => {
    const number = this.numberRef.current.value * 1
    this.props.decrement(number)
  }

  incrementIfOdd = () => {
    const number = this.numberRef.current.value * 1
    if (this.props.count % 2 === 1) {
      this.props.increment(number)
    }

  }

  incrementAsync = () => {
    const number = this.numberRef.current.value * 1
    this.props.incrementAsync(number)
  }

  render() {
    const count = this.props.count

    return (
      <div>
        <p>click {count} times</p>

        <div>
          <select ref={this.numberRef}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select> &nbsp;&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
      </div>
    )
  }
}