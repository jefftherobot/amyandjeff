<script lang="ts">
	import '../app.postcss';
	
	// Font Awesome
	import '@fortawesome/fontawesome-free/css/fontawesome.css';
	import '@fortawesome/fontawesome-free/css/regular.css';
	import '@fortawesome/fontawesome-free/css/brands.css';
	import '@fortawesome/fontawesome-free/css/solid.css';

	import "@fontsource/alegreya";

	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { initializeStores, Drawer } from '@skeletonlabs/skeleton';

	initializeStores();

	import { getDrawerStore } from "@skeletonlabs/skeleton";
	import { page } from '$app/stores';

	import Logo from "$lib/components/Logo.svelte";
	import HorizontalRuleMenu from "$lib/components/HorizontalRuleMenu.svelte";

	const drawerStore = getDrawerStore();

	// Drawer Handler
	function drawerOpen(): void {
		//const s: DrawerSettings = { id: 'mobile-sidenav' };
		drawerStore.open();
	}

	function drawerClose(): void {
		//const s: DrawerSettings = { id: 'mobile-sidenav' };
		drawerStore.close();
	}

	$: classesActive = (href: string) => (href === $page.url.pathname ? '!variant-filled-primary' : '');
</script>
<Drawer>
	<section class="p-4 pb-20 space-y-4 overflow-y-auto">
			<!-- Title -->
			<div class="flex justify-end">
				<!-- Hamburger Menu -->
				<button on:click={drawerClose} class="btn-icon btn-icon-sm">
					<i class="fa-solid fa-close text-xl"></i>
				</button>
			</div>
			<!-- Nav List -->
			<nav class="list-nav">
				<ul>
						<li>
							<a href="#venue" data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
								<span class="flex-auto">Venue</span>
							</a>
						</li>
						<li>
							<a href="#events" data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
								<span class="flex-auto">Schedule</span>
							</a>
						</li>
						<li>
							<a href="#hotel" data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
								<span class="flex-auto">Hotel</span>
							</a>
						</li>
						<li>
							<a href="#questions" data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
								<span class="flex-auto">Q&A</span>
							</a>
						</li>
						<li>
							<a href="#registry" data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
								<span class="flex-auto">Our Registry</span>
							</a>
						</li>
						<li>
							<HorizontalRuleMenu/>
						</li>
						<li>
							<a href="#rsvp" class="btn btn-sm variant-filled-primary" data-sveltekit-preload-data="hover" on:keypress on:click={drawerStore.close}>
								<span class="flex-auto">RSVP</span>
							</a>
						</li>
				</ul>
			</nav>
			<!-- Divider -->
			<hr class="!my-6 opacity-50" />
	</section>
</Drawer>
<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		
			<!-- App Bar -->
			<AppBar gridColumns="grid-cols-[auto_1fr_auto]" slotDefault="" slotTrail="place-content-end" >
				<svelte:fragment slot="lead">
					<div class="flex items-center space-x-4 uppercase">
						<!-- Hamburger Menu -->
						<button on:click={drawerOpen} class="btn-icon btn-icon-sm lg:!hidden">
							<i class="fa-solid fa-bars text-xl"></i>
						</button>
						<!-- Logo -->
						 <Logo />
					</div>
				</svelte:fragment>
				<div class="relative hidden lg:block uppercase">
					<a class="btn btn-sm ml-5" href="#events">
						Schedule
					</a>
					<a class="btn btn-sm ml-5" href="#hotel">
						Hotel
					</a>
					<a class="btn btn-sm ml-5" href="#questions">
						Q&A
					</a>
					<a class="btn btn-sm ml-5" href="#registry">
						Our Registry
					</a>
					
			</div>
				
				<svelte:fragment slot="trail">
					<a class="btn variant-ghost-surface" href="#venue">
						Venue
					</a>
					<a class="btn variant-filled-primary" href="#rsvp">
						RSVP
					</a>
				</svelte:fragment>
			</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>