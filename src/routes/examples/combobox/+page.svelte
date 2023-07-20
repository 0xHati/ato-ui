<script lang="ts">
	import Combobox from '$lib/components/combobox/Combobox.svelte';

	const options = [
		{ value: 'Aang', disabled: false },
		{ value: 'Toph', disabled: false },
		{ value: 'Katara', disabled: false },
		{ value: 'Sokka', disabled: true },
		{ value: 'Appa', disabled: false },
		{ value: 'Zuko', disabled: false },
		{ value: 'Iroh', disabled: false }

		// 'Wade Cooper',
		// 'Arlene Mccoy',
		// 'Devon Webb',
		// 'Tom Cook',
		// 'Tanya Fox',
		// 'Hellen Schmidt'
	];

	function onSelect(e: Event) {
		console.log('select', (e as CustomEvent).detail);
	}
</script>

<div class="flex gap-4 flex-wrap justify-center items-center">
	<Combobox items={options} activeStyle="bg-blue-400" inactiveStyle="opacity-50 bg-red-500" />
</div>
