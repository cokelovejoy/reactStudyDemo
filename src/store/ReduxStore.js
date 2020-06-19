import { createStore } from 'redux'

// state  表示状态
// action 表示方法，用来更改状态。
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'MINUS':
            return state - 1
        default:
            return state
    }
}
// 创建 store
const store = createStore(counterReducer)
export default store