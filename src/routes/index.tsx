import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import HomeHero from "~/components/sections/home.hero";

export default component$(() => {
	return (
		<section class="mt-24">
			<HomeHero />
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
