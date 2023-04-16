import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="bg-gray-900 min-h-screen w-full py-12">
      <main>
        {/* <Header /> */}
        <Slot />
      </main>
      <div class="py-6">{<Footer />}</div>
    </div>
  );
});
