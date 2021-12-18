import './App.css';
import AppHeader from './components/comman/header';
import AppHome from './components/views/home';

import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
const { Header } = Layout;

function App() {
  return (
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <AppHome/>
        </Content>
      </Layout>
  );
}

export default App;
