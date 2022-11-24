<script>
	import { page } from '$app/stores';
	import Logo from '$lib/images/it-note.svg';
</script>

<header>
	<nav class='bg-white flex h-full w-full'>
		<ul class=' flex h-full w-full'>
			<img src={Logo} alt='it-notebook logo' class="w-10 mx-10"/>

			<li class={$page.url.pathname === '/' ? 'active' : undefined}>
				<a href="/">IT Notebook</a>
			</li>
			<li class='new-menu'>
				<a href="/">New catalog</a>
			</li>
			<li class={`flex ml-auto bg-red-500 ${$page.url.pathname === '/about' ? 'active' : undefined}`}>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: flex-start;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li.new-menu::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		@apply border-t-red-500 transition-colors duration-300;
	}

	li.active > a {
		@apply text-red-800;
	}

	li {
		position: relative;
		height: 100%;

		&.new-menu:hover {
			&::before {
				@apply border-t-red-800;

			}

		}
	}



	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		@apply text-red-800;
	}
</style>
