<script context="module" type="ts">
	import { page } from '$app/stores';
	import MotionDiv from '../components/MotionDiv.svelte'
	let i = 0;
</script>

<div class="flex items-center p-5 flex-col gap-4 rounded-md  justify-center h-full w-full">
	<MotionDiv class='font-bold' data='Error'/>
	<h1>{$page.status}</h1>
	<MotionDiv class='font-bold' data={$page.error?.message}/>
</div>
