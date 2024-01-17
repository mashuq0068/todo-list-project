
import AllTodo from '@/components/AllTodo/AllTodo';
import Layout, { Content } from 'antd/es/layout/layout';
import styles from './page.module.scss'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import Link from 'next/link';





export default function Home() {
  

  return (
    <Layout>
    <Content className={styles.heading}>
      All Todo
    </Content>
    
    <Link href="/addTodo"> 
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          size="large"
        style={{
          position: 'fixed',
          bottom: '10vh',
          zIndex: '2',
          right: '10vw',
          transform: 'translateX(-50%)',
        }}
        />
      </Link>

    <AllTodo></AllTodo>
  </Layout>
  )
}
