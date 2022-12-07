<script lang="ts">
	import { newCatalogStore } from '../../stores/NewCatalog.store';
	import XModal from '../XModal.svelte';

	let modalTitle = 'New menu';

	const onClose = () => {
		newCatalogStore.closeNewCatalog();
	};

	const onOk = () => {
		newCatalogStore.createNewCatalog();
	};
</script>

{#if $newCatalogStore.is_catalog_open}
	<XModal {onClose} {onOk} title={modalTitle} >
		<div slot="body" class="flex w-full">
			<input
				class="my-10 h-10 w-full border p-2"
				value={$newCatalogStore.new_catalog_title}
				placeholder="catalog title"
				on:change={newCatalogStore.onChangeNewCatalogTitle}
			/>
		</div>
	</XModal>
{/if}
