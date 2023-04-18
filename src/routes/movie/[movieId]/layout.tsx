import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Hero } from "~/components/hero";
import tmdb from "~/services/tmdb";

export const useMovie = routeLoader$(async ({ params }) => {
  const movie = await tmdb.getMovie(+params.movieId);
  return movie;
});

export default component$(() => {
  const movie = useMovie();
  const { url } = useLocation();

  const isActive = (path: string) => {
    console.log(url.pathname, `/movie/${movie.value.id}/${path}`);

    return url.pathname === `/movie/${movie.value.id}/${path}`;
  };

  return (
    <div class="pb-10 relative overflow-y-auto ">
      <Hero movieId={movie.value.id} />

      <div class="mt-6 mb-10">
        <ul class="flex gap-32 text-center justify-center">
          <li>
            <Link
              href={`/movie/${movie.value.id}/`}
              class={`text-white text-2xl uppercase pb-2 ${
                isActive("") ? "border-b-2" : ""
              }`}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href={`/movie/${movie.value.id}/videos`}
              class={`text-white text-2xl uppercase pb-2 ${
                isActive("videos/") ? "border-b-2" : ""
              }`}
            >
              Videos
            </Link>
          </li>
          <li>
            <Link
              href={`/movie/${movie.value.id}/photos`}
              class={`text-white text-2xl uppercase pb-2 ${
                isActive("photos/") ? "border-b-2" : ""
              }`}
            >
              Photos
            </Link>
          </li>
        </ul>
      </div>
      <Slot />
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
