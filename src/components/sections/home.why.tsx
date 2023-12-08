import { component$ } from "@builder.io/qwik";
import { InMessageText } from "@qwikest/icons/iconoir";
import { IconoirArrowUpRight } from "../icons/ArrowRightUp";

export default component$(() => {
	return (
		<section class="min-h-screen py-24 lg:py-48">
			<div class="container mx-auto flex flex-col lg:flex-row">
				<div class="w-full lg:w-1/3 p-8">
					<h3 class="text-xl lg:text-2xl">Why you should work with us</h3>
					<a href="/" class="btn btn-solid-primary btn-lg mt-8">
						Get in touch
						<span class="pl-2 pt-1">
							<IconoirArrowUpRight />
						</span>
					</a>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 w-full lg:w-2/3 gap-8 p-8">
					<article class="flex flex-col gap-8 p-8 rounded-2xl hover:bg-blue-3">
						<div class="text-4xl">
							<InMessageText />
						</div>
						<div>
							<h4 class="text-2xl lg:text-3xl text-secondary">Get in touch</h4>
							<p class="lg:text-lg">Fill out the form</p>
						</div>
					</article>
					<article class="flex flex-col gap-8 p-8 rounded-2xl hover:bg-blue-3">
						<div class="text-4xl">
							<InMessageText />
						</div>
						<div>
							<h4 class="text-2xl lg:text-3xl text-secondary">Get in touch</h4>
							<p class="lg:text-lg">Fill out the form</p>
						</div>
					</article>
					<article class="flex flex-col gap-8 p-8 rounded-2xl hover:bg-blue-3">
						<div class="text-4xl">
							<InMessageText />
						</div>
						<div>
							<h4 class="text-2xl lg:text-3xl text-secondary">Get in touch</h4>
							<p class="lg:text-lg">Fill out the form</p>
						</div>
					</article>
					<article class="flex flex-col gap-8 p-8 rounded-2xl hover:bg-blue-3">
						<div class="text-4xl">
							<InMessageText />
						</div>
						<div>
							<h4 class="text-2xl lg:text-3xl text-secondary">Get in touch</h4>
							<p class="lg:text-lg">Fill out the form</p>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
});
