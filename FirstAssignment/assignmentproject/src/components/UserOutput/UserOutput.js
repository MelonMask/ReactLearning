import React, {Component} from 'react'
import './UserOutput.css'
const UserOutput = (props) =>{
    return (
        <div className="UserOutput">
            Hello my name is {props.username}
        </div>
    )
}

export default UserOutput