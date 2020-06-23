const logTime = (name) => {
    console.log(`Log...${name}: `+ new Date().toLocaleTimeString())
}
exports.callback = () => {
    setTimeout(() => {
        logTime('callback1')
        setTimeout(() => {
            logTime('callback2')
        }, 100)
    }, 100)
}