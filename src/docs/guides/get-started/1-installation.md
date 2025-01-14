---
title: Installation
description: Describes how to set up your project to use Ato-UI and UnoCSS.
icon: i-material-symbols-rocket-launch-rounded
---

# Installation

Use the package manager of your choice. Here is the `pnpm` install:

```shell showCode=true
pnpm add -D ato-ui
```

## Dependencies

We rely on some dependencies, so make sure they are also installed.

```shell showCode=true
pnpm add -D unocss @unocss/core @unocss/preset-wind @unocss/preset-icons @unocss/reset svelte-headlessui @grail-ui/svelte
```

## UnoCSS Config

Create a `unocss.config.ts` file.

```typescript showCode=true title="unocss.config.ts"
import { defineConfig } from 'unocss';
import presetWind from '@unocss/preset-wind';

import { presetAtoUI } from 'ato-ui';

export default defineConfig({
  presets: [
    presetWind(),
    presetAtoUI(),
  ],
})
```

## Vite Config

Set up your `vite.config.ts` file.

```typescript showCode=true title="vite.config.ts"
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		UnoCSS({
      		configFile: './unocss.config.ts',
		})
	]
});
```

## Update Layout

Next we need to setup the root `+layout.svelte` file by importing `uno.css`. You can also do [style resetting](https://unocss.dev/guide/style-reset) like tailwind does. 

You can then import a theme from `ato-ui/themes/...` or use a custom one that you created in our [designer](/designer) page.

Our themes also all have a class name that is the same as the css file name, so make sure to add it to a wrapping `div`. You can see all our themes in our [styles repo page](https://github.com/bennymi/ato-ui/tree/main/src/lib/styles/themes).

```svelte showCode=true title="./src/routes/+layout.svelte"
<script lang="ts">
	import 'ato-ui/themes/ato.css';

	import '@unocss/reset/tailwind.css';
	import 'uno.css';
</script>

<div class="ato">
    <slot />
</div>
```

## Recommended VSCode Extensions

We recommend installing a few VSCode extensions to make the development experience more enjoyable. The [Unocss extension](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) and the [Iconify Intellisense extension](https://marketplace.visualstudio.com/items?itemName=antfu.iconify).

If you have the Tailwind extension installed you probably also want to disable it for projects in which you are using UnoCSS, since the extensions might not work together well.