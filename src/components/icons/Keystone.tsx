import type { QwikIntrinsicElements } from "@builder.io/qwik";

export function LogosKeystonejs(
	props: QwikIntrinsicElements["svg"],
	key: string,
) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 256 256"
			{...props}
			key={key}
		>
			<title>KeystoneJS</title>
			<defs>
				<linearGradient
					id="logosKeystonejs0"
					x1="0%"
					x2="50%"
					y1="0%"
					y2="71.921%"
				>
					<stop offset="0%" stopColor="#5AE8FA" />
					<stop offset="100%" stopColor="#2684FF" />{" "}
				</linearGradient>
			</defs>
			<path
				fill="url(#logosKeystonejs0)"
				d="M59.669 0H196.33c20.748 0 28.273 2.16 35.858 6.217c7.585 4.057 13.537 10.01 17.594 17.594C253.84 31.397 256 38.921 256 59.67v136.66c0 20.748-2.16 28.272-6.217 35.858c-4.057 7.584-10.009 13.537-17.594 17.594c-7.585 4.056-15.11 6.217-35.858 6.217H59.67c-20.748 0-28.272-2.16-35.858-6.217c-7.584-4.057-13.537-10.01-17.594-17.594C2.161 224.603 0 217.079 0 196.33V59.67c0-20.75 2.16-28.273 6.217-35.86c4.057-7.584 10.01-13.537 17.594-17.594C31.397 2.161 38.921 0 59.67 0Zm13.687 66.048v132.934h29.23V156.16l16.757-16.943l40.029 59.765h36.677l-56.971-80.43l51.945-52.504H154.53l-51.945 55.11v-55.11h-29.23Z"
			/>
		</svg>
	);
}
