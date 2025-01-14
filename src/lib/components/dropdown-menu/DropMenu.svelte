<!-- 
    Source: https://captaincodeman.github.io/svelte-headlessui/menu/
 -->

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { createMenu } from 'svelte-headlessui';

	import type { DropMenuGroup } from './types';

	const dispatch = createEventDispatcher();

	/** Set the label of the button. */
	export let label = 'Menu';
	/** Set the button class (eg. btn-primary). */
	export let buttonClass = 'btn-primary';
	/** Button icon. */
	export let buttonIcon = '';
	/** Pass in the item groups that should be displayed in the dropdown. */
	export let groups: DropMenuGroup[] = [];

	/** Set the width of the menu items. */
	export let width = 'w-56';
	/** Set the global hover styles. Individual item hover styles can be overwritten inside the group prop. */
	export let hoverStyle = 'bg-primary-500 text-on-primary';
	/** Set the regular text styles. */
	export let textStyle = 'text-surface-900-50';
	/** Set the styles of the icons. */
	export let iconStyle = 'text-primary-500';

	const menu = createMenu({ label: 'Actions' });

	function onSelect(e: Event) {
		dispatch('select', (e as CustomEvent).detail);
	}
</script>

<div class="relative inline-block text-left">
	<button
		use:menu.button
		on:select={onSelect}
		class="inline-flex w-full justify-center {buttonClass}"
	>
		<span>{label}</span>
		{#if buttonIcon}
			<span class="text-xl {buttonIcon}" />
		{/if}
	</button>

	{#if $menu.expanded}
		<div
			use:menu.items
			class="absolute right-0 mt-2 {width} origin-top-right rounded-container bg-inverse-white-surface-500 ring-1 ring-black ring-opacity-5 focus:outline-none shadow-lg shadow-surface-500/50-400/20"
		>
			{#each groups as { title, items }, i}
				<div class="px-1 py-1">
					{#if title}
						<div class="text-sm px-2 py-1 text-surface-800/80-200/80 font-semibold">
							{title}
						</div>
					{/if}
					{#each items as item}
						{@const active = $menu.active === item.text}
						<button
							use:menu.item
							class="group flex gap-1 rounded-btn items-center w-full px-2 py-2 text-sm font-medium {active
								? item.hoverStyle ?? hoverStyle
								: textStyle}"
						>
							<span class="text-lg {item.icon} {active ? '' : item.iconStyle ?? iconStyle}" />
							<span>{item.text}</span>
						</button>
					{/each}
				</div>
				{#if i !== groups.length - 1}
					<hr class="border-inverse-surface-200/90-surface-100/40 mx-2 rounded-btn" />
				{/if}
			{/each}
		</div>
	{/if}
</div>
