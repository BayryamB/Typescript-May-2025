"use strict";
class Task {
    title;
    description;
    completed = false;
    _createdBy;
    constructor(title, description, createdBy) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    get createdBy() {
        return this._createdBy;
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
    getDetails() {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? "Completed" : "Pending"}`;
    }
    static createSampleTasks() {
        return [
            new Task("Complete homework", "Finish math exercises", "Charlie"),
            new Task("Clean room", "Clean theroom", "Mary"),
        ];
    }
}
const task11 = new Task("Complete homework", "Finish math exercises", "Charlie");
task11.toggleStatus();
console.log(task11.getDetails());
const task22 = new Task("Clean room", "Clean theroom", "Mary");
console.log(task22.getDetails());
const tasks = Task.createSampleTasks();
tasks.forEach((task) => console.log(task.getDetails()));
//# sourceMappingURL=12.js.map