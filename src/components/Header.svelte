<script lang="ts">
	import { page } from '$app/stores';
	import { createEventDispatcher } from 'svelte';
	import { faBars, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let isSidebarExpanded: boolean = false;
	$: backPath = $page.url.pathname === "/" ? "" : $page.url.pathname.split('/').slice(0, -1).join('/') || "/";

	const dispatch = createEventDispatcher();

	function toggleSidebarMode() {
		dispatch("toggleSidebarMode");
	}
</script>
<header>
	<div class="flex">
		<div class="hidden sm:block">
			<button
				class="flex items-center justify-center pl-2"
				on:click={toggleSidebarMode}
			>
				<Fa icon={isSidebarExpanded ? faEllipsisVertical : faBars} />
			</button>
		</div>
		<div class="sm:hidden {!backPath && 'hidden'}">
			<a href="{backPath}"><span class="mr-2">&#8592;</span><span>{backPath === "/" ? "Home" : "Back"}</span></a>
		</div>
		<div class="w-full text-center">{$page.url.pathname} [{backPath}]</div>
	</div>
</header>