import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="page">
      <main>
        {/* <Header /> */}
        <Slot />
      </main>
      <div class="section dark">
        <div class="container">{/* <Footer /> */}</div>
      </div>
    </div>
  );
});
