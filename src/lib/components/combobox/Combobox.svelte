<script lang="ts" context="module">
	export type ComboboxItem = {
		value: string;
		disabled: boolean;
	};
</script>

<script lang="ts">
	import { createCombobox } from '@melt-ui/svelte';

	/* MELT PROPS */

	/** A function that returns true if the item should be included in the filtered list. */
	export let filterFunction = (item: ComboboxItem, inputValue: string) => {
		const normalize = (str: string) => str.normalize().toLowerCase();
		const normalizedInput = normalize(inputValue);
		return normalizedInput === '' || normalize(item.value).includes(normalizedInput);
	};
	/** The list of items to display in the combobox list. */
	export let items: ComboboxItem[];
	/** A function that returns a string representation of the item. */
	export let itemToString = (item: ComboboxItem) => item.value;
	/** Whether or not the combobox should loop through the list when the end or beginning is reached. */
	export let loop = false;
	/** The alignment of the highlighted item when scrolling. */
	export let scrollAlignment: Extract<ScrollLogicalPosition, 'center' | 'nearest'> = 'nearest';

	/* OTHER PROPS */

	/** Set the value that should be selected. */
	export let selected = '';
	/** Set the width of the search bar. */
	export let width = 'w-72 min-w-50';
	/** Set the search icon. Example: 'i-material-symbols-cloud text-lg|xl'. */
	export let searchIcon = '';
	/** Set the select icon. Example: 'i-material-symbols-cloud text-lg|xl'. */
	export let selectIcon = '';
	/** Set the combobox input field placeholder */
	export let placeholder = '';
	/** Set the button styles. */
	export let buttonStyle = 'primary-500/90 hover:primary-500';
	/** Set the active list element styles. Use tokens such as 'primary-500'. */
	export let activeStyle = 'primary-500';
	/** Set the in-active list element styles. */
	export let inactiveStyle = 'text-surface-900';

	const { open, input, menu, item, inputValue, isSelected, filteredItems, selectedItem } =
		createCombobox({
			items,
			filterFunction,
			itemToString,
			scrollAlignment,
			loop
		});
	selected && selectedItem.set(selected);
</script>

<div class={width}>
	<div class="relative mt-1">
		<div
			class="flex w-full cursor-default overflow-hidden rounded-container text-left shadow-md shadow-surface-900/40 focus:outline-none focus-visible:(ring-2 ring-white ring-opacity-75 ring-offset-2 ring-offset-primary-300)"
		>
			<input
				{...$input}
				use:$input.action
				on:select
				class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-surface-900 focus:ring-0 transition-all"
				value={$inputValue}
				{placeholder}
			/>
			<button
				on:click={open.set(!$open)}
				type="button"
				class="flex justify-center items-center px-2 rounded-r-container transition-all {buttonStyle}"
			>
				{#if searchIcon}
					<span class={searchIcon} />
				{:else}
					<!-- i-material-symbols-search-check-rounded -->
					<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M8.925 9.7L10.9 7.725q.225-.225.525-.225t.525.225q.225.225.225.538t-.225.537l-2.5 2.5q-.225.225-.525.225T8.4 11.3L7.05 9.95q-.225-.225-.225-.537t.225-.538q.225-.225.525-.225t.525.225l.825.825ZM20.3 20.3q-.275.275-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"
						/></svg
					>
				{/if}
			</button>
		</div>

		<ul
			{...$menu}
			use:$menu.action
			class="absolute mt-1 max-h-60 w-full overflow-auto rounded-container bg-white py-1 text-base shadow-lg ring-1 ring-surface-900/10 focus:outline-none"
		>
			{#if $open}
				{#if $filteredItems.length !== 0}
					{#each $filteredItems as currItem, index (index)}
						<li
							{...$item({ index, item: currItem, disabled: currItem.disabled })}
							use:$item.action
							class="relative cursor-default select-none py-2 pl-10 pr-4 data-[highlighted]:{activeStyle} data-[disabled]:{inactiveStyle}"
						>
							<span class="block truncate {$isSelected(currItem) ? 'font-medium' : 'font-normal'}"
								>{currItem.value}</span
							>
							{#if $isSelected(currItem)}
								<span class="absolute inset-y-0 left-0 flex items-center pl-3">
									{#if selectIcon}
										<span class={selectIcon} />
									{:else}
										<!-- i-material-symbols-check-small-rounded -->
										<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
											><path
												fill="currentColor"
												d="m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l1.9 1.9Z"
											/></svg
										>
									{/if}
								</span>
							{/if}
						</li>
					{:else}
						<li class="relative cursor-default select-none py-2 pl-10 pr-4 text-surface-900">
							<span class="block truncate font-normal">Nothing found</span>
						</li>
					{/each}
				{/if}
			{/if}
		</ul>
	</div>
</div>
