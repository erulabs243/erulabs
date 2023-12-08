import { component$ } from "@builder.io/qwik";
import {
	InNavArrowUp,
	InArrowsUpFromLine,
	InLongArrowRightUp,
	InFastArrowRightBox,
	InLongArrowRightUp1,
} from "@qwikest/icons/iconoir";
import { IconoirArrowUpRight } from "../icons/ArrowRightUp";
import { LogosWordpressIcon } from "../icons/WordPress";
import { LogosKeystonejs } from "../icons/Keystone";
import { LogosStrapiIcon } from "../icons/Strapi";
import { LogosHtml5 } from "../icons/Html5";
import { LogosCss3 } from "../icons/Css3";
import { LogosJavascript } from "../icons/Javascript";
import { LogosTypescriptIcon } from "../icons/Typescript";
import { LogosPhp } from "../icons/Php";
import { LogosLaravel } from "../icons/Laravel";
import { LogosAstroIcon } from "../icons/Astro";
import { LogosQwikIcon } from "../icons/Qwik";
import { LogosSvelteIcon } from "../icons/Svelte";
import { LogosRemixIcon } from "../icons/Remix";
import { DeviconReact } from "../icons/React";
import { LogosAppwriteIcon } from "../icons/Appwrite";
import { LogosMysqlIcon } from "../icons/Mysql";
import { LogosPostgresql } from "../icons/Postgresql";
import IconGrid from "../particles/IconGrid";

export default component$(() => {
	return (
		<section class="min-h-screen flex items-center py-24 px-8 gap-24">
			<div class="container mx-auto">
				<div class="w-full mx-auto lg:w-1/2 mb-12">
					<h3 class="text-sm text-secondary uppercase">What we use</h3>
					<p class="text-xl lg:text-2xl">
						Just latest tach to ensure you've a great product
					</p>
				</div>

				{/* LANGUAGES */}
				<div class="flex flex-col gap-4 lg:gap-12 px-0 lg:px-24">
					<article>
						<div class="flex justify-between items-center px-4 lg:px-12 py-4">
							<p class="text-xl lg:text-3xl">Programing languages</p>
							<span class="text-xl lg:text-4xl">
								<IconoirArrowUpRight />
							</span>
						</div>
						<div class="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-12 my-4 lg:my-12">
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="HTML5"
								>
									<LogosHtml5 />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="CSS3"
								>
									<LogosCss3 />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="Javascript"
								>
									<LogosJavascript />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="Typescript"
								>
									<LogosTypescriptIcon />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="PHP"
								>
									<LogosPhp />
								</span>
							</IconGrid>
						</div>
					</article>
					{/* /END LANGUAGES */}

					{/* FRAMEWORKS */}
					<article>
						<div class="flex justify-between items-center px-4 lg:px-12 py-4">
							<p class="text-xl lg:text-3xl">Frameworks</p>
							<span class="text-xl lg:text-4xl">
								<IconoirArrowUpRight />
							</span>
						</div>
						<div class="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-12 my-4 lg:my-12">
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="Laravel"
								>
									<LogosLaravel />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="Astro"
								>
									<LogosAstroIcon />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="Qwik"
								>
									<LogosQwikIcon />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="Svelte"
								>
									<LogosSvelteIcon />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="React"
								>
									<DeviconReact />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="Remix"
								>
									<LogosRemixIcon />
								</span>
							</IconGrid>
						</div>
					</article>
					{/* /END FRAMEWORKS */}

					{/* CMS & BAAS */}
					<article>
						<div class="flex justify-between items-center px-4 lg:px-12 py-4">
							<p class="text-xl lg:text-3xl">CMS & Backend</p>
							<span class="text-xl lg:text-4xl">
								<IconoirArrowUpRight />
							</span>
						</div>
						<div class="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-12 my-6 lg:my-12">
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="WordPress"
								>
									<LogosWordpressIcon />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="KeystoneJS"
								>
									<LogosKeystonejs />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="Strapi"
								>
									<LogosStrapiIcon />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="Appwrite"
								>
									<LogosAppwriteIcon />
								</span>
							</IconGrid>
						</div>
					</article>
					{/* /END CMS & BAAS */}

					{/* DATABASE */}
					<article>
						<div class="flex justify-between items-center px-4 lg:px-12 py-4">
							<p class="text-xl lg:text-3xl">Databases</p>
							<span class="text-xl lg:text-4xl">
								<IconoirArrowUpRight />
							</span>
						</div>
						<div class="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-12 my-6 lg:my-12">
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="MySQL"
								>
									<LogosMysqlIcon />
								</span>
							</IconGrid>
							<IconGrid>
								<span
									class="text-4xl lg:text-7xl tooltip tooltip-bottom"
									data-tooltip="Postgresql"
								>
									<LogosPostgresql />
								</span>
							</IconGrid>
						</div>
					</article>
				</div>
				{/* /END DATABASES */}
			</div>
		</section>
	);
});
