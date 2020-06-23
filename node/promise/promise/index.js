const promise = (name, delay = 100) => new Promise(resolve => {
    setTimeout(() => {
        console.log(`Log...${name}:` + new Date().toLocaleTimeString())
        resolve(name)
    }, delay)
})
promise('promise1').then(data => {
    console.log(data)
    return promise('promise2')
}).then(v => {
    console.log(v)
    promise('promise3')
})