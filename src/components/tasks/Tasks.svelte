<script lang="ts">
	import tasks from "$stores/tasks";
	tasks.sync();
</script>

<div>
	<ul class="list-none">
		{#each $tasks as task}
			<li class="mt-2">
				<div class="flex">
					<div class="w-6 mr-4">
						<input type="checkbox" class="float-left rounded-full w-6 h-6 mt-1" checked="{task.completed && true}">
					</div>
					<div>
						<div>{task.name}</div>
						<div class="text-xs">
							<div>
								{#if task.notes}
									<span class="text-gray-600">{task.notes}</span>
								{:else}
									<span class="text-gray-400">Notes</span>
								{/if}
							</div>
							<div>
								{#if task.tags.length > 0}
									{#each task.tags as tag}<span class="pr-1 text-cyan-700">#{tag}</span>{/each}
								{:else}
									<span class="text-gray-400">Add tags</span>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>