const path = require('path')
module.exports = class TestNow {
    getTestFileName(filename) {
        const dirName = path.dirname(filename)
        const baseName = path.basename(filename)
        const extname = path.extname(filename)
        const testName = baseName.replace(extname, `.spec${extname}`)
        return path.format({
            root: dirName + '/__test__/',
            base: testName
        })
    }
}