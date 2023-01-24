import {API_KEY, API_URL, IMG_URL, API_SEARCH_URL, VIDEO_URL} from './constants';

export const generateApiUrls = path => `${API_URL}${path}?api_key=${API_KEY}`;
export const generateImageUrl = path => `${IMG_URL}${path}`;
export const generateVideoApi = path =>  `${API_URL}${path}/videos?api_key=${API_KEY}&language=en-US`;
export const generateVideoUrl = path => `${VIDEO_URL}${path}`;
export const generateActors = path => `${API_URL}${path}/credits?api_key=${API_KEY}`;
export const convertDate = date => new Date(date).toDateString();
export const generateSearchUrl = path => `${API_SEARCH_URL}${API_KEY}&query=${path}`;

//https://www.themoviedb.org/video/play?key=q4abeQdcto4