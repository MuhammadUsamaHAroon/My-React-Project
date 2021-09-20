import React, { useState } from 'react'
import '../loginScreens/login.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from "react-router-dom";    

const AdminLogin = () => {
    let history= useHistory()
    const [logAdminEmail, setLogAdminEmail]= useState('')
    const [logAdminPass, setLogAdminPass]= useState('')
    

    const loginAdmin=()=>{
        console.log(logAdminEmail, logAdminPass)
        setLogAdminEmail('')
        setLogAdminPass('')
        history.push("/adminDash")
    }
    return (
        
        <>
            
        <Container>
        <Row className='Comp_login_row'>
          <Col xl={5} md={7} sm={10} xm={10}  className='col'>
          
  <div className="card border-success mb-3" >
    <div className="card-header loginAdminHeader"><h1>Admin Login</h1></div>
    <div className="card-body text-success cardBody">
      
    
    <input
    placeholder='Email'
    type='email'
    className='form-control textInput'
    onChange={(e)=>{setLogAdminEmail(e.target.value)}}
    value={logAdminEmail}

    />
    <input
    placeholder='Password'
    type='password'
    className='form-control passInput'
    onChange={(e)=>{setLogAdminPass(e.target.value)}}
    value={logAdminPass}
    />
    
    <div className='admin_Login  '>
    <button className='btn btn-outline-warning btnLogin' onClick={loginAdmin}>Login</button>
    </div>
  
    </div>
    </div>
    
          </Col>
        </Row>
      </Container>
        </>
    
            
    )
}

export default AdminLogin
