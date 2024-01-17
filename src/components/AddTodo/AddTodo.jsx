"use client"
import React, { useState } from 'react';
import { Input, Button, Select, DatePicker } from 'antd';
import './AddTodo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '@/redux/slices/todoSlice';
import { useRouter } from 'next/navigation';

const { Option } = Select;

const AddTodo = () => {
   const router = useRouter()
    const allTodo = useSelector((state) => {
        return state.allTodo
     })
     console.log(allTodo)
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('low');
  const [dueDate, setDueDate] = useState(null);
  const [category, setCategory] = useState('');
  const dispatch = useDispatch()
  console.log(dueDate)

  const handleAddTodo = () => {
    
    const todo = {
        todoName,
        priority,
        category,
        dueDate: dueDate ? dueDate.format('YYYY-MM-DD') : null,
    }
    console.log(todo)
    dispatch(addTodo(todo))
    router.push('/');
  };

  return (
    
    <div className="add-todo-container">
    <div className="input-container">
      {/* <label htmlFor="todoName">Todo Name</label> */}
      <Input
        id="todoName"
        placeholder="Enter todo name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
    </div>

    <div className="input-container">
      {/* <label htmlFor="priority">Priority</label> */}
      <Select
        id="priority"
        value={priority}
        onChange={(value) => setPriority(value)}
        style={{ width: '100%' }}
      >
        <Option value="low">Low Priority</Option>
        <Option value="medium">Medium Priority</Option>
        <Option value="high">High Priority</Option>
      </Select>
    </div>

    <div className="input-container">
      {/* <label htmlFor="dueDate">Due Date</label> */}
      <DatePicker
        id="dueDate"
        style={{ width: '100%' }}
        value={dueDate}
        onChange={(date) => setDueDate(date)}
      />
    </div>

    <div className="input-container">
      {/* <label htmlFor="category">Category</label> */}
      <Input
        id="category"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
    </div>

    <Button type="primary" onClick={handleAddTodo}>
      Add Todo
    </Button>
  </div>
  );
};

export default AddTodo;
