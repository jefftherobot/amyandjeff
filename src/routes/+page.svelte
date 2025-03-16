<script lang="ts">
	import Intro from "$lib/components/Intro.svelte";
	import Events from "$lib/components/Events.svelte";
	import Photos from "$lib/components/Photos.svelte";
	import Questions from "$lib/components/Questions.svelte";
	import Town from "$lib/components/Town.svelte";
	import Registry from "$lib/components/Registry.svelte";
	import Venue from "$lib/components/Venue.svelte";
	import Rsvp from "$lib/components/Rsvp.svelte";
</script>

<div class="h-full w-full flex justify-center items-center">
	<div class="space-y-10 w-full  text-center flex flex-col items-center">
		<section id="intro">
			<Intro />
		</section>
		<section id="events">
			<Events />
		</section>
		<section id="photos">
			<Photos />
		</section>
		<section id="questions">
			<Questions />
		</section>
		<section id="registry">
			<Registry />
		</section>
		<section id="town">
			<Town />
		</section>
		<section id="venue">
			<Venue />
		</section>
		<section id="rsvp">
			<Rsvp />
		</section>
	</div>
</div>

<style>
	section{ 
		width: 100%;
		/* min-height: 700px; */
		}
</style>
