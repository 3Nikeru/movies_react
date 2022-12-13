import { useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import useMoviesSearch from "../../hooks/moviesSearch";
import { Box, Container } from "@mui/system";
import { Skeleton, Typography } from "@mui/material";
import theme from "../../theme/useThem";
import Header from "../../components/Header";
import { generateImageUrl, convertDate } from "../../components/utils";
import Popular from "../../components/Popular";
import HomeLink from "../../components/HomeLink";

const SearchResults = () =>{
    let params = useParams();
    const found = useMoviesSearch(params.searchId);
    console.log(found.data.results);
    const found_post = found.data.results;
    const navigate = useNavigate();
    const handlerMovieDetails = (movieId) =>{
        console.log(movieId);
        navigate(`/movie/${movieId}`);
    }

    return(
        <ThemeProvider theme={theme}>
            <Box className="main" backgroundColor={theme.palette.secondary.main}>
                <Header color_type={theme.palette.secondary.main} search_theme={theme.palette.secondary.main}/>
                <h2>Результати пошуку</h2>
               
                <HomeLink/>
                <Container maxWidth='xl'>
                <Box 
                    className='movies' 
                    sx={{
                        display: 'flex', 
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        marginTop: '30px'
                        }}>
                        {(() => {
                            if(found_post === undefined){
                                return(
                                    <Box sx={{ 
                                        width: '100%', 
                                        display: 'flex',
                                        justifyContent: 'space-evenly',
                                        height: '100vh'
                                        }}>
                                        <Box>
                                            <Skeleton variant="rounded" animation="wave" width={180} height={250} sx={{marginBottom: '15px'}}/>
                                            <Skeleton variant="rounded" animation="wave" width={180} height={30} />
                                        </Box>
                                        <Box>
                                            <Skeleton variant="rounded" animation="wave" width={180} height={250} sx={{marginBottom: '15px'}}/>
                                            <Skeleton variant="rounded" animation="wave" width={180} height={30} />
                                        </Box>
                                        <Box>
                                            <Skeleton variant="rounded" animation="wave" width={180} height={250} sx={{marginBottom: '15px'}}/>
                                            <Skeleton variant="rounded" animation="wave" width={180} height={30} />
                                        </Box>
                                        <Box>
                                            <Skeleton variant="rounded" animation="wave" width={180} height={250} sx={{marginBottom: '15px'}}/>
                                            <Skeleton variant="rounded" animation="wave" width={180} height={30} />
                                        </Box>
                                        <Box>
                                            <Skeleton variant="rounded" animation="wave" width={180} height={250} sx={{marginBottom: '15px'}}/>
                                            <Skeleton variant="rounded" animation="wave" width={180} height={30} />
                                        </Box>
                                    </Box>
                                )
                            } else if (found_post.length === 0){
                                return (
                                    <Typography variant="h3">Ми не знайшли жодного фільму, спробуйте пошукати по іншим словам</Typography>
                                )
                            } else {
                                return (
                                    found_post.map(post => (
                                    <Box 
                                        className="post"
                                        key={post.id} 
                                        onClick={() => {handlerMovieDetails(post.id)}}
                                        backgroundColor={theme.palette.primary.dark}
                                        sx={{
                                            width: '180px', 
                                            height: '352px', 
                                            position: 'relative',
                                            margin: '0 20px 20px',
                                            cursor: 'pointer'
                                        }}>   
                                        <img src={generateImageUrl(post.poster_path)} alt={post.original_title} />
                                        <Typography variant="h6" sx={{padding: '0 5px 0 5px', fontWeight: "bold"}} color="aliceblue"> {post.original_title}</Typography>
                                        <Box
                                            backgroundColor={theme.palette.secondary.main}
                                            sx={{
                                                position: 'absolute',
                                                bottom: '2px',
                                                left: '0',
                                                width: '100%',
                                                padding: '5px 0',
                                            }}
                                        >{convertDate(post.release_date)}</Box>
                                        <Box 
                                        className="vote"
                                        backgroundColor= {theme.palette.secondary.dark}
                                        sx={{
                                        position: 'absolute', 
                                        top: '-10px', 
                                        right: '-10px',
                                        padding: '10px',
                                        borderRadius: '50%',
                                        color: 'aliceblue'
                                        }}>{Math.round(post.vote_average * 10)}</Box>
                                    </Box>
                                    ))
                                    )
                                }
                            })()}
                </Box>
                <Popular popular_type={theme.palette.secondary.main}/>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default SearchResults;

