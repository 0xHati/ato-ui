---
title: Buttons
description: Button classes that can be used.
---

# Buttons


## Regular Buttons
<div class="flex justify-center items-center flex-wrap gap-4">
	<button class="btn-primary">Dark/Light</button>
	<button class="btn-tr-primary-tertiary-secondary">Click</button>
	<button class="btn-tr-primary/50-tertiary/50-secondary/50">Click</button>
	<button class="btn-border-surface-800-br-primary-secondary">Gradient border</button>
	<button class="btn-border-surface-800-br-primary-secondary-success">3 Gradient border</button>
	<button class="btn-border-surface-800/90-br-primary-secondary-success"
		>3 Gradient border (op90)</button
	>
	<button class="btn-glass-primary">Glass Primary</button>
	<!-- Overwritting the default background opacity of 30% for glass buttons -->
	<!-- <button class="btn-glass-primary/20">Glass Primary</button> -->
	<button class="btn-glass-secondary border-dashed">Glass Secondary dashed</button>
	<button class="btn-glass-success border-dotted">Glass Success Dotted</button>
	<button class="btn-glass-warning border-dotted">Glass Warning Dotted</button>
	<button class="btn-glass-secondary" disabled>Glass Disabled</button>
	<button class="btn-glass-tl-tertiary-primary">Glass Gradient</button>
	<!-- Glass Gradient with non-default opacity values -->
	<button class="btn-glass-tertiary/15-primary/15">Glass (Bg-Opacity 15%)</button>
	<button class="btn-glass-tl-tertiary-primary-secondary">Glass 3 Gradient</button>
	<button class="btn-b-primary-secondary">Dark/Light</button>
	<button class="btn-br-primary-400-secondary-800">Dark/Light</button>
	<button class="btn-glass-tl-tertiary-primary-secondary btn-sm">sm</button>
	<button class="btn-glass-tl-tertiary-primary-secondary btn-md">md</button>
	<button class="btn-glass-tl-tertiary-primary-secondary btn-lg">lg</button>
	<button class="btn-glass-tl-tertiary-primary-secondary btn-xl">xl</button>
</div>

## Icon Buttons
<div class="flex justify-center items-center flex-wrap gap-4">
	<button class="btn-br-primary-secondary btn-xl">
		<span class="i-material-symbols:notifications-active-rounded" />
	</button>
	<button class="btn-primary btn-icon btn-lg rounded-full">
		<!-- <span class="sr-only">Alarm</span> -->
		<span class="i-material-symbols:notifications-active-rounded" />
	</button>
	<button
		class="btn-border-surface-bl-primary-secondary-success btn-icon rounded-full hover:(text-surface-900)"
	>
		<!-- <span class="sr-only">Alarm</span> -->
		<span class="i-material-symbols:add-shopping-cart-outline-rounded" />
	</button>
	<button class="btn-border-surface-tl-primary-tertiary-error">
		<!-- <span class="sr-only">Alarm</span> -->
		<span class="i-material-symbols:notifications-active-rounded" />
		<span>Alarm</span>
	</button>
	<button class="btn-border-surface-tr-success-warning hover:(text-surface-900)">
		<!-- <span class="sr-only">Alarm</span> -->
		<span class="i-material-symbols:temp-preferences-eco-outline" />
		<span>Green</span>
	</button>
</div>

## Button Groups

### Regular

### Outline
<section class="flex flex-col gap-4 justify-center items-center">
	<div class="btn-group-error/90">
		<button>
			<span class="text-xl i-material-symbols:water-drop-rounded" />
			<span>Water</span>
		</button>
		<button>
			<span class="text-xl i-material-symbols:globe-uk" />
			<span>Earth</span>
		</button>
		<button>
			<span class="text-xl i-mdi:fire" />
			<span>Fire</span>
		</button>
	</div>
	<div class="btn-group-outline-secondary">
		<button>
			<span class="text-xl i-material-symbols:water-drop-rounded" />
			<span>Water</span>
		</button>
		<button>
			<span class="text-xl i-material-symbols:globe-uk" />
			<span>Earth</span>
		</button>
		<button>
			<span class="text-xl i-mdi:fire" />
			<span>Fire</span>
		</button>
	</div>
	<div class="btn-group-outline-primary-200">
		<button class="hover:(text-primary-900)!">
			<span class="text-xl i-material-symbols:water-drop-rounded" />
			<span>Water</span>
		</button>
		<button class="hover:(text-primary-900)!">
			<span class="text-xl i-material-symbols:globe-uk" />
			<span>Earth</span>
		</button>
		<button class="hover:(text-primary-900)!">
			<span class="text-xl i-mdi:fire" />
			<span>Fire</span>
		</button>
	</div>
</section>



<!-- Add a search functionality with all available shortcuts here -->
<!-- <style>
	h2 {
		@apply text-center text-2xl font-bold text-surface-900-200;
	}

	section {
		@apply flex flex-col gap-4 justify-center items-center py-64;
	}

	p {
		@apply text-surface-900-200;
	}
</style> -->