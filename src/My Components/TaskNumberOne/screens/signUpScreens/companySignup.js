import React, { useState } from 'react'
import '../signUpScreens/signup.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Register} from '../../../config/firebase'
import { useHistory } from "react-router-dom";    


const CompanySignup = () => {
    let history= useHistory()
    const [comName, setComName]=useState('')
    const [comEmail, setComEmail]= useState('')
    const [comPassword, setComPassword]= useState('')
    const [comNumber, setComNumber]= useState('')

    const btnCompany=()=>{
        console.log(comName ,comEmail, comPassword,comNumber)
        // ComRegister(comEmail, comPassword)
        history.push("/companyLog")
    }

    return (
        <div>
            
        <Container>
        <Row className='row'>
          <Col xl={5} md={7} sm={10} xm={10}  className='col'>
          
  <div className="card border-success mb-3" >
    <div className="card-header signCompHeader"><h1>Company SignUp</h1></div>
    <div className="card-body text-success cardBody">
      
    <input
    placeholder='username'
    type='text'
    className='form-control emailInput'
    onChange={(e)=>{setComName(e.target.value)}}
    />
    <input
    placeholder='Email'
    type='email'
    className='form-control textInput'
    onChange={(e)=>{setComEmail(e.target.value)}}

    />
    <input
    placeholder='Password'
    type='password'
    className='form-control passInput'
    onChange={(e)=>{setComPassword(e.target.value)}}
    
    />
    <input
    placeholder='Phone Number'
    type='number'
    className='form-control numberInput'
    onChange={(e)=>{setComNumber(e.target.value)}}
    />
    <div className='stndLogin'>
    <button className='btn btn-outline-success btnLogin' onClick={btnCompany}>SignUp</button>
    </div>
  <div id="passwordHelpBlock" className="form-text">
      <select className='form-control selectComp' onChange={(e)=>{
        const value= e.target.value
        console.log(value)
        if(value=="Admin SignUp"){
          return history.push("/adminSignup")
        }
        else if(value== "Student SignUp"){
          return history.push("/")
        }

      }} >
          <option>Other Option</option>
          <option>Admin SignUp</option>
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

export default CompanySignup
