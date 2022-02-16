import axios from "axios";
import { useState , useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function EditSnack(){
    const [snack, setSnack] = useState({

    })
    const {index} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/snacks/${index}`)
        .then((res)=>{
        setSnack(res.data.payload)
        }).catch((err)=>{
            console.log(err)
        })
    },[index])

    const handleTextChange =(event) =>{
        setSnack({ ...snack, [event.target.id]: event.target.value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`${API}/snacks/${index}`, snack)
        .then(()=>{
            navigate('/snacks')
        }).catch((err)=>{
            console.log(err)
        })
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
        <input type ='submit' />


        </form>
    </div>
    )
}

export default EditSnack;