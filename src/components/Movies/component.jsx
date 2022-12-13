import { Routes, Route } from "react-router-dom";
import Error from "../../routes/Error";
import Main from "../../routes/Main/component";
import MovieDetails from "../../routes/MovieDetails/component";
import SearchResults from "../../routes/SearchResults/component";

const Movies = () =>{
   return(
       <Routes>
          <Route path="/" element={<Main/>}/>
          <Route 
          path="/search/:searchId"
          loader={({ params }) => {
            console.log(params.searchId); // "hotspur"
          }}
          // and the action
          action={({ params }) => {}} 
          element={<SearchResults/>}/>
          <Route
          path="/movie/:movieId"
          loader={({params})=>{
            console.log(params.movieId)
          }}
          action={({ params }) => {}} 
          element={<MovieDetails/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
     )
}

export default Movies;