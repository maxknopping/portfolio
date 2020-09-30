import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import NavBar from './pages/Navbar/Navbar';
import {Navigation, Layout, Header, Drawer, Content} from 'react-mdl';
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
      <Layout fixedHeader>
          <Header className="header-color" style={{color: 'white'}}>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contact">Contact</Link>
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
