<script lang="ts">
	import Fa from 'svelte-fa';
	import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

	export let title: string;
	export let url: string;
	export let icon: IconDefinition;
	export let isSidebarExpanded: boolean = false;

	let isHoveredOver = false;

	function show() {
		isHoveredOver = true;
	}

	function hide() {
		isHoveredOver = false;
	}
</script>

<div {title}>
	<a
		href={url}
		on:mouseenter={show}
		on:mouseleave={hide}
	>
		<div class="flex"
		>
			<div
				class="text-3xl p-2 w-12"
			>
				<Fa {icon} />
			</div>
			<div class="p-2 w-full mt-1"
			>
				{title}
			</div>

		</div>
	</a>
</div>