// 2020, 8/07, am 10:00-10:15

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-client';

const client = new ApolloClient({

  uri: "http://localhost:4000/graphgql",
  req: ops => {
    ops.setContext(context => ({

        headers:{
          // 識別使用者 to identify wether user is member or not
          // 將權杖 token 加入到每一個請求的標頭[授權]
          // 確保瀏覽器中的 localStorage 儲存的每一個權杖，
          // 和每一個送往 GQL 服務的請求一起被送出。
          authorization: localStorage.getItem('token')
      }

    }))
  }

})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
