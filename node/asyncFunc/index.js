const promise = (name) => new Promise(resolve => {
    setTimeout(() => {
        console.log(`Log...${name}:` + new Date().toLocaleTimeString())
        resolve()
    }, 100)
})

const asyncFunc = async function () {
    await promise('async 1')
    await promise('async 2')
    await promise('async 3')
    await promise('async 4')

}

asyncFunc()