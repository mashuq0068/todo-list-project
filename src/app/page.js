
import { Layout } from 'antd'
import styles from './page.module.scss'
import { Content } from 'antd/lib/layout/layout';
import AllTodo from '@/components/AllTodo/AllTodo';
import AddTodo from '@/components/AddTodo/AddTodo';


export default function Home() {
  return (
    <main>
    <Layout className={styles.container}>
      
      <AllTodo></AllTodo>
      <AddTodo></AddTodo>
    </Layout>
    </main>
  )
}
