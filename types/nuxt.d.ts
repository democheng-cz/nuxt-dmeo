import { NuxtApp } from "nuxt/app"

declare module "nuxt/app" {
	interface NuxtApp {
		$testPlugin: () => string
	}
}

declare module "@vue/runtime-core" {
	interface ComponentCustomProperties {
		$testPlugin: () => string
	}
}
