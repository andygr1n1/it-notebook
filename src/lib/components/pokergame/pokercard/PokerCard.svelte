<script lang="ts">
	import { pokerEstimationCards } from '$lib/stores/pockergame/Pockergame.store';
	import { pokerUserStore } from '$lib/stores/pockergame/CreateUser.store';

	export let count = 0;

	$: isActive = !!$pokerEstimationCards
		?.slice()
		.find((card) => card.user_id === $pokerUserStore.user_id && card.estimation === count);
</script>

<button
	class:selected={isActive}
	on:click={() => {
		pokerEstimationCards.update((cards) => {
			const updatedCards = cards.filter((card) => card.user_id !== $pokerUserStore.user_id);
			return [
				...updatedCards,
				{ name: $pokerUserStore.user_name, estimation: count, user_id: $pokerUserStore.user_id }
			];
		});
	}}
>
	{count}
</button>

<style lang="scss">
	button {
		@apply m-2 flex h-[100px] w-[50px] cursor-pointer select-none
		items-center justify-center rounded-md bg-white text-xl font-bold
		transition-all duration-300 hover:bg-green-100 hover:shadow-md;

		&.selected {
			@apply bg-green-200;
		}
	}
</style>
