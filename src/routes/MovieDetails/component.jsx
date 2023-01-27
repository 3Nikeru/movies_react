import { useParams } from "react-router-dom"
import { Box, Chip, Skeleton, Typography } from "@mui/material"
import Carousel from "react-elastic-carousel"
import Iframe from "react-iframe"
import { ThemeProvider } from "styled-components"
import Header from "../../components/Header"
import HomeLink from "../../components/HomeLink"
import { convertDate, generateImageUrl, generateVideoUrl } from "../../components/utils"
import TagRoundedIcon from '@mui/icons-material/TagRounded'
import { selectDetails, selectVideo, selectActor } from "../../store/movie/selector"
import { setDetails, setActor, setVideo } from "../../store/movie/actions"

import theme from "../../theme/useThem"
import useMoviesData from "../../hooks/moviesData"
import useMoviesVideo from "../../hooks/moviesVideo"
import useMovieActors from "../../hooks/movieActors"
import { connect } from "react-redux"
import { useState } from "react"
import { useEffect } from "react"


const MovieDetails = ({details, setDetails, video, setVideo, actor, setActor}) =>{
    let params = useParams();

    const [trailer, setTrailer] = useState([]);

    useMoviesData(params.movieId, setDetails);
    useMovieActors(params.movieId, setActor);
    useMoviesVideo(params.movieId, setVideo);

    const translations = useMoviesData(`${params.movieId}/translations`)
    const translation = translations.data.translations;
    const translation_data = translation;

    useEffect(()=>{
        if(video !== undefined){
           const filtered = video.filter(trailer => trailer.type === "Trailer");
           setTrailer(filtered)
        }
    }, [video])   
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ];

    return(
        <ThemeProvider theme={theme}>
            <Box className="main" backgroundColor={theme.palette.detail.main} fontFamily={theme.typography.fontFamily}>
                <Header color_type={theme.palette.detail.main} search_theme={theme.palette.detail.main}/>
                <HomeLink link_type={theme.palette.detail.main}/>
                <Box> 
                    {(details.length === 0 ) ?
                    <Box height="100vh">
                        <Skeleton variant="rectangular" width="100%" height={200} />
                    </Box>
                    :
                    <Box sx={{position: 'relative'}}>
                        {(trailer === undefined || trailer.length === 0) 
                        ? 
                        <Typography 
                            variant="h4" 
                            fontFamily={theme.typography.fontFamily} 
                            sx={{padding: '20px'}}>Нажаль, до цього фільму ми не знайшли трейлера</Typography>
                        :
                        <Box className="trailler_container">
                            <Iframe className="trailler" url={generateVideoUrl(trailer[0].key)} id={trailer[0].id}/>
                        </Box> 
                        } 
                        <Typography 
                            variant="h2" 
                            fontFamily={theme.typography.fontFamily} 
                            sx={{
                                bottom: '115px',
                                width: '100%'
                                }}>
                                {details.original_title}
                        </Typography>
                        <Typography
                        variant="h6"
                        fontFamily={theme.typography.fontFamily} 
                        sx={{
                            marginBottom: '10px',
                            width: '100%'}}>
                                {convertDate(details.release_date)}
                        </Typography>
                        {(translation_data !== undefined) ? translation_data.filter(code => code.iso_3166_1.includes('UA')).map(filteredCode => ( 
                        <Typography 
                        key={filteredCode.data.overview.length}
                        paragraph={true} 
                        fontFamily={theme.typography.fontFamily}
                        sx={{zIndex: '2', 
                        backgroundColor: '#00000094', 
                        color: 'aliceblue', 
                        padding: '15px',
                        margin: 0, 
                        textAlign: 'justify',
                        width: '100%'}}>{filteredCode.data.overview}</Typography>
                        )) : <Skeleton variant="rectangular" width="100%" height={100}/> }
                        <Typography
                        className="detail_vote"
                        variant="h3"
                        fontFamily={theme.typography.fontFamily} 
                        sx={{
                            position: 'absolute', 
                            color: 'aliceblue', 
                            zIndex: '2', 
                            top: '80px', 
                            right: '20px', 
                            padding: '50px', 
                            borderRadius: '100%', 
                            backgroundColor: '#00000094'}}>
                                {Math.round(details.vote_average)* 10}
                        </Typography>
                        <Box className="card_container">
                            <Carousel className="carousel" breakPoints={breakPoints} pagination={false}>
                                {(actor !== undefined && actor.length !== 0 ) ? actor.map(cast => (
                                    <Box className="actor_card" key={cast.cast_id}>
                                        {
                                        (cast.profile_path === null) ? <Box display="none"></Box>
                                        : <img src={generateImageUrl(cast.profile_path)} alt={cast.name} /> 
                                        }
                                       <Box>
                                            <Typography color={theme.palette.detail.main}>Actor:</Typography>
                                            <Typography>{cast.name}</Typography>
                                            <Typography color={theme.palette.detail.main}>Character:</Typography>
                                            <Typography>{cast.character}</Typography>
                                       </Box>
                                    </Box>
                                )) : <Skeleton variant="rectangular" width="100%" height={200} /> }
                            </Carousel>
                        </Box>
                        <Box sx={{padding: '20px 0'}}>
                        {(details.genres) ? details.genres.map(gener =>(
                            <Chip key={gener.id} icon={<TagRoundedIcon />} sx={{margin: "10px 5px 0 5px"}} label={gener.name} />
                        )) : console.log('loading')}
                        </Box>
                    </Box>
                    }
                    
                </Box>
            </Box>
        </ThemeProvider>
    )
}
const mapStateToProps = state => ({
    details: selectDetails(state),
    video: selectVideo(state),
    actor: selectActor(state),
});

const mapDispatchToProps = {
    setDetails,
    setVideo,
    setActor,
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)