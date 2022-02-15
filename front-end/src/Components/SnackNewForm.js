import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function NewSnack(){
    let navigate= useNavigate();
    const [snack,setSnack] = useState({
        name: '',
        image: '',
        fiber: 0,
        protein: 0,
        added_suger: 0,
        is_healthy: false
    });

    const handleIncrement=()=>{

    }
    const handleDecrement=()=>{

    }
    const addSnack =()=>{
        axios
            .post(`${API}/snacks`,snack)
            .then(
                ()=>{
                    navigate(`/snacks`);
                },
                (err)=>console.err(err)
            )
            .catch((c)=> console.warn('catch',c));      
    };

    const handleTextChange =(event) =>{
        setSnack({ ...snack, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        addSnack();
    };

    return(
        <div className='new'>
            <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
                <input
                    id="name"
                    value={snack.name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Name of Snack"
                    required
                />
            
            <label htmlFor='image'>Image:</label>
            <input
                id="url"
                type="text"
                pattern="http[s]*://.+"
                required
                value={snack.image}
                placeholder="http://"
                onChange={handleTextChange}
            />

            <label htmlFor='fiber'>Fiber:</label>
            <input
                id="fiber"
                type= 'number'
                name="fiber"
                value={bookmark.category}
                placeholder="educational, inspirational, ..."
                onChange={handleTextChange}
            />

            </form>
        </div>
    )
}
export default NewSnack;