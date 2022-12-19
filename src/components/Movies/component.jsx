import { Routes, Route } from "react-router-dom";
import Error from "../../routes/Error";
import Main from "../../routes/Main/component";
import MovieDetails from "../../routes/MovieDetails/component";
import SearchResults from "../../routes/SearchResults/component";

const Movies = () =>{
   return (
       <Routes>
          <Route path="/movies_react" element={<Main/>}/>
          <Route 
          path="/search/:searchId"
          loader={({ params }) => {
            console.log(params.searchId);
          }}
          element={<SearchResults/>}/>
          <Route
          path="/movie/:movieId"
          loader={({params})=>{
            console.log(params.movieId)
          }}
          element={<MovieDetails/>}/>
          <Route path="*" element={<Error/>} />
        </Routes>
     )
}

export default Movies;