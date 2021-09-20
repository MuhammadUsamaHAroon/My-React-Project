import React, { useState } from 'react'
import './style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';



const MainNote = (props) => {
    // console.log(props)
    const [item, setItem]= useState({
        title:'',
        note:''
    })
    // console.log(item)
    const getValue=(e)=>{
        const {name, value}=e.target;
        setItem((val)=>{
            return{
                ...val,
                [name]:value
            }
            
        })
        // console.log(item)
        
    }
    const addButton=()=>{
        props.passValue(item)
        // console.log(props)
        
    }
    return (
        <>
            <Row>
                <Col xl={12} lg={12} md={12} sm={12} xm={12} className='col'>
                <div className='main_Note'>
                {/* <form> */}
                <input className='input'
                type="text"
                 id="inputPassword5"
                  className="form-control"
                   aria-describedby="passwordHelpBlock"
                       placeholder='Title'
                       onChange={getValue}
                       value={item.title}
                       name='title'
                   /><textarea className="form-control"
                    id="exampleFormControlTextarea1"
                     rows="3"
                    autoComplete='off'
                     type='text'
                     placeholder='Write a Note...'
                     onChange={getValue}
                     value={item.note}
                     name='note'
                     />
                     <div className='add-button'>
                     <button onClick={addButton} className='btn btn-outline-warning add_btn'>
                     <AddIcon classsName='plus'/>
                   </button>
                   </div>
                {/* </form> */}
                </div>
                </Col>
            </Row>
        </>
    )
}

export default MainNote;
