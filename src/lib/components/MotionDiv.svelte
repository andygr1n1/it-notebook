<script type="ts">
	import { onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	export let data = '';
</script>

<div out:fade class={`${$$props.class}`}>
	<div>{data}</div>
	<slot />
</div>
