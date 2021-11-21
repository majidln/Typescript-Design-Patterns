/* TODO example in html with ul and li tags. */
interface TodoList {
    getHtml: () => string;
}

class TodoItem implements TodoList {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    public getHtml() {
        return this.text;
    }
}

class Project implements TodoList {
    private title: string;
    todos: TodoList[];

    constructor(title: string, todos: TodoList[]) {
        this.title = title;
        this.todos = todos;
    }

    public getHtml() {
        let html = '';

        html += `<h1>${this.title}</h1>`;
        html += `<ul>`
        this.todos.forEach((item: TodoList) => {
            html += `<li>${item.getHtml()}</li>`
        })
        html += `</ul>`
        return html;
    }
}

const buyMilk = new TodoItem('Buy Milk');
const buyBread = new TodoItem('Buy Bread');

const studyMath = new TodoItem("Study Math");
const studyPoem = new TodoItem("Study Poem");

const studyList = new Project("Study", [studyMath, studyPoem]);

const myProject = new Project("My Day", [studyList, buyBread, buyMilk])

console.log(myProject.getHtml())