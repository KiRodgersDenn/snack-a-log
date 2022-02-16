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
        added_sugar: 0,
        is_healthy: false
    });


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
                id="image"
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
                value={snack.fiber}
                placeholder=''
                onChange={handleTextChange}
            />

            <label htmlFor='protein'>Protein:</label>
            <input
                id="protein"
                type= 'number'
                name="protein"
                value={snack.protein}
                placeholder=''
                onChange={handleTextChange}
            />    

            <label htmlFor='added_sugar'>Added Sugar:</label>
            <input
                id="added_sugar"
                type= 'number'
                name="added_sugar"
                value={snack.added_sugar}
                placeholder=''
                onChange={handleTextChange}
            />
   

            </form>
        </div>
    )
}
export default NewSnack;