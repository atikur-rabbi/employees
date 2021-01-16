import { Button, Layout, Menu, Breadcrumb, Table, Tag, Space } from 'antd'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {deleteEmp} from '../../utils/fetch_fun'
const { Header, Footer, Content } = Layout;

const absoluteUrl = (req, setLocalhost) => {
  let protocol = 'https'
  let host = req ? req.headers.host : window.location.hostname
  if (host.indexOf('localhost') > -1) {
      if (setLocalhost) host = setLocalhost
      protocol = 'http'
  }

  return url.format({
      protocol,
      host,
      pathname: '/' // req.url
  })
}

export async function getServerSideProps(context) {
  console.log('fetching..')
  try {
    const baseUrl = '/' // absoluteUrl(context.req, 'localhost:3000')
    const apiUrl = process.env.NODE_ENV === 'production' ? `${baseUrl}api/Employee` : 'http://localhost:9999/api/Employee'
    const res = await fetch(apiUrl, {method: 'GET'})
    const data = await res.json()
    if(!data)
    return {
      notFound: true,
    }
    return {
      props:{
        data,
      },
    }}catch(e) {
        console.log(e)
      }
}

export default function Employees(props) {
  const router = useRouter()
  const data = props.data
  // NOTE: This are the colomn of the table
  const columns = [ 
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        render: text => <a>{text}</a>,
      },
      {
        title: 'First name',
        dataIndex: 'first_name',
        key: 'first_name',
      },
      {
        title: 'Last name',
        dataIndex: 'last_name',
        key: 'last_name',
      },
      {
        title: 'Activity',
        dataIndex: 'is_active',
        key: 'is_active',
        render: text => <a>{text.toString()}</a>,
      },
      {
        title: 'Date of birth',
        dataIndex: 'date_of_birth',
        key: 'date_of_birth',
      },
      {
        title: 'Actions',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button size="small" type="primary" onClick={()=>router.push('/employees/' + text.id)}>
              Edit
            </Button>
            <Button size="small" type="primary" onClick={()=>deleteEmp(text.id)}>
              Delete
            </Button>
          </Space>
        ),
      },
    ];
  return (
    <Layout className="layout">
    <Head>
        <title>Postem</title>
    </Head>
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
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
      <Table columns={columns} dataSource={data} /> 
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
