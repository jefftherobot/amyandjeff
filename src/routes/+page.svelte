<script lang="ts">
	import Intro from "$lib/components/Intro.svelte";
	import Events from "$lib/components/Events.svelte";
	import Questions from "$lib/components/Questions.svelte";
	import Hotel from "$lib/components/Hotel.svelte";
	import Registry from "$lib/components/Registry.svelte";
	import Venue from "$lib/components/Venue.svelte";
	import Rsvp from "$lib/components/Rsvp.svelte";
	import Footer from "$lib/components/Footer.svelte";
</script>

<div class="h-full w-full flex justify-center items-center">
	<div class="w-full text-center flex flex-col items-center">
		<section id="intro">
			<Intro />
		</section>
		<section id="events">
			<Events />
		</section>
		<section id="venue">
			<Venue />
		</section>
		<section id="hotel">
			<Hotel />
		</section>
		<section id="questions">
			<Questions />
		</section>
		<section id="registry">
			<Registry />
		</section>
		<section id="rsvp">
			<Rsvp />
		</section>
		<section id="footer">
			<Footer />
		</section>
	</div>
</div>

<style>
	section{ 
		width: 100%;
		}
</style>
