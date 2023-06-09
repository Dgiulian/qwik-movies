import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/footer";
import { Sidebar } from "~/components/sidebar";

export default component$(() => {
  return (
    <div class="bg-gray-900 h-screen w-full grid grid-cols-[100px_auto]">
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
