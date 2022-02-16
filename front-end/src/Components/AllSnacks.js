import axios from "axios";
import {useState, useEffect} from 'react';
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

function AllSnacks(){
    const [snack, setSnacks]= useState([]);

    useEffect(()=>{
        axios.get(API + '/snacks')
        .then((res)=>{
            setSnacks(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    return (
        <div className="snacks">
            {snack.map((snack)=>{
                return <Snack key={snack.id} snack ={snack}/>
            })}
        </div>
    )
}

export default AllSnacks;