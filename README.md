# Github_Auth
new react  login app using Oauth

備註： 還要做 Mutation, 待今晚或明天


// Demo

![oauth](https://raw.githubusercontent.com/QueenieCplusplus/Github_Auth/master/demo%202.png)


// App.js

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


// AuthUser.js

    window.location.search.match()
    window.location.search.replace()

做 button 此按鈕按下後，會將使用者轉址到到 Github Oauth 程序，等待授權完成後，
Github Oauth 會將 code 代碼回傳給瀏覽器展示在 window 視窗前：http://localhost:3000?code=xxxxxxxxx
如果查詢字串裡面有代碼 code，此視窗會將位址解析出來。並且使用 alert() 警示出來。
最後使用 history 特性移除他。（由 React router 送給此元件的，故使用 Props.history）

另外，此代碼其實不是做來警示 User 得，而是要將 code 送回給 GithubAuth 做 Mutation，待續....。

        // 2020, 8/07

        import React from 'react';
        import { withRouter } from 'react-router-dom';

        // 另外code file 待做 Mutation 使用 react-apollo 的 {Mutation} 
        // 和使用 apollo-boost 的 { gql }
        // 將更改的 user info 傳回 DB

        class AuthUser extends React.Component{


            // no constructor due to no father component
            state = { signIn: false };

            reqCode(){

                var Id = "<GithubAuth_Client_ID>";

                window.location = "https://github.com/login/oauth/authorize?client_id=${Id}&scope=user";

            }

            componentDidMount(){

                if(window.location.search.match(/code=/)){

                    this.setState({signIn: true})
                    const code = window.location.search.replace("?code=", "")
                    alert(code)
                    this.props.history.replace("/")

                }

            }


            render(){

                return(

                    <button onClick= {this.reqCode} disabled = {this.state.signIn}>

                        Sign In With Github Auth

                    </button>

                )
            }

        }

        export default withRouter(AuthUser);


// User.js (to be continued...)
