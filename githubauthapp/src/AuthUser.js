// 2020, 8/07 9:20-10:30  step(0)
// 2020, 8/08 10:30-11:30 step(1)~(5)

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
// import {ROOT_QUERY} from './App.js'

// 另外code file 待做 Mutation 使用 react-apollo 的 {Mutation} 
// 和使用 apollo-boost 的 { gql }
// （1）並將 code 代碼 從警示使用者改為傳送給 githubAuth mutation

const GITHUB_AUTH_MUTATION = gql`
    mutation githubAuth($code: String!){
        githubAuth(code:$code) {
            token
        }
    }
`

class AuthUser extends React.Component{

    // no constructor due to no father component
    // this state is set to bool data type 
    state = { signIn: false };

    reqCode(){

        var Id = "<GithubAuth_Client_ID>";
        
        window.location = "https://github.com/login/oauth/authorize?client_id=${Id}&scope=user";

    }

    componentDidMount(){

        if(window.location.search.match(/code=/)){

            this.setState({signIn: true})
            const code = window.location.search.replace("?code=", "")
            //(5) 註解警示訊息，改成將 code 傳回 github 的方法
            //alert(code)
            this.props.history.replace("/")
            this.githubAuthMutation({variables: {code}})
        }
            
    }

    // (3) 建立 Mutation 元件要綁定 update 的方法

    authorizationComplete = (cache, {data}) => {

        localStorage.setItem('token',data.githubAuth.token)
        this.props.history.replace('/')
        this.setState({signIn: false})

    }
    
    // (2) 將上面命名為 GITHUB_AUTH_MUTATION 的 const 
    // 常數包覆的回傳值為 token 的 mutation
    // 授權予使用者，呈現 UI 如下。
    render(){

        return(

            // (4) 處理回傳值並且呈現在 UI 上
            // Mutation 元件 含有 mutaion 屬性
            // 和 update 、 refetchQueries 方法
            <Mutation mutation = {GITHUB_AUTH_MUTATION}
                update = {this.authorizationComplete}
                //refetchQueries = {[{query: ROOT_QUERY}]}
                >
                   
                {mut => {
                    this.githubAuthMutation = mut
                    return(
                        <button
                            onClick = {this.reqCode}
                            disabled = {this.state.signIn}
                            >

                            Sign In With Github Auth

                        </button>
                    )
                }}

            </Mutation>

            // (0) 初始步驟
            // <div>
            //     <br/>
            //     <br/>
            //     <br/>
            //     <button onClick= {this.reqCode} disabled = {this.state.signIn}>

            //         Sign In With Github Auth

            //     </button>
            //     <br/>

            // </div>
        )
    }
}

export default withRouter(AuthUser);
