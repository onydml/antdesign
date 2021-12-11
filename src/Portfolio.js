import React from 'react'
import { Layout, Menu,Typography,Avatar,Image,BackTop  } from 'antd';
import './Portfolio.css'
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 5,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  };

const Portfolio = () => {
    return (
        <div>
            <Layout>
                <Header>
                    <Avatar style={{float:'right',marginTop:15} } src={<Image src="https://joeschmoe.io/api/v1/random"  />} />
                    <Title style={{ float:'left',padding:15,color:'white' }} level={3}>ONY DUANGMALA</Title>
                    <Menu style={{}} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Personal</Menu.Item>
                    <Menu.Item key="2">Skills</Menu.Item>
                    <Menu.Item key="3">Education</Menu.Item>
                    <Menu.Item key="3">Contact</Menu.Item>
                </Menu>
                </Header>

                <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div className="personal">
                    <Image style={{ minHeight:250, minWidth:250,marginBottom:20 }} className="avatar1" src='https://joeschmoe.io/api/v1/random' />
                    <div style={{ marginLeft:20 }} className="info-personal">
                        <h1>ONY DUANGMALA</h1>
                        <p>The quick brown fox<br />jumps over the lazy dogIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>
                <div className="Contact">
                    <div className="info-contact">
                        <h1>ONY DUANGMALA</h1>
                        <p>The quick brown fox<br />jumps over the lazy dog</p>
                    </div>
                    <div className="info-personal">
                        <h1>ONY DUANGMALA</h1>
                        <p>The quick brown fox<br />jumps over the lazy dog</p>
                    </div>
                </div>
                <div className="Contact">
                    <div className="info-contact">
                        <h1>ONY DUANGMALA</h1>
                        <p>The quick brown fox<br />jumps over the lazy dog</p>
                    </div>
                    <div className="info-personal">
                        <h1>ONY DUANGMALA</h1>
                        <p>The quick brown fox<br />jumps over the lazy dog</p>
                    </div>
                </div>
                <div className="Contact">
                    <div className="info-contact">
                        <h1>ONY DUANGMALA</h1>
                        <p>The quick brown fox<br />jumps over the lazy dog</p>
                    </div>
                    <div className="info-personal">
                        <h1>ONY DUANGMALA</h1>
                        <p>The quick brown fox<br />jumps over the lazy dog</p>
                    </div>
                </div>
                    <BackTop>
                        <div style={style}>UP</div>
                    </BackTop>
                </Content>
                <Footer style={{ textAlign: 'center' }}>ONY ©2021 Created by ONY DUANGMALA</Footer>
            </Layout>
        </div>
    )
}

export default Portfolio
