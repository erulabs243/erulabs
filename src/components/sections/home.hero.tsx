import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<section class="min-h-screen flex items-center px-8">
			<div class="container mx-auto py-24 flex flex-col gap-8 justify-center">
				<h1 class="text-left text-4xl lg:text-7xl font-bold w-full lg:w-1/2 mx-auto">
					We are the <span class="text-secondary">missing piece</span> of your
					<span class="text-secondary"> puzzle</span>
				</h1>
				<p class="text-xl lg:text-3xl text-left w-full lg:w-1/2 mx-auto">
					We craft digital products that reflect your brand, engage your
					audience and achieve your business goals.
				</p>
				<a href="/" class="btn btn-solid-primary btn-lg self-start mt-4">
					Contact us today
				</a>
			</div>
		</section>
	);
});
