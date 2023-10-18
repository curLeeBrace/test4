import { CreateUser } from "./Components/CreateUser";
import { SamplePage } from "./Components/SamplePage";
import { PageNotFound } from "./Components/PageNotFound";

import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path = "/" element = {<CreateUser/>}/>
        <Route path= "/create" element = {<SamplePage/>} />
        <Route path= "*" element = {<PageNotFound/>} />
      </Routes>
       
    </div>
  );
}

export default App;
