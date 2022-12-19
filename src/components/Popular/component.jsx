import { Box } from "@mui/system";
import { Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useMoviesData from "../../hooks/moviesData";
import { generateImageUrl, convertDate } from "../utils";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";

import theme from "../../theme/useThem";


const Popular = ({popular_type}) =>{
    const {data} = useMoviesData('popular'); 
    const [post_data, setPost] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        setPost(data.results);
    }, [data.results]);

    const handlerMovieDetails = (movieId) =>{
        console.log(movieId);
        navigate(`/movie/${movieId}`);
    }

    return(
        <> 
            <h2>Популярні фільми</h2>
            
           <ThemeProvider theme={theme}>
                <Box 
                    className='movies' 
                    backgroundColor={popular_type}
                    sx={{
                        display: 'flex', 
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        }}>
                        {(post_data !== undefined) ? post_data.map(post => (
                        <Box 
                            className="post"
                            key={post.id}
                            backgroundColor={theme.palette.primary.dark} 
                            onClick={() => {handlerMovieDetails(post.id)}}
                            sx={{
                                width: '180px', 
                                height: '352px', 
                                position: 'relative',
                                margin: '0 20px 20px',
                                color: 'aliceblue',
                                cursor: 'pointer'
                            }}>   
                            <img src={generateImageUrl(post.poster_path)} alt={post.original_title} />
                            <Box>
                                <Typography variant="h6" sx={{padding: '0 5px 0 5px', fontWeight: "bold"}}> {post.original_title}</Typography>
                                <Box
                                    color={theme.palette.primary.dark}
                                    backgroundColor={popular_type}
                                    sx={{
                                        position: 'absolute',
                                        bottom: '2px',
                                        left: '0',
                                        width: '100%',
                                        padding: '5px 0',
                                    }}
                                >{convertDate(post.release_date)}</Box>
                            </Box>
                           <Box 
                           className="vote"
                           backgroundColor= {theme.palette.primary.dark}
                           sx={{
                            position: 'absolute', 
                            top: '-10px', 
                            right: '-10px',
                            padding: '10px',
                            borderRadius: '50%',
                            }}>{Math.round(post.vote_average * 10)}</Box>
                        </Box>
                        )) : 
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
                        }
                </Box>
           </ThemeProvider>
        </>
    )
}

export default Popular;