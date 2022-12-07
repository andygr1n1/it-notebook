<script lang="ts">
</script>

<input placeholder="search for article..." class="search-arts" />

<style lang="scss">
	.search-arts {
		@apply m-auto w-[300px] rounded-md  border-2 border-transparent p-5  text-red-700 transition-all duration-300;

		padding: 20px;
		box-shadow: 0 7px 2px -1px rgba(230, 4, 23, 0.404);
		font-family: 'Cascadia Code', Courier, monospace;
		font-weight: bold;

		&:focus {
			outline: none;
			/* box-shadow: 3px 3px 3px 3px rgba(255, 24, 43, 0.2); */
			box-shadow: 0 8px 2px -1px rgba(230, 4, 23, 0.699);
		}

		&:disabled {
			border: 1px solid transparent;
			cursor: default;
			color: #475569; //slate-600
		}
	}
</style>
