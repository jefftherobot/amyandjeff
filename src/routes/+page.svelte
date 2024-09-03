<script lang="ts">
	import Intro from "$lib/components/Intro.svelte";
	import HowWeMet from "$lib/components/HowWeMet.svelte";
	import Venue from "$lib/components/Venue.svelte";
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<section id="intro">
			<Intro />
		</section>
		<section id="howWeMet">
			<HowWeMet />
		</section>
		<section id="venue">
			<Venue />
		</section>
		
	</div>
</div>

<style>
	section{ 
		padding: 20px; 
		min-height: 750px;
		}
</style>
