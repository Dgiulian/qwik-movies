import { $, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Hero } from "~/components/hero";
import { Trending } from "~/components/trending";
import tmdb from "~/services/tmdb";
import type { ArrayItem } from "~/types";
import { getRandomMovie } from "~/utils";

export const useTrendingMovies = routeLoader$(async () => {
  const movies = await tmdb.discoverMovies();

  return movies;
});
export const useTrendingShows = routeLoader$(async () => {
  const shows = await tmdb.discoverShows();

  return shows;
});

export default component$(() => {
  const trendingMovies = useTrendingMovies();
  const trendingShows = useTrendingShows();
  const movies = trendingMovies.value.results;
  const shows = trendingShows.value.results;
  return (
    <div class="pb-10 relative overflow-y-auto ">
      <Hero movieId={getRandomMovie(movies.map((movie) => movie.id))} />

      <Trending
        title="Trending Movies"
        items={movies}
        getItemTitle={$((movie: ArrayItem<typeof movies>) => movie.title)}
      />

      <Trending
        title="Trending Tv Shows"
        items={shows}
        getItemTitle={$((show: ArrayItem<typeof shows>) => show.name)}
      />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Movies",
  meta: [
    {
      name: "description",
      content: "Qwik Movies",
    },
  ],
};
