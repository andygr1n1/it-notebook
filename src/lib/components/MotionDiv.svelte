<script type="ts">
	import { onDestroy, onMount } from 'svelte';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { fade } from 'svelte/transition';

	export let data = '';
	let animate = 'visible';

	const variants = {
		visible: { opacity: 1, x: 0 },
		hidden: { opacity: 0, x: -1000 }
	};

	export let transition = { ease: 'easeInOut', duration: 0.5 };

	onDestroy(() => {
		animate = 'hidden';
	});
</script>

<Motion
	let:motion
	{animate}
	{transition}
	{variants}
	initial="hidden"
	hidden="hidden"
	visible="visible"
>
	<div out:fade use:motion class={`${$$props.class}`}>
		<div>{data}</div>
		<slot />
	</div>
</Motion>
