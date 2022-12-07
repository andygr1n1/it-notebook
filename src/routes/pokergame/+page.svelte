<script lang="ts">
	import PockerCard from '$lib/components/pokergame/pokercard/PokerCard.svelte';
	import XButton from '$lib/components/XButton.svelte';
	import { pokerEstimationCards } from '$lib/stores/pockergame/Pockergame.store';
	import PockerEstimationCard from '$lib/components/pokergame/pokerestimationcard/PokerEstimationCard.svelte';
	import Icon from '@iconify/svelte';
	import CreateUser from '$lib/components/pokergame/create-user-menu/CreateUser.svelte';
	import { pokerUserStore } from '$lib/stores/pockergame/CreateUser.store';
	import { reveal_cards } from '$lib/stores/pockergame/Pockergame.store';

	import { useQuery } from '@sveltestack/svelte-query';
	import { fethUserByPk, type IUserByPkResponse } from '$lib/graphql/queries/fethUserByPk.query';

	let estimationDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	let user_id = 'f192b78e-399e-4fc5-9676-ce0bf65b220b';

	const openUserMenu = () => {
		pokerUserStore.openUserMenu();
	};

	const removeCards = () => {
		pokerEstimationCards.update(() => {
			return [];
		});
		reveal_cards.set(false);
	};

	const revealCards = () => {
		reveal_cards.set(true);
	};

	const user = useQuery<IUserByPkResponse | undefined, { message: string }>(
		['heroes_by_pk', user_id],
		() => fethUserByPk(user_id),
		{
			enabled: !!user_id
		}
	);

	console.log('user', $user);
</script>

<div class="flex h-full w-full flex-col">
	<div class="flex h-36 w-full items-center justify-center gap-5 p-5 text-xl font-bold">
		<span> {`JOKER ${$pokerUserStore.user_name}`}</span>
		{#if !$pokerUserStore.user_name}
			<button
				class="cursor-pointer rounded-full bg-white p-4 transition-colors duration-300 hover:text-green-600"
				on:click={openUserMenu}
			>
				<Icon icon="ion:person" height={20} width={20} />
			</button>
		{/if}
	</div>
	{#if $pokerUserStore.user_name}
		<div
			class="relative m-4 flex h-[400px] flex-wrap items-center justify-center rounded-md bg-white p-5"
		>
			<XButton
				class="absolute right-0 -top-8 !rounded-md border-red-500 bg-red-500 hover:bg-red-600"
				onClick={removeCards}>clear</XButton
			>
			{#each $pokerEstimationCards as estimationCard}
				<PockerEstimationCard {estimationCard} />
			{/each}
		</div>
		{#if !$reveal_cards}
			<div class="flex h-full w-full flex-auto items-center justify-center">
				{#each estimationDays as estDay}
					<PockerCard count={estDay} />
				{/each}
			</div>

			<div class="flex h-20 items-center justify-center gap-10 p-10">
				<XButton
					disabled={!$pokerEstimationCards.length}
					class="!rounded-md bg-green-500 text-white hover:bg-green-600"
					onClick={revealCards}>reveal cards</XButton
				>
			</div>
		{/if}
	{/if}
</div>

<CreateUser />
