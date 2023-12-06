import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function IconoirArrowUpRight(
	props: QwikIntrinsicElements["svg"],
	key: string,
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			{...props}
			key={key}
		>
			<path
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="1.5"
				d="M6 19L19 6m0 0v12.48M19 6H6.52"
			>
				<title>IconoirArrowUpRight</title>
			</path>
		</svg>
	);
}
