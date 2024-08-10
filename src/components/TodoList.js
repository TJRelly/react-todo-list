import { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "../static/TodoList.css";

const TodoList = ({ title }) => {
    //Renders list of Todo Form and list of Todos
    const [todos, setTodos] = useState([]);
    const addTodo = (newTodo) => setTodos((todos) => [...todos, newTodo]);
    const removeTodo = id => setTodos(todos => todos.filter(todo => todo.id !== id))

    return (
        <div className="TodoList d-flex">
            <NewTodoForm addTodo={addTodo} />
            <div className="TodoList-list">
                <h1>{title}</h1>
                <ul>
                    {todos.map((todo, i) => (
                        <li>
                            <Todo {...todo} key={i} remove={removeTodo}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoList;
