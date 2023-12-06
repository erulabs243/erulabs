import { component$ } from "@builder.io/qwik";
import { InMessageText } from "@qwikest/icons/iconoir";
import { IconoirArrowUpRight } from "../icons/ArrowRightUp";

export default component$(() => {
	return (
		<section class="min-h-screen py-24 lg:py-48">
			<div class="container mx-auto flex">
				<div class="w-1/3 p-8">
					<h3 class="text-3xl">Why you should work with us</h3>
					<a href="/" class="btn btn-solid btn-lg mt-8">
						Get in touch
						<span class="pl-2 pt-1">
							<IconoirArrowUpRight />
						</span>
					</a>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 w-2/3 gap-8">
					<article class="flex flex-col gap-4 p-8 rounded-2xl">
						<div class="text-4xl p-2 rounded-2xl bg-gray-50 self-start">
							<InMessageText />
						</div>
						<h4 class="text-3xl">Get in touch</h4>
						<p class="text-lg">Fill out the form</p>
					</article>
					<article class="flex flex-col gap-4 p-8 rounded-2xl">
						<div class="text-4xl p-2 rounded-2xl bg-gray-50 self-start">
							<InMessageText />
						</div>
						<h4 class="text-3xl">Get in touch</h4>
						<p class="text-lg">Fill out the form</p>
					</article>
					<article class="flex flex-col gap-4 p-8 rounded-2xl">
						<div class="text-4xl p-2 rounded-2xl bg-gray-50 self-start">
							<InMessageText />
						</div>
						<h4 class="text-3xl">Get in touch</h4>
						<p class="text-lg">Fill out the form</p>
					</article>
					<article class="flex flex-col gap-4 p-8 rounded-2xl">
						<div class="text-4xl p-2 rounded-2xl bg-gray-50 self-start">
							<InMessageText />
						</div>
						<h4 class="text-3xl">Get in touch</h4>
						<p class="text-lg">Fill out the form</p>
					</article>
				</div>
			</div>
		</section>
	);
});
