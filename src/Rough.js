import React, { createContext, useContext, useEffect, useState } from 'react'
import {firstName, lastName} from './App'
import axios from 'axios'


const Rough=()=>{
    const [num, setNum] = useState()
    const [name, setName] = useState()
    const [move , setMove ] = useState()
    
    useEffect(()=>{
        async function getData(){
            const res= await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${num}`
            )
            
            setName(res.data.name)
            setMove(res.data.moves.length)
        }
        getData()
        
    })

    return(
        <>
        <div>
            <h1>You choose <span style={{color:'green'}}> {num} </span>value</h1>
            <h1>my Name is<span style={{color:'green'}}> {name}</span></h1>
            <h1>i have<span style={{color:'green'}}> {move}</span> moves</h1>

            
        </div>
        <div>
        <select value={num} onChange={(e)=>{
            setNum(e.target.value)
        }}>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='25'>25</option>
            <option value='40'>40</option>
            <option value='50'>50</option>
        </select>
        </div>

        </>
    )
}
export default Rough;