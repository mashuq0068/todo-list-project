"use client"

import { useSelector } from "react-redux";


const AllTodo = () => {
    const allTodo = useSelector((state) => {
       return state.allTodo
    })
    console.log(allTodo)
    return (
        <div className="main-container">
            {allTodo?.map((oneTodo , i) => 
            <div className="todo" key={i}>
                <p>{oneTodo?.todoName}</p>
                <p>{oneTodo?.priority}</p>
                <p>{oneTodo?.category}</p>
                <p>{oneTodo?.dueDate}</p>
                
            </div>)}
        </div>
    );
};

export default AllTodo;