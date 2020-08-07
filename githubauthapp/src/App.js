// 2020, AM 9:30-10:00 (0.5 hr)

import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'; // 使用此Router將其他元件包覆起來
import { gql } from 'apollo-boost'
import AuthUser from './AuthUser' //(等待建立)
import User from './User' //(等待建立)

function App() {

  return (
    <BrowserRouter>
      <div>
        <AuthUser/>
        <User/>
      </div>
    </BrowserRouter>
  );

}

export default App;
