// 2020, 8/07 9:20-10:30

import React from 'react';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

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