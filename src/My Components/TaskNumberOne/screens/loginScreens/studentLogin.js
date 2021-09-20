import React, { useState } from 'react'
import { useHistory } from 'react-router'
import '../loginScreens/login.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const StudentLogin = () => {
    let history=useHistory()
    const[logStudentEmail, setLogStudentEmail]= useState('')
    const[logStudentPass, setLogStudentPass]= useState('')

    const loginStudent=()=>{
        console.log(logStudentEmail, logStudentPass)
        setLogStudentEmail('')
        setLogStudentPass('')
        history.push("/studentDash")
    }
    return (
      
        <div>
            
        <Container>
        <Row className='Comp_login_row'>
          <Col xl={5} md={7} sm={10} xm={10}  className='col'>
          
  <div className="card border-success mb-3" >
    <div className="card-header loginStudentHeader"><h1>Student Login</h1></div>
    <div className="card-body text-success cardBody">
      
    
    <input
    placeholder='Email'
    type='email'
    className='form-control textInput'
    onChange={(e)=>{setLogStudentEmail(e.target.value)}}
    value={logStudentEmail}


    />
    <input
    placeholder='Password'
    type='password'
    className='form-control passInput'
    onChange={(e)=>{setLogStudentPass(e.target.value)}}
    value={logStudentPass}
    />
    
    <div className='admin_Login  '>
    <button className='btn btn-outline-primary btnLogin' onClick={loginStudent}>Login</button>
    </div>
  
    </div>
    </div>
    
          </Col>
        </Row>
      </Container>
        </div>
    
    )
}

export default StudentLogin
