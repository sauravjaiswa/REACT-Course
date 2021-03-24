import React, { Component } from 'react'

class UserGreetings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    

    render() {

        return (
            this.state.isLoggedIn?
            <div>Welcome Bob</div>:
            <div>Welcome Guest</div>
        )

        //return this.isLoggedIn && <div>Welcome Bob</div>

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Bob</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        // return (
        //     <div>
        //         <div>Welcome Bob</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreetings
