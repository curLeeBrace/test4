
import { useEffect , useState} from "react"
import axios from "axios"

export const UserList = () =>{
    
    const [usersList, setUserList] = useState([]);
    useEffect(()=>{
        axios.get('/user/list')
        .then((res) => {
            setUserList(res);
        })

        .catch((err) => {
            console.log(err);
        })


    },[])

    return(
        <>
            {
                usersList.map((user) => {
                    return <h1 key = {user.id}> {user} </h1>
                })
            }
        </>
    )
}