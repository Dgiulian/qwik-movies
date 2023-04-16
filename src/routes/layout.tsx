import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer";
import { Sidebar } from "~/components/sidebar";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="bg-gray-900 h-screen w-full grid grid-cols-[1fr_auto]">
      <Sidebar />

      <div class="overflow-y-scroll h-full ">
        <main class="relative">
          {/* <Header /> */}
          <Slot />
        </main>
        <div class="py-6">{<Footer />}</div>
      </div>
    </div>
  );
});
