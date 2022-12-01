<script type="ts">
	import { onDestroy, onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import XButton from './XButton.svelte';

	// logic
	export let onClose: undefined | (() => void) = undefined;
	export let onOk: (() => void) | undefined = undefined;
	export let title: string = '';
	export let footer: boolean = true;

	// style
	export let bodyClass: string = '';

	const onCloseHandleClick = (e: MouseEvent) => {
		if ((e.target as Element).matches('.xmodal')) {
			onClose?.();
		}
	};

	onMount(() => {
		document.addEventListener('click', onCloseHandleClick, true);
	});

	// lifecycle
	onDestroy(() => {
		document.removeEventListener('click', onCloseHandleClick, true);
	});
</script>

<div
	out:fade
	class="xmodal fixed z-50 flex h-full w-full items-center justify-center bg-gray-600/70"
>
	<div class={`flex h-fit min-h-[30%] w-[600px] flex-col rounded-sm bg-white p-5 ${bodyClass}`}>
		<div class="relative h-10">
			<div class="font-bold">{title}</div>
			<button
				on:click={onClose}
				class="absolute top-0 right-0 cursor-pointer font-bold transition-all duration-300 hover:text-red-500"
			>
				X
			</button>
		</div>
		<div class="flex w-full flex-auto justify-center">
			<slot name="body" />
		</div>
		<div class="flex justify-end gap-10">
			{#if footer}
				<XButton onClick={onClose} class="hover:bg-red-500" title="cancel" />
				<XButton onClick={onOk} class=" bg-green-500 hover:bg-green-600">create</XButton>
			{:else}
				<slot name="footer" />
			{/if}
		</div>
	</div>
</div>
