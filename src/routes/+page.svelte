<script lang="ts">
	import Dashboard from '$components/dashboard/Dashboard.svelte';
	import Tasks from "$components/tasks/Tasks.svelte";
</script>

<div class="sm:hidden">
<Dashboard></Dashboard>
</div>
<div class="hidden sm:block">
<Tasks></Tasks>
</div>
