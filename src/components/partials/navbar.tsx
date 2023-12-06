import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<header class="navbar navbar-floating navbar-glass navbar-sticky">
			<div class="navbar-start">
				<a class="navbar-item" href="/">
					EruLabs
				</a>
			</div>
			<div class="navbar-end">
				<a class="navbar-item" href="#">
					Get in touch
				</a>
			</div>
		</header>
	);
});
