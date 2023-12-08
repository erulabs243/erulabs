import { Slot, component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<div class="bg-gray-50 text-center flex justify-center rounded-lg lg:rounded-2xl p-2 lg:p-4">
			<Slot />
		</div>
	);
});
