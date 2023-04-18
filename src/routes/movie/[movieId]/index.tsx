import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Hero } from "~/components/hero";
import tmdb from "~/services/tmdb";

export const useMovie = routeLoader$(async ({ params }) => {
  const movie = await tmdb.getMovie(+params.movieId);
  return movie;
});
export default component$(() => {
  const movie = useMovie();
  console.log(movie.value);

  return (
    <div class="pb-10 relative overflow-y-auto ">
      <Hero movieId={movie.value.id} />
      {movie.value.title}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Movie",
  meta: [
    {
      name: "description",
      content: "Qwik Movies",
    },
  ],
};
