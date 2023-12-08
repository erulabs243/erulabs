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
	title: "Your missing web agency | EruLabs",
	meta: [
		{
			name: "description",
			content:
				"At EruLabs, we craft beautiful and performant websites and APIs using latest technologies",
		},
	],
};
