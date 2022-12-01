<script lang="ts">
	import XModal from '$lib/components/XModal.svelte';
	import { pokerUserStore } from '$lib/stores/pockergame/CreateUser.store';

	let modalTitle = 'New user';

	const onClose = () => {
		pokerUserStore.closeUserMenu();
	};

	const onOk = () => {
		pokerUserStore.createUser();
	};
</script>

{#if $pokerUserStore.is_catalog_open}
	<XModal {onClose} {onOk} title={modalTitle}>
		<div slot="body" class="flex w-full">
			<input
				class="my-10 h-10 w-full border p-2"
				value={$pokerUserStore.user_name}
				placeholder="catalog title"
				on:change={pokerUserStore.onChangeUserName}
			/>
		</div>
	</XModal>
{/if}
