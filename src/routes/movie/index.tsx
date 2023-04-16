import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MovieIcon } from "~/components/icons";

export default component$(() => {
  return <MovieIcon />;
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
