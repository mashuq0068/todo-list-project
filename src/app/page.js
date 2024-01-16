
import { Layout } from 'antd'
import styles from './page.module.scss'
import { Content } from 'antd/lib/layout/layout';


export default function Home() {
  return (
    <main>
    <Layout>
      <Content className={styles.container}>This is a Todo Lbmist</Content>
    </Layout>
    </main>
  )
}
