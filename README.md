# Github_Auth
new react  login app using Oauth


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
