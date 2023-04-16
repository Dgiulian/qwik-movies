import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="px-12">
      <p class="text-slate-400 text-sm">
        This is a sample project to learn QWIK framework. All original data is
        provided by{" "}
        <a class="underline" href="https://www.themoviedb.org/">
          TMDb
        </a>
      </p>
    </footer>
  );
});
