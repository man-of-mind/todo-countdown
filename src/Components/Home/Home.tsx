import React, { useState } from "react";
import CountDown from "../CountDown/CountDown";
import styles from "./Home.module.scss";

const Home = () => {
    interface todoType {
        todo: string,
        isChecked: boolean
    }

    const [todo, setTodo] = useState<string>("");
    const [todoList, setTodoList] = useState<Array<todoType>>([]);
   

    const handleOnChange = (ind: number) => {
        const current_todo = todoList.filter((todo, index) => {
            return ind === index;
        })
        current_todo[0].isChecked = !current_todo[0].isChecked;
        setTodoList([...todoList]);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const newTodo = e.target[0].value;
        const newTodoProp = {
            todo: newTodo,
            isChecked: false
        }
        setTodoList([...todoList, newTodoProp]);
        setTodo("");
    }

    const removeTodo = (index: number) => {
        const newTodos = todoList.filter((todo) => {
            return todoList.indexOf(todo) !== index; 
        })
        setTodoList(newTodos);
    }

    const todos = todoList.map((curr_todo, index) => {
        return (
            <div className={styles['todo']} key={index}>
                <p style={curr_todo.isChecked ? {textDecoration: "line-through"} : {}}>{curr_todo.todo}</p>
                <input 
                type="checkbox" 
                checked={curr_todo.isChecked}
                onChange={() => handleOnChange(index)}
                />
                <button className={styles['remove']} onClick={(e) => {removeTodo(index)}}>
                    DELETE
                </button>
            </div>
        );
    })


    return (
        <div className={styles['home']}>
            <CountDown />
            <h1>MY TODO-LIST</h1>
            <form className={styles['input-container']} onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Enter your todo"
                value={todo}
                required={true}
                onChange={(e) => setTodo(e.target.value)}
                />
                <button type="submit" className={styles['add-todo']}>Add Todo</button>
            </form>
            <section className={styles['todos']}>
                {todos}
            </section>
        </div>
    );
}

export default Home;