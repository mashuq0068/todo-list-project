"use client"
import React, { useState } from 'react';
import { Input, Button, Select, DatePicker } from 'antd';
import './AddTodo.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '@/redux/slices/todoSlice';

const { Option } = Select;

const AddTodo = () => {
    const allTodo = useSelector((state) => {
        return state.allTodo
     })
     console.log(allTodo)
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('low');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch()

  const handleAddTodo = () => {
    
    const todo = {
        todoName,
        priority,
        category
    }
    console.log(todo)
    dispatch(addTodo(todo))
  };

  return (
    <div className="add-todo-container">
      <Input
      className=''
        placeholder="Todo Name"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />

      <Select style={{ width: '100%'  , textAlign:'left'}} value={priority} onChange={(value) => setPriority(value)}>
        <Option value="low">Low Priority</Option>
        <Option value="medium">Medium Priority</Option>
        <Option value="high">High Priority</Option>
      </Select>

      

      <Input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <Button type="primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
    </div>
  );
};

export default AddTodo;
