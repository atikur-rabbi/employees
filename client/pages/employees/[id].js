import { 
  Form, 
  Select, 
  InputNumber, 
  Input,
  Radio,
  Switch,
  Slider, 
  Button, 
  Layout, 
  Menu, 
  Breadcrumb, 
  Cascader,
  Table, 
  Tag, 
  Space,
  DatePicker,
  TreeSelect
} from 'antd'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {getEmpId,updateEmp} from '../../utils/fetch_fun'
import {useState, useEffect, useReducer} from 'react'
const { Header, Footer, Content } = Layout;
const FormItem = Form.Item
const Option = Select.Option
import moment from 'moment';

export async function getServerSideProps(context) { 
  console.log('fetching..')
  try {
    const res = await fetch(`http://localhost:2020/Employee/${context.params.id}`, {method: 'GET'})
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



export default function Edit(props) {

  const flag = "true"
  const data = props.data.[0]
  const [body,  setBody ] = useState({First:data.first_name,Last:data.last_name,Act:data.is_active,Date:data.date_of_birth,Id:data.id})
  const dateFormat = 'YYYY/MM/DD';

  function changeAct(value) {
    setBody({...body,Act:value})
  }
  function changeDate(date, dateString) {
    setBody({...body,Date:dateString})
  }


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
        <Form labelCol={{ span: 4 }}
              wrapperCol={{ span: 14 }}
              layout="horizontal"
        >
          <Form.Item label="First name">
            <Input defaultValue ={data.first_name} onChange={(e)=>setBody({...body,First:e.target.value})}/>
          </Form.Item>
          <Form.Item label="Last name">
            <Input defaultValue ={data.last_name} onChange={(e)=>setBody({...body,Last:e.target.value})}/>
          </Form.Item>
          <Form.Item label="Activity">
            <Select defaultValue={data.is_active.toString()} onChange={changeAct}> 
              <Option value="true" >Active</Option>
              <Option value="false">Not Active</Option>
            </Select>
          </Form.Item>
          <Form.Item label="DatePicker">
            <DatePicker defaultValue={moment(data.date_of_birth, dateFormat)} format={dateFormat}  onChange={changeDate} />
          </Form.Item>
        </Form>
      </div>
      <Button size="large" type="primary" disabled = {!body.First||!body.Last||!body.Act.toString()||!body.Date} onClick={()=>updateEmp(body)}>
          Update
      </Button>
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


// WHY: why does handle event read value but setState doesnt?
