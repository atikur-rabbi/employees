import { Layout, Menu, Breadcrumb, Divider } from 'antd'
import DatePicker from '../components/DatePicker'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'

const { Header, Footer, Content } = Layout;

export default function Employee() { 
  return (
    <Layout className="layout">
    <Head>
        <title>Postem</title>
    </Head>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" >
        <Link href="/">
              <a> Postem </a>
        </Link>
        </Menu.Item>
        <Menu.Item key="2">
        <Link href="/employees">
              <a> Employees </a>
        </Link>
        </Menu.Item>
        <Menu.Item key="3" >
        <Link href="/employees/hire">
              <a> Hire </a>
        </Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}/>
      <div className="site-layout-content">
        <h1>This an Employee administrator App</h1>
        <Divider/>
        <h1>Go to Manage tab to see all employes</h1>
        <Divider/>
        <h1>Go to Hire tab to hire a new employee</h1>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
    <Link href="/about">
        <a>About me..     </a>
    </Link>
    Powered by PostBoy
    </Footer>
  </Layout>
  )
}