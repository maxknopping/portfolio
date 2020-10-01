import React, { useEffect } from 'react';
import './App.css';
import {Navigation, Layout, Header, Content} from 'react-mdl';
import Main from './pages/Main';
import { Link } from 'react-router-dom';

function App() {
  useEffect(() => {
      document.body.style.backgroundColor = "black";
      document.body.style.width = '100%';
      document.body.style.height = '100%';
  }, []);

  return (
    <div>
      <Layout className="landing-grid" fixedHeader>
          <Header className="header-color" style={{color: 'white'}}>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/about">About</Link>
              </Navigation>
          </Header>
          <Content>
            <Main />
          </Content>
      </Layout>
    </div>
  );
}

export default App;
