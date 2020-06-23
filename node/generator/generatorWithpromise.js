// 使用generator去处理异步串联
const promise = (name) => new Promise(resolve => {
    setTimeout(() => {
        console.log(`Log...${name}:` + new Date().toLocaleTimeString())
        resolve()
    }, 100)
})
const generatorFunc = function* (name) {
    yield promise(name + 1)
    yield promise(name + 2)
    yield promise(name + 3)
    yield promise(name + 4)
}
const callFunc = function (generator) {
    if (it = generator.next().value) {
        it.then(res => {
            // 递归
            callFunc(generator)
        })
    } else {
        return
    }
}
callFunc(generatorFunc('co-generator'))