<script lang="ts">
	import { faBorderAll } from '@fortawesome/free-solid-svg-icons';
	import { base } from '$app/paths';
	import ListItem from '$components/lists/ListItem.svelte';

	export let isSidebarExpanded: boolean;
	export let headerHeightPx: number;
	export let sidebarWidthCollapsedPx: number;
	export let sidebarWidthExpandedPx: number;

</script>

<aside
	class="transition-all duration-100 z-0 bg-gray-500"
	style="min-width: {isSidebarExpanded ? sidebarWidthExpandedPx : sidebarWidthCollapsedPx}px; padding-top: {headerHeightPx}px;"
>
	<nav
		class="sticky"
		style="top: 0px; height: 100vh;"
	>
		<ul class="absolute flex h-full flex-col pt-3 text-white">
			<ListItem
				icon={faBorderAll}
				label="All Tasks"
				url="{base}/all"
				additionalActiveUrls={[`${base}/all/`]}
				{sidebarWidthCollapsedPx}
				{sidebarWidthExpandedPx}
				{isSidebarExpanded}
			/>
		</ul>
	</nav>
</aside>
