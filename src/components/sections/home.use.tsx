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

export default component$(() => {
	return (
		<section class="min-h-screen flex items-center py-24 lg:py-48">
			<div class="container mx-auto">
				<div class="w-full mx-auto lg:w-1/2">
					<h3 class="text-center text-4xl">What we use</h3>
					<p class="text-center text-2xl mt-4">
						Just latest tach to ensure you've a great product
					</p>
				</div>

				{/* LANGUAGES */}
				<div class="flex flex-col gap-12 px-24">
					<article class="py-8">
						<div class="flex justify-between px-12 py-4">
							<p class="text-3xl">Programing languages</p>
							<span class="text-4xl">
								<IconoirArrowUpRight />
							</span>
						</div>
						<div class="flex flex-wrap justify-center items-center gap-12 my-12">
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="HTML5"
							>
								<LogosHtml5 />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="CSS3"
							>
								<LogosCss3 />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="Javascript"
							>
								<LogosJavascript />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="Typescript"
							>
								<LogosTypescriptIcon />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="PHP"
							>
								<LogosPhp />
							</span>
						</div>
					</article>
				</div>
				{/* /END LANGUAGES */}

				{/* FRAMEWORKS */}
				<div class="flex flex-col gap-12 px-24">
					<article class="py-8">
						<div class="flex justify-between px-12 py-4">
							<p class="text-3xl">Frameworks</p>
							<span class="text-4xl">
								<IconoirArrowUpRight />
							</span>
						</div>
						<div class="flex flex-wrap justify-center items-center gap-12 my-12">
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="Laravel"
							>
								<LogosLaravel />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="Astro"
							>
								<LogosAstroIcon />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="Qwik"
							>
								<LogosQwikIcon />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="Svelte"
							>
								<LogosSvelteIcon />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="React"
							>
								<DeviconReact />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="Remix"
							>
								<LogosRemixIcon />
							</span>
						</div>
					</article>
				</div>
				{/* /END FRAMEWORKS */}

				{/* CMS & BAAS */}
				<div class="flex flex-col gap-12 px-24">
					<article class="py-8">
						<div class="flex justify-between px-12 py-4">
							<p class="text-3xl">CMS & Backend</p>
							<span class="text-4xl">
								<IconoirArrowUpRight />
							</span>
						</div>
						<div class="flex flex-wrap justify-center items-center gap-12 my-12">
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="WordPress"
							>
								<LogosWordpressIcon />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="KeystoneJS"
							>
								<LogosKeystonejs />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="Strapi"
							>
								<LogosStrapiIcon />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="Appwrite"
							>
								<LogosAppwriteIcon />
							</span>
						</div>
					</article>
				</div>
				{/* /END CMS & BAAS */}

				{/* DATABASE */}
				<div class="flex flex-col gap-12 px-24">
					<article class="py-8">
						<div class="flex justify-between px-12 py-4">
							<p class="text-3xl">Databases</p>
							<span class="text-4xl">
								<IconoirArrowUpRight />
							</span>
						</div>
						<div class="flex flex-wrap justify-center items-center gap-12 my-12">
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="MySQL"
							>
								<LogosMysqlIcon />
							</span>
							<span
								class="text-9xl bg-gray-50 p-4 rounded-2xl tooltip tooltip-bottom"
								data-tooltip="Postgresql"
							>
								<LogosPostgresql />
							</span>
						</div>
					</article>
				</div>
				{/* /END DATABASES */}
			</div>
		</section>
	);
});
