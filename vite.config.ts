import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

/**
 *  Instead of import sveld from 'vite-plugin-sveld';
 *  we are just copy/pasting the file here since the library isn't up to date.
 *  */ 

import { ComponentParser } from 'sveld';
import sveltePreprocess from 'svelte-preprocess';
import * as svelte from 'svelte/compiler';
import qs from 'query-string';

function sveld() {
	return {
		name: 'vite-plugin-sveld',
		async transform(src, id) {
			const query = qs.parse(id.split('?')[1])

			if ('raw' in query && 'sveld' in query) {
				const raw = JSON.parse(src.split('export default ')[1])
				// console.log('raw:', raw);

				let { code } = await svelte.preprocess(raw, sveltePreprocess(), {
					filename: id
				})
				const data = new ComponentParser({
					verbose: false
				}).parseSvelteComponent(code, {
					filePath: id,
					moduleName: id
				})
				
				return {
					code: `export default ${JSON.stringify(data)}`,
					map: null
				}
			}
		}
	}
}

// import transformerDirectives from '@unocss/transformer-directives'

// import {
//   presetAttributify,
//   // presetIcons,
//   presetUno,
//   presetWind,
//   transformerVariantGroup,
// } from 'unocss';

// import extractorSvelte from '@unocss/extractor-svelte';
// import presetIcons from '@unocss/preset-icons'

// import { colors, presetAtoUI } from './src/lib/preset/index';

export default defineConfig({
	plugins: [
    	sveld(),
		sveltekit(),
		UnoCSS({
      		configFile: './unocss.config.ts',
			configDeps: [
				'./src/lib/preset/_theme/colors.ts',
				'./src/lib/preset/_rules/animation.ts',
				'./src/lib/preset/_rules/background.ts',
				'./src/lib/preset/_rules/border.ts',
				'./src/lib/preset/_rules/buttons.ts',
				'./src/lib/preset/_rules/cards.ts',
				'./src/lib/preset/_rules/chips.ts',
				'./src/lib/preset/_rules/image.ts',
				'./src/lib/preset/_rules/index.ts',
				'./src/lib/preset/_rules/shadow.ts',
				'./src/lib/preset/_rules/spinners.ts',
				'./src/lib/preset/_rules/svg.ts',
				'./src/lib/preset/_rules/text.ts',
			]
			// extractors: [extractorSvelte()],
      // theme: {
      // },
      // presets: [
      //   presetUno(),
      //   presetAttributify(),
      //   presetIcons({
      //       extraProperties: {
      //           'display': 'inline-block',
      //           'vertical-align': 'middle',
      //       },
      //   }),
      //   presetWind(),
      //   presetAtoUI()
      // ],
      // transformers: [
      //   transformerVariantGroup(),
      //   transformerDirectives()
      // ],
		})
	]
});