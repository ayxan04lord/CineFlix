import axios from "axios";
import { BASE_URL,  API_KEY} from "../config";

export class TVShowAPI{
    static async fetchMovies(){
        const response = await axios.get(`${BASE_URL}movie/popular${API_KEY}`)
        return response.data.results;
    }

}