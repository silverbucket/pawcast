<script lang="ts">
	import Fa from "svelte-fa";
	import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
	import { page } from "$app/stores";

	export let url: string;
	export let label: string;
	export let icon: IconDefinition;
	export let external = false;
	export let recursive = false;
	export let disabled = false;
	export let disabledMessage = "";
	export let additionalActiveUrls: string[] = [];
	export let sidebarWidthCollapsedPx: number;
	export let sidebarWidthExpandedPx: number;
	export let isSidebarExpanded: boolean;

	let isHoveredOver = false;

	let id = "";

	function show() {
		isHoveredOver = true;
	}

	function hide() {
		isHoveredOver = false;
	}

	$: bgClass = isHoveredOver ? "bg-cyan-900" : isActive ? "bg-cyan-700" : "";
	$: colorClass = isActive && !isHoveredOver ? "text-blue-4" : "";
	$: colorClassForDisabled = disabled ? "text-grey-1" : "";
	$: title = disabled ? disabledMessage : "";
	$: sidebarWidthsDifferencePx = sidebarWidthExpandedPx - sidebarWidthCollapsedPx;


	let isActive = checkWhetherIsActive($page.url.pathname);

	function checkWhetherIsActive(pathname: string): boolean {
		if (!pathname) return false;
		if (recursive) {
			if (pathname.startsWith(url)) return true;
		} else {
			if (pathname === url) return true;
		}
		if (!additionalActiveUrls) return false;
		return additionalActiveUrls.some((url) => pathname.startsWith(url));
	}
</script>

<li {title} class="h-12">
	<a
		class:pointer-events-none={disabled}
		class="relative block h-full"
		href={url}
		target={external ? "_blank" : undefined}
		on:mouseenter={show}
		on:mouseleave={hide}
	>
		<div class="flex overflow-hidden transition-all duration-100 {bgClass} {colorClassForDisabled}"
				style="width: {isSidebarExpanded ? sidebarWidthExpandedPx : sidebarWidthCollapsedPx}px;"
                >
			<div
				class="text-2xl p-2 {colorClass}"
			>
				<Fa {icon} />
			</div>
			<div class="p-2 absolute {!isSidebarExpanded && !isHoveredOver && 'hidden'}"
					 style="width: {sidebarWidthsDifferencePx}px; left: {sidebarWidthCollapsedPx}px;"
			>
				{label}
			</div>
		</div>
	</a>
</li>
