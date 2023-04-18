import { Resource, component$, useResource$ } from "@builder.io/qwik";
import { getReleaseYear } from "~/utils";
import { RatingStars } from "../rating-stars";
import tmdb from "~/services/tmdb";
// import { useLocation } from "@builder.io/qwik-city";

type HeroProps = {
  movieId: number;
};

export const Hero = component$(({ movieId }: HeroProps) => {
  // const { params} = useLocation();
  const movieResource = useResource$(async () => {
    const m = await tmdb.getMovie(movieId);
    return m;
  });

  console.log(movieId);

  return (
    <Resource
      value={movieResource}
      onResolved={(movie) => (
        <section class="h-[700px] bg-black grid grid-cols-2 relative">
          <div
            class={`absolute 
        right-0 
        h-full
        w-[70%]
        after:from-black
        after:bg-gradient-to-r 
        after:to-transparent 
        after:h-full
        after:w-full
        after:top-0         
        after:right-0         
        after:z-2 
        after:absolute 
        after:block 
         `}
          >
            <img
              src={`https://image.tmdb.org/t/p/w780/${movie.backdrop_path}`}
              alt={`${movie.title} hero poster`}
              class="w-full h-full object-cover"
            />
          </div>
          <div class="h-full flex flex-col items-start justify-center z-10 pl-12">
            <p class="text-white text-4xl">{movie.title}</p>
            <div class="text-slate-300 font-light py-6 flex">
              <div class="w-[100px] mr-4 flex items-center justify-center">
                <RatingStars value={40} />
              </div>
              <span>{movie.vote_count} Reviews </span>
              <span class="mx-4">{getReleaseYear(movie.release_date)} </span>
              <span>{movie.runtime} </span>
            </div>
            <p class="text-white max-w-xl">{movie.overview}</p>
          </div>
        </section>
      )}
    />
  );
});
