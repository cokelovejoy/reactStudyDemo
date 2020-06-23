
const asyncFunc = name => event => {
    setTimeout(() => {
        console.log(`Log...${name}:` + new Date().toLocaleTimeString())
        event.emit('end')
    }, 100)
    return event
}

const eventArray = [
    asyncFunc('event1'),
    asyncFunc('event2'),
    asyncFunc('event3'),
]

const { EventEmitter } = require('events')

const event = new EventEmitter()
let i = 0
// 监听end事件
event.on('end', () => i < eventArray.length && eventArray[i++](event))
// 触发end事件
event.emit('end')