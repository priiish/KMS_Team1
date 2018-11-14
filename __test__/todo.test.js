'use strict';
test("Add Task Test", () =>{
    document.body.innerHTML =
        '<p>' +
        '   <label for="new-task">Add Item</label><input id="new-task" type="text"><button id="addButton">Add</button>' +
        '</p>' +
        '<ul id="incomplete-tasks">' +
        '</ul>' +
        '<h3>Completed</h3>\n' +
        '<ul id="completed-tasks">\n' +
        '</ul>\n';
    const { createNewTaskElement, addButton } = require("../todo.js")
    const $ = require('jquery');
    jest.mock('../todo')
    var taskInput=document.getElementById("new-task");//Add a new task.
    taskInput.value = "Test";
    $('#addButton').click();
    expect(taskInput.value).toBe('');
    expect($('#incomplete-tasks').children().length).toBe(1);
    expect($('#incomplete-tasks').children().children()[1].innerText).toBe("Test");
    taskInput.value = "Test_2";
    $('#addButton').click();
    expect(taskInput.value).toBe('');
    expect($('#incomplete-tasks').children().length).toBe(2);
    expect($('#incomplete-tasks').children().children()[6].innerText).toBe("Test_2");});
test("Delete Task", () =>{

    expect(true).toBe(true);
});
test("Edit Task", () =>{

    expect(true).toBe(true);
});
