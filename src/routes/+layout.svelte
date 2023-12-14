<script>
	import "../app.css";
	import { page } from '$app/stores';
	import Header from '$components/Header.svelte';
	import Dashboard from '$components/dashboard/Dashboard.svelte';

	$: isSidebarExpanded = false;
	function toggleSidebarMode() {
		isSidebarExpanded = !isSidebarExpanded;
	}
</script>

<div class="flex flex-col">
	<div class="border border-green-400 fixed w-full bg-gray-100 h-8 pt-1 pl-1">
		<Header {isSidebarExpanded} on:toggleSidebarMode={toggleSidebarMode}/>
	</div>
	<div class="flex flex-row h-screen mt-6">
		<div class="border border-red-500 overflow hidden sm:block pt-4 {isSidebarExpanded ? 'sm:w-48' : 'sm:w-14'}">
			<aside><Dashboard/></aside>
		</div>
		<div class="border border-blue-500 overflow w-full p-4"><slot/></div>
	</div>
</div>
