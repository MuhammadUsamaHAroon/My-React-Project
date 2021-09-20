import React, { useState } from 'react'
import '../signUpScreens/signup.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { db } from '../../../config/firebase'
import { useHistory } from "react-router-dom";    


const StudentSignup = () => {
    let history= useHistory()
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [number, setNumber]= useState('')
    const [select, setSelect]= useState('')
    

    const submitForm=()=>{

    
    
      db.collection('Signup Data').add({
        name:name,
        email:email,
        password:password,
        number:number
      })
      .then(()=>{
        alert('submitted data in firebase')
      }).catch((e)=>{
        alert('error------>', e.Error)
      })
      setName("")
      setEmail("")
      setPassword("")
      setNumber("")
        // history.push("/studentLog")
    }
    return (

            <Container>
          <Row className='row'>
            <Col xl={5} md={7} sm={10} xm={10}  className='col'>
            
    <div className="card border-success mb-3" >
      <div className="card-header cardHeader"><h1>Student SignUp</h1></div>
      <div className="card-body text-success cardBody">
     
      <input
    placeholder='username'
    type='text'
    className='form-control textInput'
    onChange={(e)=>{setName(e.target.value)}}
    value={name}
    />
      <input
      placeholder="Email"
      type='text'
      className='form-control emailInput'
      onChange={(e)=>{setEmail(e.target.value)}}
      value={email}
    
      />
      <input
      placeholder='Password'
      type='password'
      className='form-control passInput'
      onChange={(e)=>{setPassword(e.target.value)}}
      value={password}
  
      />

      <input
      placeholder='Phone Number'
      type='number'
      className='form-control numberInput'
      onChange={(e)=>{setNumber(e.target.value)}}
      value={number}
      
      />

      <div className='stndLogin'>
      <button className='btn btn-outline-primary btnLogin'
      onClick={submitForm}
      >SignUp</button>
      </div>
    <div id="passwordHelpBlock" className="form-text">
        <select className='form-control selectBox' onChange={(e)=>{setSelect(e.target.value)}}
        value={select}>
          
            <option>Other option</option>
            <option>Company SignUp</option>
            <option>Admin Signup</option>
            
    
    
        </select>
      
    </div>
    
      </div>
      </div>
      
            </Col>
          </Row>
        </Container>
            
        )
}

export default StudentSignup
