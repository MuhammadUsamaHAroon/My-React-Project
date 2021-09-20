import React, { useState } from 'react'
import '../loginScreens/login.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from "react-router-dom";    


const CompanyLogin = () => {
    let history=useHistory()
    const [logComEmail, setLogComEmail]= useState('')
    const [logComPass, setLogComPass]= useState('')

    const compLogin=()=>{
        console.log(logComEmail, logComPass)
        history.push("/companyDash")
}
    return (
        
        
    
        <div>
            
        <Container>
        <Row className='Comp_login_row'>
          <Col xl={5} md={7} sm={10} xm={10}  className='col'>
          
  <div className="card border-success mb-3" >
    <div className="card-header loginCompHeader"><h1>Company Login</h1></div>
    <div className="card-body text-success cardBody">
      
    
    <input
    placeholder='Email'
    type='email'
    className='form-control textInput'
    onChange={(e)=>{setLogComEmail(e.target.value)}}

    />
    <input
    placeholder='Password'
    type='password'
    className='form-control passInput'
    onChange={(e)=>{setLogComPass(e.target.value)}}

    />
    
    <div className='company_Login  '>
    <button className='btn btn-outline-success btnLogin' onClick={compLogin}>Login</button>
    </div>
  
    </div>
    </div>
    
          </Col>
        </Row>
      </Container>
        </div>
    
            
    
    )
}

export default CompanyLogin
