<script lang="ts">
	import projects from "$stores/projects";
	projects.sync();
</script>

<div>
	<h1>Projects</h1>
	<ul>
	{#each $projects as project}
		<li>{project.name}</li>
	{/each}
	</ul>
</div>
