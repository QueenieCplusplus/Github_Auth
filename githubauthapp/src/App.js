// 2020, AM 9:30-10:30 (1 hr)
// npm install graphql

import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'; // 使用此Router將其他元件包覆起來
//import { gql } from 'apollo-boost'
import AuthUser from './AuthUser' //(等待建立)
//import User from './User' //(等待建立)

// {ROOT_QUERY} 根本的請求內文，等待建立

function App() {

  return (
    <BrowserRouter>
      <div>
        <AuthUser/>
      </div>
    </BrowserRouter>
  );

}

export default App;
