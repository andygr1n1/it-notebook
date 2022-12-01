<script lang="ts">
	import type { IEstimationCard } from '$lib/stores/pockergame/Pockergame.store';
	export let estimationCard: IEstimationCard;
	import { pokerUserStore } from '$lib/stores/pockergame/CreateUser.store';
	import { reveal_cards } from '$lib/stores/pockergame/Pockergame.store';
</script>

<div class="ga-2 flex flex-col items-center ">
	<button class={`${!$reveal_cards ? 'not-revealed' : ''}`}>
		{#if $reveal_cards}
			{estimationCard.estimation}
		{/if}
	</button>
	<span class="text-sm">{$pokerUserStore.user_name}</span>
</div>

<style lang="scss">
	button {
		@apply m-2 flex h-[100px] w-[50px] cursor-pointer select-none
		items-center justify-center rounded-md border bg-white text-xl font-bold
		transition-all duration-300 hover:bg-green-100 hover:shadow-md;

		&.not-revealed {
			@apply bg-green-200;
		}
	}
</style>
