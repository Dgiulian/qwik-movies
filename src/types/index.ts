import { z } from "@builder.io/qwik-city";

export const MovieSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()).optional(),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().or(z.null()),
  release_date: z.string(),
  runtime: z.number().optional(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const ShowSchema = z.object({
  backdrop_path: z.string().or(z.null()),
  first_air_date: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  name: z.string(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().or(z.null()),
  vote_average: z.number(),
  vote_count: z.number(),
});

const tmdbResponse = z.object({
  page: z.number(),
  total_pages: z.number(),
  total_results: z.number(),
});

export const DiscoverMoviesSchema = tmdbResponse.extend({
  results: z.array(MovieSchema),
});

export const DiscoverShowsSchema = tmdbResponse.extend({
  page: z.number(),
  total_pages: z.number(),
  total_results: z.number(),
  results: z.array(ShowSchema),
});

export type ArrayItem<T> = T extends Array<infer U> ? U : T;
