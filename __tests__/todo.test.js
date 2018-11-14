var $ = require('jquery')
var html = require('fs').readFileSync('./todo.html').toString()

test('Test Adding Task', () => {
    const testInput = 'Task_1'
    document.documentElement.innerHTML = html

    const {addButton} = require('../todo.js')
    expect($("#incomplete-tasks").children().length).toBe(0)

    $('#new-task').val(testInput)
    $('#btn').click()

    expect($('#new-task').val()).not.toMatch(testInput)

    expect($("#incomplete-tasks").children().length).toBe(1)
})
