import { Slot, component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import {
  HomeIcon,
  MovieIcon,
  QwikLogo,
  SearchIcon,
  ShowIcon,
} from "~/components/icons";

type SidebarLinkProps = {
  href: string;
  isActive: boolean;
};
export const SidebarLink = component$<SidebarLinkProps>(
  ({ href, isActive }: SidebarLinkProps) => (
    <Link
      href={href}
      class={`flex align-center flex-col p-8 ${
        isActive ? "text-blue-500" : "text-white"
      }`}
    >
      <span class="inline-block h-6 w-6">
        <Slot />
      </span>
    </Link>
  )
);

export const Sidebar = component$(() => {
  const { url } = useLocation();
  return (
    <nav class="flex flex-col text-white bg-black border-r border-slate-300 min-h-screen w-[100px]">
      <div class="h-[75px] flex items-center justify-center ">
        <QwikLogo />
      </div>

      <SidebarLink href="/" isActive={url.pathname === "/"}>
        <HomeIcon />
      </SidebarLink>
      <SidebarLink href="/movie" isActive={url.pathname === "/movie/"}>
        <MovieIcon />
      </SidebarLink>
      <SidebarLink href="/shows" isActive={url.pathname === "/shows/"}>
        <ShowIcon />
      </SidebarLink>
      <SidebarLink href="/search" isActive={url.pathname === "/search/"}>
        <SearchIcon />
      </SidebarLink>
    </nav>
  );
});
