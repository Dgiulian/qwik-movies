import {
  DiscoverMoviesSchema,
  DiscoverShowsSchema,
  MovieSchema,
} from "~/types";

/*
Wrapper class for the TMDB Api
*/
export class TmdbV3 {
  private API_KEY = "";
  private BASE_URL = "https://api.themoviedb.org/3";

  constructor(API_KEY: string) {
    if (!API_KEY) {
      throw new Error("API KEY must be defined");
    }
    this.API_KEY = API_KEY;
  }

  async discoverMovies() {
    const res = await fetch(
      `${this.BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${this.API_KEY}`
    );
    return DiscoverMoviesSchema.parse(await res.json());
  }
  async discoverShows() {
    console.log(
      `${this.BASE_URL}/discover/tv?sort_by=popularity.desc&api_key=${this.API_KEY}`
    );
    const res = await fetch(
      `${this.BASE_URL}/discover/tv?sort_by=popularity.desc&api_key=${this.API_KEY}`
    );
    const shows = await res.json();
    console.log(shows);
    return DiscoverShowsSchema.parse(shows);
  }
  async getMovie(movie_id: number) {
    const res = await fetch(
      `${this.BASE_URL}/movie/${movie_id}?api_key=${this.API_KEY}`
    );
    return MovieSchema.parse(await res.json());
  }
}

const tmdb = new TmdbV3(import.meta.env.VITE_TMDB_API_KEY);

export default tmdb;
