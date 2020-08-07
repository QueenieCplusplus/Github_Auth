// 2020, 8/07, am 10:00-10:15

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-client';

// const ac = new ApolloClient({

//   uri: "http://localhost:4000/graphgql",
//   req: ops => {
//     ops.setContext(context => {

//         headers:{
//         //...
//         authorization: localStorage.getItem('token')
//       }

//     })
//   }

// })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
