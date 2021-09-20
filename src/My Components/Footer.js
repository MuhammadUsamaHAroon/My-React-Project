import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Footer = () => {
    const year= new Date().getFullYear()
    return (
        <>
        <Row>
            <Col xl={12}><div className='Footer '><h5> Copyright @ {year} </h5></div></Col>
        </Row>
            
        </>
    )
}

export default Footer;
