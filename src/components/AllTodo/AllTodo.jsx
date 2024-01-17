"use client"
import { useDispatch, useSelector } from 'react-redux';
import { Table, Space, Button } from 'antd';
import './AllTodo.scss'
import { deleteTodo } from '@/redux/slices/todoSlice';

const AllTodo = () => {
    const dispatch = useDispatch()
  const allTodo = useSelector((state) => {
    return state.allTodo;
  });

  const columns = [
    {
      title: 'Todo Name',
      dataIndex: 'todoName',
      key: 'todoName',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="danger" onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const data = allTodo?.map((oneTodo, i) => ({
    key: i,
    todoName: oneTodo?.todoName,
    priority: oneTodo?.priority,
    category: oneTodo?.category,
    dueDate: oneTodo?.dueDate,
  }));

  const handleDelete = (key) => {
    // Handling delete action here
    dispatch(deleteTodo(key))

    console.log(`Deleting todo with key: ${key}`);
  };

  return (
    <div className="main-container">
    <Table columns={columns} dataSource={data} />
  </div>
  );
};

export default AllTodo;
