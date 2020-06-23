const callback = require('../index')
test('callback', done => {
    callback.callback()
    setTimeout(done, 1000)
})