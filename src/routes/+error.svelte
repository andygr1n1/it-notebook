<script context="module" type="ts">
	import { page } from '$app/stores';
	import MotionDiv from '../lib/components/MotionDiv.svelte';
</script>

<div class="flex h-full w-full flex-col items-center justify-center  gap-4 rounded-md p-5">
	<MotionDiv class="font-bold" data="Error" />
	<h1>{$page.status}</h1>
	<MotionDiv class="font-bold" data={$page.error?.message} />
</div>
