import axios from "axios";

const URL = "https://api.unsplash.com/";

axios.defaults.baseURL = URL;

const AUTH_TOKEN = 'Client-ID vKnf1xFSrdKwql3iEOrRBVXyEIy0vSGyRX1AUDuOYtA';

axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export async function getPictures(searchWord, page) {
    try {
        const response = await axios.get(`search/photos?page=${page}&query=${searchWord}`);

        return response.data.results;
    } catch (error) {

        console.log(error);
    }
}