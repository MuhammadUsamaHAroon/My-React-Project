import React, { useState } from 'react'
import '../signUpScreens/signup.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from 'react-router'

const AdminSignup = () => {
    let history= useHistory()
    const [adminName, setAdminName]= useState('')
    const [adminEmail, setAdminEmail]= useState('')
    const [adminPass, setAdminPass]= useState('')
    const [adminNumber, setAdminNumber]= useState('')

    const SignupAdmin=()=>{
        console.log(adminName, adminEmail, adminPass, adminNumber)
        setAdminName('')
        setAdminEmail('')
        setAdminPass('')
        setAdminNumber('')
        history.push("/adminLog")
    }
    return (
        <div>
            
        <Container>
        <Row className='row'>
          <Col xl={5} md={7} sm={10} xm={10}  className='col'>
          
  <div className="card border-success mb-3" >
    <div className="card-header signAdminHeader"><h1>Admin SignUp</h1></div>
    <div className="card-body text-success cardBody">
      
    <input
    placeholder='username'
    type='text'
    className='form-control emailInput'
    onChange={(e)=>{setAdminName(e.target.value)}}
    value={adminName}
    />
    <input
    placeholder='Email'
    type='email'
    className='form-control textInput'
    onChange={(e)=>{setAdminEmail(e.target.value)}}
    value={adminEmail}
    />
    <input
    placeholder='Password'
    type='password'
    className='form-control passInput'
    onChange={(e)=>{setAdminPass(e.target.value)}}
    value={adminPass}
    
    />
    <input
    placeholder='Phone Number'
    type='number'
    className='form-control numberInput'
    onChange={(e)=>{setAdminNumber(e.target.value)}}
    value={adminNumber}
    />
    <div className='stndLogin'>
    <button className='btn btn-outline-warning admin_btn_signUp' onClick={SignupAdmin}>SignUp</button>
    </div>
  <div id="passwordHelpBlock" className="form-text">
      <select className='form-control selectAdmin' onChange={(e)=>{
          const value= e.target.value
          if(value=="Company SignUp"){
              return history.push("/companySignup")
          }
          else if(value=="Student SignUp"){
              return history.push("/")
          }
      }}>
      <option>Other option</option>
          <option>Company SignUp</option>
          <option>Student SignUp</option>
  
  
      </select>
    
  </div>
  
    </div>
    </div>
    
          </Col>
        </Row>
      </Container>
        </div>
    )
}

export default AdminSignup
