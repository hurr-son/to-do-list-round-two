class Todo {
    constructor(title, description, dueDate, priority, status = 'incomplete', notes = '', checklist = []) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.notes = notes;
        this.checklist = checklist;
    }
    toggleStatus() {
        this.status = this.status === 'complete' ? 'incomplete' : 'complete';
    }
}


export default Todo 