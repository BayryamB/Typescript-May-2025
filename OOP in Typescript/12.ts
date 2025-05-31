class Task {
    title: string;
    description: string;
    completed: boolean = false;
    private _createdBy: string;

    constructor(title: string, description: string, createdBy: string) {
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
        return `Task: ${this.title} - ${this.description} - ${
            this.completed ? "Completed" : "Pending"
        }`;
    }

    static createSampleTasks(): Task[] {
        return [
            new Task("Complete homework", "Finish math exercises", "Charlie"),
            new Task("Clean room", "Clean theroom", "Mary"),
        ];
    }
}

const task11 = new Task(
    "Complete homework",
    "Finish math exercises",
    "Charlie"
);
task11.toggleStatus();
console.log(task11.getDetails());
const task22 = new Task("Clean room", "Clean theroom", "Mary");
console.log(task22.getDetails());
const tasks = Task.createSampleTasks();
tasks.forEach((task) => console.log(task.getDetails()));
