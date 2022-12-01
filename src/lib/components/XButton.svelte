<script lang="ts">
	// logic
	export let onClick: undefined | (() => void) = undefined;
	export let title: string = '';
	export let disabled: boolean = false;
</script>

<button
	{disabled}
	on:click={onClick}
	class={`rounded-sm border px-5 py-2 shadow-lg transition-all duration-300 disabled:bg-gray-300 disabled:text-gray-400 ${$$props.class}`}
>
	<span>{title}</span>
	<slot />
</button>
