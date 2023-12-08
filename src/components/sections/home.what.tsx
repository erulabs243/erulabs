import { component$ } from "@builder.io/qwik";
import {
	InDevModeLaptop,
	InDevModePhone,
	InNetworkLeft,
} from "@qwikest/icons/iconoir";

export default component$(() => {
	return (
		<section class="min-h-screen flex flex-col items-center bg-cyan-800 justify-center gap-24 py-24 lg:py-24">
			<div class="container mx-auto px-8">
				<h2 class="w-full lg:w-1/2 text-sm text-secondary uppercase mx-auto">
					What we do
				</h2>
				<p class="w-full lg:w-1/2 mx-auto text-xl lg:text-2xl">
					We craft beautiful websites, cool dashboard panels, robuste APIs,
				</p>
			</div>
			<div class="container mx-auto grid grid-cols-1 lg:grid-cols-3 justify-center lg:items-center gap-12 px-12">
				<div class="flex flex-col justify-end gap-12 bg-blue-3 px-12 pb-12 pt-20 lg:pt-24 rounded-2xl h-full">
					<div class="text-6xl lg:text-7xl">
						<InDevModeLaptop />
					</div>
					<div>
						<p class="text-lg lg:text-xl">
							Beautiful websites and admin panels, blog, ecommerce
						</p>
						<h3 class="text-2xl lg:text-3xl text-secondary uppercase font-bold mt-4">
							Web design
						</h3>
					</div>
				</div>
				<div class="flex flex-col justify-end gap-12 bg-blue-3 px-12 pb-12 pt-20 lg:pt-48 rounded-2xl h-full">
					<div class="text-6xl lg:text-7xl">
						<InNetworkLeft />
					</div>
					<div>
						<p class="text-lg lg:text-xl">
							Robust and powerful APIs, REST and GraphQL
						</p>
						<h3 class="text-2xl lg:text-3xl text-secondary uppercase font-bold mt-4">
							API design
						</h3>
					</div>
				</div>
				<div class="flex flex-col justify-end gap-12 bg-blue-3 px-12 pb-12 pt-24 lg:pt-48 rounded-2xl h-full">
					<div class="text-6xl lg:text-7xl">
						<InDevModePhone />
					</div>
					<div>
						<p class="text-lg lg:text-xl">Performant mobile apps</p>
						<h3 class="text-2xl lg:text-3xl text-secondary uppercase font-bold mt-4">
							Mobile apps
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
});
