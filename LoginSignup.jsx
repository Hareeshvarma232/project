import "./LoginSignup.css"
import email_icon from "../assets/email.png"
import user_icon from "../assets/person.png"
import password_icon from "../assets/password.png"
import React, { useState } from "react"
export const LoginSignup = () => {

    const[action,setAction] = useState("Login")

    
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
    
            </div>
            <div className="inputs">
            {action === "Login" ?<div></div> : <div className="input"><img className="user" src={user_icon} alt=""/>
                    <input type="text" placeholder="Enter user name" />
          </div>
                
                  
           }
                   
            <div className="input">
                    <img className="email"src={email_icon} alt=""/>
                    <input type="email" placeholder="Enter Email" />
                </div>
                <div className="input">
                    <img className= "password" src={password_icon} alt=""/>
                    <input type="password" placeholder="Enter password" />
                </div>   
                
                </div>
                {action === "sign up" ? <div></div> : <div className="forgot-password">forgot password ? <span>Click here?</span></div> }
               
                <div className="submit-container">
                   <div className={action === "Login"?"submit gray" : "submit"} onClick={()=>{setAction("sign up")}}>Sign up</div>
                   <div className={action === "sign up" ?"submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>
               
                </div>
        </div>
    )
}