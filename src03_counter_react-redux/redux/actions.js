/*
包含n个用来创建action的工厂函数(action creator)
 */
import {INCREMENT, DECREMENT} from './action-types'

/*
增加的同步action
 */
export const increment = number => ({type: INCREMENT, data: number})
/*
减少的同步action: 返回对象
 */
export const decrement = number => ({type: DECREMENT, data: number})
