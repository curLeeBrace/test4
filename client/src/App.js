import { CreateUser } from "./Components/CreateUser";
import { UserList } from "./Components/UserList";
import { PageNotFound } from "./Components/PageNotFound";

import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path = "/" element = {<CreateUser/>}/>
        <Route path= "/user-list" element = {<UserList/>} />
        <Route path= "*" element = {<PageNotFound/>} />
      </Routes>
       
    </div>
  );
}

export default App;
