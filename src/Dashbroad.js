import React from 'react'
import './App.css';
import { Layout,Typography,Avatar,Image,Menu,Breadcrumb  } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { MailOutlined,NotificationOutlined,UserOutlined  } from '@ant-design/icons';
const { Title } = Typography;
const { Header, Footer, Sider, Content } = Layout;
const Dashbroad = () => {
    return (
        <div>
          <Layout>
        <Layout>
              <Header style={{padding: '10px'}}>
              <Avatar style={{float:'right'}}src={<Image src="./ony.png"/>} />
                <Title style={{color:'white'}} level={3}>SUC KHOE</Title>
              </Header>
        </Layout>
              <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<MailOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{background:'white',marginLeft: '40px', padding: '0 24px', minHeight: 280 }}>Content</Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>ONY DUANGMALA</Footer>
  </Layout>
    </div>
    )
}

export default Dashbroad
