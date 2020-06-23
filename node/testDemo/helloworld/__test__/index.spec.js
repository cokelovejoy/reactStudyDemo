const fileHandleClass = require('../index')

test('测试文件名称', () => {
    const src = new fileHandleClass()
    const ret =src.getTestFileName('/abc/class.js')
    expect(ret).toBe('/abc/__test__/class.spec.js')
})
