import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';



const Note = (props) => {
    return (
        <>
        <Row >
            <Col xl={12} lg={12} md={12} sm={12} xm={12} className='noteComp'>
            <div className='NoteBox'>
                <div className='Note'>
                    <h4>{props.title}</h4>
                    <p>{props.content}</p>
                    <div className='delete-button'>
                    <button className='btn btn-outline-warning Delete-btn'>
                    <DeleteOutlineIcon className='Delete-icon'/>
                    </button>
                    </div>
                    </div>
                </div>
               
               
            </Col>
           
        </Row>
            
        </>
    )
}

export default Note;
