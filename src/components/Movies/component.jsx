import { Routes, Route } from "react-router-dom";
import Error from "../../routes/Error";
import Main from "../../routes/Main/component";


const Movies = () =>{
   return(
       <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
     )
}

export default Movies;