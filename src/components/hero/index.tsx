import { component$ } from "@builder.io/qwik";
import { useHeroMovie } from "~/routes";
import { getReleaseYear } from "~/utils";

export const Hero = component$(() => {
  const movie = useHeroMovie();

  return (
    <section class="h-[500px] bg-black grid grid-cols-2 relative">
      <div
        class={`absolute 
      right-0 h-full
       w-[70%]
        after:bg-gradient-to-r 
        after:from-black
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
          src={`https://image.tmdb.org/t/p/w780/${movie.value.backdrop_path}`}
          alt={`${movie.value.title} hero poster`}
          class="w-full h-full object-cover"
        />
      </div>
      <div class="h-full flex flex-col items-start justify-center z-10 pl-12">
        <p class="text-white text-4xl">{movie.value.title}</p>
        <p class="text-slate-300 font-light py-6">
          <span>{movie.value.vote_count} Reviews </span>
          <span class="mx-4">{getReleaseYear(movie.value.release_date)} </span>
          <span>{movie.value.runtime} </span>
        </p>
        <p class="text-white max-w-xl">{movie.value.overview}</p>
      </div>
    </section>
  );
});
