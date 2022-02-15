import { useState , useEffect } from "react";
import {Link , Navigate , useNavigate , useParams} from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SnackDetails(){
    const [snack,setSnack] = useState({});
    let {index} = useParams();
    let navigate = useNavigate();
  

    useEffect(()=>{
        axios.get(API + "/snacks/"+ index)
        .then((res)=>{
            setSnack(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },[index,API]);

    const handleDelete=()=>{
        axios.delete(API +'/snacks/' +index)
        .then((res)=>{
            navigate("/snacks")
        }).catch((err)=>{
            console.log(err)
        })
    }
    return(
        <div>
            <div className="details">
                <h2>{snack.name}</h2>
                {snack.image}
                Protein: {snack.protein}
                Fiber: {snack.fiber}
            </div>

            <div className="navButtons">
                <Link to={'/snacks'}>
                    <input type='submit' value= 'BACK'/>
                </Link>

                <input type = 'submit' value= 'DELETE' onClick={handleDelete}/>
            </div>
        </div>
    )
}

export default SnackDetails;