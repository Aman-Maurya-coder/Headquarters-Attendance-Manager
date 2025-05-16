import React from 'react'
import "./signup.css"

const login = () => {
    return (
        <div>
            <div className="container">

                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                
                <div className="inputflex">
                <div className="inputs" id='Name'>
                    <input type="text" placeholder='First Name' id='fname'/>
                    <input type="text" placeholder='Last Name' id='lname'/>
                    
                </div>
                <div className="inputs">
                    <input type="email" placeholder='Email ' />
                </div>
                <div className="inputs">
                    <input type="password" placeholder='Password'/>
                </div>
                </div>
            <div className="submit_cont">
                <div className="submit">Sign Up</div>
                <div className="submit">Log In</div>
            </div>
            </div>
        </div>

    )
}

export default login