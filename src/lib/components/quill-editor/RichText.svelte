<script lang="ts">
	import { Editor } from 'bytemd';
	import gfm from '@bytemd/plugin-gfm';

	export let value: string;

	const plugins = [
		gfm()
		// Add more plugins here
	];

	/**
   *
   * @remarks
  	export function handleChange(e: { detail: { value: string } }) {
		value = e.detail.value;
	}
   */
	export let onChange: (e: { detail: { value: string } }) => void;
</script>

<Editor {value} {plugins} on:change={onChange} />
