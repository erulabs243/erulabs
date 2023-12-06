import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<section class="min-h-screen flex items-center">
			<div class="container mx-auto py-24 flex flex-col gap-8 justify-center">
				<h1 class="text-center text-7xl font-bold w-full lg:w-1/2 mx-auto">
					We are the missing piece of your puzzle
				</h1>
				<p class="text-3xl text-center w-full lg:w-1/2 mx-auto">
					We craft digital products that reflect your brand, engage your
					audience and achieve your business goals.
				</p>
				<a href="/" class="btn btn-solid btn-lg self-center mt-4">
					Contact us today
				</a>
			</div>
		</section>
	);
});
