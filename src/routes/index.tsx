import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import HomeHero from "~/components/sections/home.hero";
import HomeWhat from "~/components/sections/home.what";
import HomeUse from "~/components/sections/home.use";
import HomeWhy from "~/components/sections/home.why";
import HomeProjects from "~/components/sections/home.projects";

export default component$(() => {
	return (
		<section>
			<HomeHero />
			<HomeWhat />
			<HomeUse />
			<HomeWhy />
			<HomeProjects />
		</section>
	);
});

export const head: DocumentHead = {
	title: "Welcome to Qwik",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
