import {useState} from 'react'; 
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

export const CreateUser = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username : "",
        fname : "",
        mname : "",
        lname : ""
    })
    
    const handleChange = (e) =>{
        const {name ,value} = e.target;

        setUserData((prev) => {
            return {...prev, [name] : value};
        });

    }

    const createUser = (e) => {
        e.preventDefault();
        axios.post('/', userData)
        .then(res => {
            const {sucsess} = res.data;
            if(sucsess){
                navigate('/create')
            }
            console.log(sucsess);

        })
        .catch(err => console.log(err))
    }



    return(

        <form onSubmit={createUser}>
            <label>Username : </label> <input name = "username" onChange = {handleChange}/> <br/>
            <label>FirstName : </label> <input name = "fname" onChange = {handleChange}/> <br/>
            <label>MiddleName : </label> <input name = "mname" onChange = {handleChange}/> <br/>
            <label>LastName : </label> <input name = "lname" onChange = {handleChange}/> <br/>
            <input type = 'submit' value = "Submit"/>

        </form>
    )
} 