import {API_KEY, API_URL, IMG_URL, API_SEARCH_URL} from './constants';

export const generateApiUrls = path => `${API_URL}${path}?api_key=${API_KEY}`;
export const generateImageUrl = path => `${IMG_URL}${path}`;
export const convertDate = date => new Date(date).toDateString();
export const generateSearchUrl = path => `${API_SEARCH_URL}${API_KEY}&query=${path}`;