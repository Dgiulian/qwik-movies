import type { PropFunction } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type TrendingProps<Item> = {
  title: string;
  items: Item[];
  getItemTitle: PropFunction<(item: Item) => string>;
};
export const Trending = component$(
  <T extends { id: number; poster_path: string | null }>({
    title,
    items,
    getItemTitle,
  }: TrendingProps<T>) => {
    return (
      <div class="w-screen mt-12">
        <p class="text-2xl text-white pl-12">{title}</p>
        <div class="flex gap-4 py-4 overflow-x-scroll  backdrop:scroll-smooth">
          {items.map((movie) => (
            <div
              key={movie.id}
              class="flex-grow-1 basis-[250px] flex-shrink-0 rounded-md overflow-hidden"
            >
              <div class="border-4 border-slate-700 scroll-p-10">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={`${getItemTitle(movie)} poster`}
                    class="block w-full"
                  />
                ) : (
                  <div>No Image available</div>
                )}
              </div>
              <p class="text-slate-300 font-light py-1">
                {getItemTitle(movie)}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
