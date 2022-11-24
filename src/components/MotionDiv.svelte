<script type="ts">
	import { onDestroy, onMount } from 'svelte';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	export let data = '',
    animate: any = 'hidden';

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const transition={ ease: 'easeOut', duration: 3 }


    onDestroy(() => {
        animate = 'hidden'
    })

    onMount(() => {
        animate = 'visible'
    })
</script>

<Motion let:motion {animate} {transition} {variants} initial='hidden' >
	<div use:motion  class={`h-auto w-auto opacity-0 ${$$props.class}`}>{data}</div>
</Motion>

