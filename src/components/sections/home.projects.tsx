import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<section class="min-h-screen py-24 lg:py-48">
			<div class="container mx-auto">
				<div class="w-1/2 p-8 mx-auto mb-24">
					<h3 class="text-center">One more reason ?</h3>
					<p class="text-center">Check some of our successful work</p>
				</div>
				<div class="flex flex-col gap-24 justify-center">
					<article class="flex items-center w-2/3 mx-auto">
						<img
							src="https://images.unsplash.com/photo-1695653420354-f2f61974f6b8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							class="w-96 h-96 object-cover rounded-2xl"
						/>
						<div class="p-12 flex gap-4 flex-col">
							<h4 class="text-3xl">Project title</h4>
							<p class="text-lg">
								Une petite description pour ce projet ou une explication de ce
								qui a ete fait
							</p>
							<footer class="flex gap-4">
								<a href="/" class="btn btn-solid">
									Read the story
								</a>
								<a href="/" target="_blank" class="btn btn-outline">
									View the site
								</a>
							</footer>
						</div>
					</article>
					<article class="flex items-center w-2/3 mx-auto">
						<img
							src="https://images.unsplash.com/photo-1695653420354-f2f61974f6b8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							class="w-96 h-96 object-cover rounded-2xl"
						/>
						<div class="p-12 flex gap-4 flex-col">
							<h4 class="text-3xl">Project title</h4>
							<p class="text-lg">
								Une petite description pour ce projet ou une explication de ce
								qui a ete fait
							</p>
							<footer class="flex gap-4">
								<a href="/" class="btn btn-solid">
									Read the story
								</a>
								<a href="/" target="_blank" class="btn btn-outline">
									View the site
								</a>
							</footer>
						</div>
					</article>
					<article class="flex items-center w-2/3 mx-auto">
						<img
							src="https://images.unsplash.com/photo-1695653420354-f2f61974f6b8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							class="w-96 h-96 object-cover rounded-2xl"
						/>
						<div class="p-12 flex gap-4 flex-col">
							<h4 class="text-3xl">Project title</h4>
							<p class="text-lg">
								Une petite description pour ce projet ou une explication de ce
								qui a ete fait
							</p>
							<footer class="flex gap-4">
								<a href="/" class="btn btn-solid">
									Read the story
								</a>
								<a href="/" target="_blank" class="btn btn-outline">
									View the site
								</a>
							</footer>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
});
