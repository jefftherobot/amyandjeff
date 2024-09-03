<script lang="ts">
	import '../app.postcss';
	
	// Font Awesome
	import '@fortawesome/fontawesome-free/css/fontawesome.css';
	import '@fortawesome/fontawesome-free/css/brands.css';
	import '@fortawesome/fontawesome-free/css/solid.css';

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Drawer Handler
	function drawerOpen(): void {
		// const s: DrawerSettings = { id: 'mobile-sidenav' };
		// drawerStore.open(s);
	}
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<div class="flex items-center space-x-4">
					<!-- Hamburger Menu -->
					<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
						<i class="fa-solid fa-bars text-xl"></i>
					</button>
					<!-- Logo -->
					<a class="lg:!ml-0 w-[32px] lg:w-auto overflow-hidden" href="#intro" title="Go to Homepage">
						Amy ❤️ Jeff
					</a>
				</div>
			</svelte:fragment>
			<div class="relative hidden lg:block">
				<a class="btn btn-sm" href="#howWeMet">
					How We Met
				</a>
				<a class="btn btn-sm" href="/">
					Events
				</a>
				<a class="btn btn-sm" href="/">
					Photos
				</a>
				<a class="btn btn-sm" href="/">
					Glimpse of the Town
				</a>
		</div>
			
			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-ghost-surface" href="#venue">
					Venue
				</a>
				<a class="btn btn-smv variant-filled-primary" href="/">
					RSVP
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>