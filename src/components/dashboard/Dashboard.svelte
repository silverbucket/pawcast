<script lang="ts">
	import DashboardItem from '$components/dashboard/DashboardItem.svelte';
	import { faFileImport, faJedi, faGauge, faPray } from '@fortawesome/free-solid-svg-icons';
</script>
<div class="grid grid-cols-1 w-full overflow-hidden">
	<DashboardItem title="Inbox" icon={faPray} url="/inbox" />
	<DashboardItem title="Forecast" icon={faGauge} url="/forecast" />
	<DashboardItem title="Projects" icon={faJedi} url="/projects" />
	<DashboardItem title="Tags" icon={faFileImport} url="/tags" />
</div>
