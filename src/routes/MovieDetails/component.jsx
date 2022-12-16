import { useParams } from "react-router-dom"
import { Box, Chip, Skeleton, Typography } from "@mui/material"
import { ThemeProvider } from "styled-components"
import Header from "../../components/Header"
import HomeLink from "../../components/HomeLink"
import { convertDate, generateImageUrl } from "../../components/utils"
import TagRoundedIcon from '@mui/icons-material/TagRounded';

import theme from "../../theme/useThem"
import useMoviesData from "../../hooks/moviesData"

const MovieDetails = () =>{
    let params = useParams();
    const details = useMoviesData(params.movieId);
    const movie_detail = details.data;
    console.log(movie_detail)
    return(
        <ThemeProvider theme={theme}>
            <Box className="main" backgroundColor={theme.palette.detail.main} fontFamily={theme.typography.fontFamily}>
                <Header color_type={theme.palette.detail.main} search_theme={theme.palette.detail.main}/>
                <HomeLink link_type={theme.palette.detail.light}/>
                <Box> 
                    {(movie_detail.length === 0 ) ?
                    <Box height="100vh">
                        <Skeleton variant="rectangular" width="100%" height={200} />
                    </Box>
                    :
                    <Box sx={{position: 'relative'}}>
                        <img 
                        src={generateImageUrl(movie_detail.backdrop_path)} 
                        width="100%" 
                        height="auto" 
                        sx={{zIndex: '1'}} 
                        alt={movie_detail.original_title} />
                        <Typography 
                            variant="h2" 
                            fontFamily={theme.typography.fontFamily} 
                            sx={{
                                bottom: '115px',
                                width: '100%'
                                }}>
                                {movie_detail.original_title}
                        </Typography>
                        <Typography
                        variant="h6" 
                        sx={{
                            zIndex: '2', 
                            bottom: '90px', 
                            width: '100%'}}>
                                {convertDate(movie_detail.release_date)}
                        </Typography>
                        <Typography paragraph={true} fontFamily={theme.typography.fontFamily} sx={{zIndex: '2', backgroundColor: '#00000094', color: 'aliceblue', padding: '15px', margin: 0, width: '100%'}}>{movie_detail.overview}</Typography>
                        <Typography
                        variant="h3" 
                        sx={{
                            position: 'absolute', 
                            color: 'aliceblue', 
                            zIndex: '2', 
                            top: '20px', 
                            right: '20px', 
                            padding: '50px', 
                            borderRadius: '100%', 
                            backgroundColor: '#00000094'}}>
                                {Math.round(movie_detail.vote_average)* 10}
                        </Typography>
                        <Box>
                        {(movie_detail.genres) ? movie_detail.genres.map(gener =>(
                            <Chip key={gener.id} icon={<TagRoundedIcon />} label={gener.name} />
                        )) : console.log('no geners')}
                        </Box>
                    </Box>
                    }
                    
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default MovieDetails