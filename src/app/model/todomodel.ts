export class TodoModel {
    id: String;
    title: String;
    description: String;
    completed: boolean;
    dueDate: String;

    constructor(id: String, title: String, description: String, completed: boolean, dueDate: String) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.dueDate = dueDate;
    }
    

}